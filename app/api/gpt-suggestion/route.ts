import { strict_output } from "@/lib/gpt";
import { createSuggestionSchema } from "@/validators/suggestion";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { salary, country, manufacturer, carType } = createSuggestionSchema.parse(body)
        type outputSuggestion = {
            manufacturer: string
            car_type: string
            price: number
            date: string
        }
        let output_suggestion: outputSuggestion = await strict_output(
            "As an AI car salesperson, envision recommending a particular type of car, which should encompass information regarding the car's type, manufacturer, country of origin, and a rough price range. Craft a persuasive message aimed at a potential buyer, emphasizing the recommended car's standout features and advantages.",
            `I have a monthly budget of ${salary}  for a car lease, and I'm located in ${country}. Can you suggest some compact car models that fit my budget? I'm considering leasing ${manufacturer}, or ${carType} class. within the following table pattern?



            {
               manufacturer: string;
               car_class: string;
               price: number;
               date: string;
           }`,
            {
                manufacturer: "",
                car_type: "",
                price: "",
                date: ""
            }
        )
        return NextResponse.json(output_suggestion)
    } catch (error) {
        if (error instanceof ZodError) {
            return new NextResponse("invalid body", { status: 400 });
        }
        console.error(error);
    }
}
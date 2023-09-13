import { createSuggestionSchema } from "@/validators/suggestion"
import { z } from "zod"

export type CarBrandProp = {
    item: {
        name: string,
        slug: string,
        image: {
            source: string,
            thumb: string,
            optimized: string,
            original: string,
            localThumb: string,
            localOptimized: string,
            localOriginal: string
        }
    }

}

export type InputCreateSuggestionProp = z.infer<typeof createSuggestionSchema>

export type CountryProp = {
    country: string
    setCountry: (country: string) => void;
}

export type SalaryProp = {
    salary: string
    setSalary: (salary: string) => void;
}


export type CarTypeProp = {
    carType: string
    setCarTypes: (CarType: string) => void;
}

export type SearchManuFacturerProps = {
    manufacturer: string
    setManuFacturer: (manufacturer: string) => void;
}
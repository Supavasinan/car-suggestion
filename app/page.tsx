import { HeroPage } from "@/components/HeroPage";
import { Suggestion } from "@/components/Suggestion";
import { CarProps, FilterProps } from "@/types";
type Prop = {
    searchParams: FilterProps
}
export default async function Home({searchParams}:Prop) {
   
    return (
        <div>
            <HeroPage />
            <Suggestion  searchParams={searchParams}/>
        </div>
    )
}

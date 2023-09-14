import { Hero } from "@/components/Hero";
import { SocialList } from "@/components/SocialList";
import { Suggestion } from "@/components/Suggestion";
import { FilterProps } from "@/types";
type Prop = {
    searchParams: FilterProps
}
export default async function Home({ searchParams }: Prop) {

    return (
        <div>
            <Hero />
            <SocialList />
            <Suggestion searchParams={searchParams} />
        </div>
    )
}

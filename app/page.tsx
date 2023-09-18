import { Hero } from "@/components/Hero";
import { SocialList } from "@/components/SocialList";
import { Suggestion } from "@/components/Suggestion";
import { FilterProps } from "@/types";

export default async function Home({ searchParams }: { searchParams: FilterProps }) {
    return (
        <div>
            <Hero />
            <SocialList />
            <Suggestion searchParams={searchParams} />
        </div>
    )
}

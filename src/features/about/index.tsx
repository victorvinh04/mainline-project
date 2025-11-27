import { AboutComponent } from "@/components/blocks/about-component";
import { AboutHero } from "@/components/blocks/about-hero";
import { Investors } from "@/components/blocks/investors";
import { DashedLine } from "@/components/dashed-line";

export function AboutPage() {
    return (

        <div className="py-28 lg:py-32 lg:pt-44">
            <AboutHero />
            <AboutComponent />
            <div className="pt-28 lg:pt-32">
                <DashedLine className="container max-w-5xl scale-x-115" />
                <Investors />
            </div>
        </div>
    )
}

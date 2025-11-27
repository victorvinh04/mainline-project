import { createFileRoute } from '@tanstack/react-router'

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";

import { Main } from "@/components/layout/main";
import { Navbar } from '@/components/blocks/navbar';
import { Footer } from '@/components/blocks/footer';

export const Route = createFileRoute('/blogs/')({
    component: Blogs,
})

export function Blogs() {
    return (
        <>
            {/* ===== Top Heading ===== */}
            <div className='ms-auto flex items-center space-x-4'>
                <Navbar />
            </div>
            <Main fixed>
                <Background className="via-muted to-muted/80">
                    <Hero />
                    <Logos />
                    <Features />
                    <ResourceAllocation />
                </Background>
                <Testimonials />
                <Background variant="bottom">
                    <Pricing />
                    <FAQ />
                </Background>
            </Main>
            <Footer />
        </>
    )
}
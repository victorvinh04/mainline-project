import { Background } from "@/components/background";
import { Pricing } from "@/components/blocks/pricing";
import { PricingTable } from "@/components/blocks/pricing-table";

export function PricingPage() {
    return (
        <Background>
            <Pricing className="py-28 text-center lg:pt-44 lg:pb-32" />
            <PricingTable />
        </Background>
    );
};


import { PricingPage } from '@/features/pricing'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/pricing/')({
  component: PricingPage,
})
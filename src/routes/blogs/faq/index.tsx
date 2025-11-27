import { FaqPage } from '@/features/faq'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/faq/')({
  component: FaqPage,
})


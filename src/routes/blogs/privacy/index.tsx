import { PrivacyPage } from '@/features/privacy'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/privacy/')({
    component: PrivacyPage,
})

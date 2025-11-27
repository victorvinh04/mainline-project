import { ContactPage } from '@/features/contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/contact/')({
    component: ContactPage,
})

// function RouteComponent() {
//   return <div>Hello "/blogs/contact/"!</div>
// }

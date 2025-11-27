import { Blogs } from '@/features/blogs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/')({
  component: Blogs,
})

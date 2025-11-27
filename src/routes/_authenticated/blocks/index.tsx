import { createFileRoute } from '@tanstack/react-router'
import { Blocks } from '@/features/blocks'

export const Route = createFileRoute('/_authenticated/blocks/')({
  component: Blocks,
})

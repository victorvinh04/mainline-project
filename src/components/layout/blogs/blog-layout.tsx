import { LayoutProvider } from "@/context/layout-provider"
import { Outlet } from "node_modules/@tanstack/react-router/dist/esm/Match"

type BlogLayoutProps = {
    children?: React.ReactNode
}

export function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <LayoutProvider>
            {children ?? <Outlet />}
        </LayoutProvider>
    )
}
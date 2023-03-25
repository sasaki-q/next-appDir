import { CommonChildrenProps } from "@/types"

export const metadata = {title: 'Apollo Demo'}

export default function RootLayout({children}: CommonChildrenProps) {
    return (
        <div>
            {children}
        </div>
    )
}

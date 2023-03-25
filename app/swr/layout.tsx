import { CommonChildrenProps } from "@/types"

export const metadata = {title: 'SWR Demo'}

export default function RootLayout({children}: CommonChildrenProps) {
    return (
        <div>
            {children}
        </div>
    )
}

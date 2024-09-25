import type { Metadata } from "next";
import "./globals.css";
import { DM_Mono } from 'next/font/google'

const mono = DM_Mono({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
    title: "Agenda",
    description: "MNSEC | Agenda",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${mono.className} bg-black`}
            >
                {children}
            </body>
        </html>
    );
}

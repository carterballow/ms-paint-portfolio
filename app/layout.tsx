import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'cb paint',
  icons: {
    icon: '/mslogo.png', // replace with the path to your logo image
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

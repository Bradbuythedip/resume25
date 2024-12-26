import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bradley W. Merrill - Resume',
  description: 'Professional resume of Bradley W. Merrill',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
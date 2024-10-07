import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Providers } from '@/contexts'

import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Challenge Mater Imperium',
  description: 'Gate portal to the Mater Imperium Systems.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Providers>
        <body className={poppins.className}>{children}</body>
      </Providers>
    </html>
  )
}

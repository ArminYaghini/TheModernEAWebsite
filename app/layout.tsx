
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { StickyNav } from '@/components/navigation/sticky-nav'
import { ScrollProgress } from '@/components/ui/scroll-progress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TheModernEA - Redefining EA for the Modern Era',
  description: 'A revolutionary approach to modern enterprise architecture - combining agility, integration, security, and velocity for digital transformation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ScrollProgress />
          <StickyNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

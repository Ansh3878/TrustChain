import type React from "react"
import Link from "next/link"
import { Mountain } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
  title: "TrustChain - Decentralized Digital Identity Management",
  description: "Secure, private, and user-controlled digital identities built on blockchain technology.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Navigation */}
          <header className="px-4 lg:px-6 h-16 flex items-center border-b">
            <Link href="/" className="flex items-center justify-center">
              <Mountain className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-lg font-bold">TrustChain</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                Home
              </Link>
              <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
                Features
              </Link>
              <Link href="/technology" className="text-sm font-medium hover:underline underline-offset-4">
                Technology
              </Link>
              <Link href="/usecases" className="text-sm font-medium hover:underline underline-offset-4">
                Use Cases
              </Link>
              <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                About Us
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </header>

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} TrustChain. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Cookie Policy
              </Link>
            </nav>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}


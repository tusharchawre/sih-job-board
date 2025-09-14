import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-foreground">JobBoard</div>
            </Link>
          </div>

          {/* Middle Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-md font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/jobs"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-md font-medium transition-colors"
              >
                Jobs
              </Link>
            </div>
          </div>

          {/* Right Section - Sign In Button */}
          <div className="flex items-center">
            <Button
              asChild
              style={{
                backgroundColor: "var(--color-button-background)",
                color: "var(--color-button-foreground)",
                borderColor: "var(--color-button-border)",
              }}
              className="hover:opacity-90 transition-opacity"
            >
              <Link href="/signin">Sign In</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-foreground">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border mt-2">
            <Link
              href="/"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Jobs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

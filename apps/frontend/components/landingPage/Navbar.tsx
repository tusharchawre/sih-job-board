"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn, signOut, authClient } from "@/lib/auth/authClient";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{
    id: string;
    name: string;
    email: string;
    image: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await authClient.getSession();
        if (session && session.data) {
          setUser(
            session.data.user as {
              id: string;
              name: string;
              email: string;
              image: string;
            }
          );
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking session:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      router.push("/");
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-foreground">JobBoard</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            <Link href="/home">Jobs</Link>
            <Link href="/about">About</Link>
          </div>

          {/* Right Section - Desktop Auth Buttons */}
          <div className="hidden md:flex md:items-center">
            {isLoading ? (
              <div className="w-20 h-9 bg-muted animate-pulse rounded"></div>
            ) : user ? (
              <DropdownMenu
                trigger={
                  <Avatar className="cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all duration-200">
                    <AvatarImage src={user.image || ""} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                }
              >
                <DropdownMenuContent>
                  <DropdownMenuItem
                    icon={
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    }
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{user.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {user.email}
                      </span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    icon={
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    }
                    onClick={() => router.push("/account")}
                  >
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    icon={
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    }
                    onClick={() => router.push("/applied")}
                  >
                    Applied Jobs
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    icon={
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    }
                    onClick={handleSignOut}
                    className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={signIn}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-foreground hover:bg-accent p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border bg-background">
              <Link
                href="/"
                className="text-foreground hover:text-primary hover:bg-accent block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              {user && (
                <Link
                  href="/home"
                  className="text-foreground hover:text-primary hover:bg-accent block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Jobs
                </Link>
              )}
              <Link
                href="/about"
                className="text-foreground hover:text-primary hover:bg-accent block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-2 border-t border-border">
                {isLoading ? (
                  <div className="w-full h-10 bg-muted animate-pulse rounded"></div>
                ) : user ? (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground px-3 py-2">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs">{user.email}</div>
                    </div>
                    <Link
                      href="/account"
                      className="flex items-center px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <svg
                        className="w-4 h-4 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Account
                    </Link>
                    <Link
                      href="/applied"
                      className="flex items-center px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <svg
                        className="w-4 h-4 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Applied Jobs
                    </Link>
                    <Button
                      onClick={handleSignOut}
                      variant="outline"
                      className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      signIn();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

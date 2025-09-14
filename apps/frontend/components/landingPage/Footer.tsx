import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-button-background rounded-lg flex items-center justify-center">
                <span className="text-button-foreground font-bold text-sm">JB</span>
              </div>
              <span className="text-xl font-bold text-foreground">JobBoard</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Connect talented professionals with innovative startups worldwide. Building the future of work, one
              opportunity at a time.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Salary Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Interview Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Browse Talent
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Hiring Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Company Profiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors text-sm">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">© 2024 JobBoard. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <span className="text-muted-foreground text-sm">Available on:</span>
            <div className="flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-button-background transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-5.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m-5.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2m4.64 6.8c-.15 1.58-.08 3.21-.4 4.64-.04.18-.26.45-.43.42-.39-.07-.84-.35-1.15-.7-.29-.33-.29-.49-.26-.85.12-1.52-.3-3.63-.42-5.09-.04-.48.27-.91.51-1.27.39-.58 1.06-1.22 1.7-.87.64.34.85 1.08.45 1.72M8.75 8.6c-.64-.34-1.31.29-1.7.87-.24.36-.55.79-.51 1.27.12 1.46.54 3.57.42 5.09-.03.36-.03.52.26.85.31.35.76.63 1.15.7.17.03.39-.24.43-.42.32-1.43.25-3.06.4-4.64.4-.64.19-1.38-.45-1.72" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

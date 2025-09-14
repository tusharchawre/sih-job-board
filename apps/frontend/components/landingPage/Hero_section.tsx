import { Button } from "@/components/ui/button"
import { Search, MapPin, Briefcase } from "lucide-react"

export function HeroSection() {
  const skillTags = [
    "front-end",
    "ui designer",
    "3d illustrator",
    "product manager",
    "ux designer",
    "marketing",
    "back-end",
    "marketing",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-300 rounded-lg"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-300 rounded-lg"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-gray-300 rounded-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Top badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-foreground text-sm font-medium">
            best job seekers in the world 🌍
          </div>
        </div>

        {/* Main content */}
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Find and become a <span className="text-blue-600">professional</span>{" "}
            <span className="relative">
              with passion
              <div className="absolute -bottom-2 right-0 w-16 h-8 border-2 border-blue-600 rounded-tl-lg"></div>
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Job search platform worldwide. We connect freelancers and startups in an easy way and good collaboration 🚀
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skillTags.map((skill) => (
              <button
                key={skill}
                className="px-4 py-2 border border-border rounded-lg text-sm text-foreground hover:border-blue-600 hover:text-blue-600 transition-colors bg-background"
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-8 py-8">
            <div className="relative">
              {/* Left accent line */}
              <div className="absolute top-1/2 left-0 w-20 h-1 bg-blue-600 rounded-full transform -translate-y-1/2 -translate-x-24"></div>

              {/* Profile section */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto mb-2">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-400"></div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-foreground">Tushar chawre</div>
                <div className="text-xs text-muted-foreground">Senior Project Manager</div>
              </div>

              {/* Right accent line */}
              <div className="absolute top-1/2 right-0 w-20 h-1 bg-blue-600 rounded-full transform -translate-y-1/2 translate-x-24"></div>
            </div>
          </div>



          <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Title */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              People Productivity performance
            </h2>
          </div>

          {/* Right side - Statistics */}
          <div className="lg:w-2/3 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {/* Jobs Stat */}
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground mb-2 tracking-wider">JOBS</div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground">+ 273K</div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 bg-border"></div>

            {/* Startups Stat */}
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground mb-2 tracking-wider">STARTUPS</div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground">+ 23K</div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 bg-border"></div>

            {/* Talent Stat */}
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground mb-2 tracking-wider">TALENT</div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground">+ 834K</div>
            </div>
          </div>
        </div>
      </div>
    </section>

         
        </div>
      </div>
    </section>
  )
}

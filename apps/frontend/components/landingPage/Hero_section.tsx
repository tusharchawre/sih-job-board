import { Button } from "@/components/ui/button"
import { Search, MapPin, Briefcase } from "lucide-react"

export function HeroSection() {
  const skillTags = [
    "internships",
    "entry-level",
    "part-time",
    "summer jobs",
    "co-op programs",
    "research assistant",
    "teaching assistant",
    "campus ambassador",
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
            From Campus to Career 🌍
          </div>
        </div>

        {/* Main content */}
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Where   <span className="text-blue-600">Open Source</span>{" "}
            <span className="relative whitespace-nowrap p-1 ">
              Meets Open Opportunities
              <div className="absolute -bottom-2 right-0   w-[27.5vw] h-28 border-2 border-blue-600 rounded-tl-lg"></div>
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your gateway to internships and entry-level opportunities. Connect with top companies and kickstart your professional journey. 🚀
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
                <div className="text-sm font-semibold text-foreground">Sarah Chen</div>
                <div className="text-xs text-muted-foreground">Computer Science Student</div>
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
                Our Growing Community
              </h2>
            </div>
 
            {/* Right side - Statistics */}
            <div className="lg:w-2/3 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              {/* Internships Stat */}
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground mb-2 tracking-wider">INTERNSHIPS</div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">+ 15K</div>
              </div>
 
              {/* Divider */}
              <div className="hidden sm:block w-px h-16 bg-border"></div>
 
              {/* Companies Stat */}
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground mb-2 tracking-wider">COMPANIES</div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">+ 5K</div>
              </div>
 
              {/* Divider */}
              <div className="hidden sm:block w-px h-16 bg-border"></div>
 
              {/* Students Stat */}
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground mb-2 tracking-wider">STUDENTS</div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">+ 50K</div>
              </div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          Why Choose Us for Your Career Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Curated Opportunities</h3>
            <p className="text-muted-foreground">Access hand-picked internships and entry-level positions from top companies.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Easy Application</h3>
            <p className="text-muted-foreground">Streamlined application process with resume building and interview tips.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Campus Focused</h3>
            <p className="text-muted-foreground">Designed specifically for college students with career guidance and networking.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Internships Section */}
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          Featured Internship Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Software Engineering Intern</h3>
                <p className="text-sm text-muted-foreground">Google</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">Summer internship for CS students. Work on cutting-edge projects.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Mountain View, CA</span>
              <Button size="sm">Apply Now</Button>
            </div>
          </div>
          <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Data Science Intern</h3>
                <p className="text-sm text-muted-foreground">Microsoft</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">Analyze data and build ML models for real-world applications.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Seattle, WA</span>
              <Button size="sm">Apply Now</Button>
            </div>
          </div>
          <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Marketing Intern</h3>
                <p className="text-sm text-muted-foreground">Adobe</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">Creative marketing campaigns and digital strategy development.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">San Francisco, CA</span>
              <Button size="sm">Apply Now</Button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button size="lg">View All Opportunities</Button>
        </div>
      </div>
    </section>


        </div>
      </div>
    </section>
  )
}

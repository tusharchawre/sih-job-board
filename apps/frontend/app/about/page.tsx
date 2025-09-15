
import React from 'react'

import GithubButton from '@/components/aboutPage/GithubButton'
import EmailButton from '@/components/aboutPage/EmailButton'

const page = () => {
  return (
    <div className='p-10 max-w-7xl mx-auto '>
        <h1 className="text-2xl flex items-center justify-center font-bold" >About</h1>

        <h4 className="text-xl pt-10 mx-6 flex  items-start  justify-start font-semibold">Empowering College Students Through <span className='text-blue-600  px-2'>Open Source</span> Opportunities
</h4>

        <p className='p-6'>Our open source job board is more than just a platform—it's a community-driven initiative designed specifically to bridge the gap between college students and meaningful career opportunities. We believe that every student deserves access to quality internships, entry-level positions, and project-based work that can launch their professional journey.</p>


          <h4 className='text-xl pt-10  pb-6 mx-6 flex  items-start  justify-start font-semibold'>Join our community</h4>
        <div className='flex flex-col justify-start items-center gap-6 mx-6'>
          <p>Ready to make an impact? Whether you're looking for your next opportunity or wanting to contribute to something meaningful, we'd love to have you join our community. Together, we're building the future of student career development—one commit, one opportunity, and one success story at a time.</p>

          <div className='flex gap-4 justify-start items-center'>
            <EmailButton />
            <GithubButton />

          </div>

            
            

        </div>
    </div>
  )
}

export default page
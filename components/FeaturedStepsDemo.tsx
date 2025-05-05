import { Italiana } from "next/font/google"
import { FeatureSteps } from "./feature-section"
import { DotPattern } from "./ui/dot-pattern"
import { cn } from "@/lib/utils"
import { MoveUpRight } from "lucide-react"

const features = [
  { 
    step: 'Step 1', 
    title: 'Initial Consultation',
    content: 'We will have a quick meeting to learn more about your project and see if we are the right fit. ', 
    image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Step 2',
    title: 'Kick Off',
    content: 'After you decide to move forward, we will dive deeper into your unique requirements and do competitor research.',
    image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Deisgn & Strategy',
    content: 'We’ll clarify your website goals, craft high-converting copy, and start designing based on your aesthetic preferences.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 4',
    title: 'Development & Testing',
    content: 'After the design is finalized, we will convert it into a fully responsive website. It will go through testing to make sure everything works perfectly.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 5',
    title: 'Launch',
    content: 'After quality assurance, we will deploy your website and drive up your business.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
]

const italiana = Italiana({
    subsets: ['latin'],
    weight: '400',
  })

  
export function FeatureStepsDemo() {
  return (
    <div className='flex flex-col items-center justify-center py-[6rem] gap-6 relative'>
      <div className='flex items-center w-full max-w-sm'>
        <div className='flex-grow border-t border-orange-600'></div>
        <span className={`mx-4 text-orange-600 text-md uppercase ${italiana.className}`}>
          Process
        </span>
        <div className='flex-grow border-t border-orange-600'></div>
      </div>

      <div className='max-w-sm text-center'>
        <h1 className='text-5xl'>Our Process</h1>
      </div>
      
      <p className="md:w-[30%] text-center font-medium text-neutral-600 text-md">
      The smoothest design process you've ever experienced</p>
      <FeatureSteps
        features={features}
        title="Your Journey Starts Here"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
        />
              <button className="px-6 py-3 rounded-full text-white bg-orange-600 hover:bg-[#774dff] hover:cursor-pointer transition-all duration-300 flex items-center">
          <p className="font-medium">Let's Talk</p>
          <MoveUpRight className="size-4 ml-6" />
        </button>
              <div className="absolute top-0 right-0 h-[500px] w-[500px] pointer-events-none z-10">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_top_right,white,transparent)]",
            "mask-image-[radial-gradient(600px_circle_at_top_right,white,transparent)]"
          )}
        />
      </div>
        </div>
  )
}
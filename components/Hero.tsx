import Image from 'next/image'
import React from 'react'
import AnimatedGradientText from './magicui/animated-gradient-text'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='size-full flex flex-col sm:flex-row justify-between gap-5 sm:gap-8 relative z-10'>
            <div className="w-full sm:w-fit lg:w-full flex flex-col justify-center gap-4 sm:gap-6">
                <AnimatedGradientText>
                    🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                    <span
                        className={cn(
                            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-base`,
                        )}
                    >
                        Introducing NamasteUI
                    </span>
                    <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
                <p className='text-center sm:text-left'>
                    Welcome to NamasteUI, where simplicity meets sophistication. Explore our curated collection of UI components designed to streamline your development journey. Empower your projects with seamless integration and intuitive customization options. Elevate your web design experience with NamasteUI and bring your vision to life with elegance and ease.
                </p>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 sm:mt-0'>
                    <Button size="lg" className='rounded-xl hover:bg-purple'>
                        <Link href={"/components"} className='flex flex-row gap-1 items-center text-base'>
                            Browse Components
                            <ChevronRight/>
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className='rounded-xl hover:bg-purple'>
                        <Link href={"/docs"} className='flex flex-row gap-1 items-center text-base'>
                            Get Started
                            <ChevronRight/>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="w-full sm:fit lg:w-full lg:flex lg:justify-end sm:mt-8 lg:mt-0">
                <Image src="/hero.gif" alt='hero' height={500} width={500} priority className='aspect-auto' />
            </div>
        </section>
    )
}

export default Hero
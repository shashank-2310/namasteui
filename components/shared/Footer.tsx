import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-background mt-8 sm:mt-5 lg:mt-10 relative z-10 border-foreground/30 border-t text-muted-foreground p-3 lg:p-4 text-sm w-full text-center flex flex-col gap-1'>
            <span>
                Brought to you by&nbsp;
                <Link
                    href={"https://linkedin.com/in/shashankgupta23"}
                    className='underline hover:text-purple-0'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Shashank Gupta
                </Link>
            </span>
            <span>
                Checkout my&nbsp;
                <Link
                    href={"https://shashankgupta-portfolio.vercel.app/"}
                    className='underline hover:text-purple-0'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Portfolio
                </Link>
            </span>
            <span>
                Code is available on&nbsp;
                <Link
                    href={"https://github.com/shashank-2310/namasteui"}
                    className='underline hover:text-purple-0'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Github
                </Link>
            </span>
        </footer>
    )
}

export default Footer
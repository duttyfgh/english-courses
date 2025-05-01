'use client'

import { motion, Variants } from "motion/react"
import Image from "next/image"
import Link from "next/link"

interface NavbarProps {
    isNavBar: boolean,
    closeNavBar: () => void
    animation: Variants
    headerItems: {
        title: string
        href: string
    }[]
}

const Navbar = ({ isNavBar, closeNavBar, animation, headerItems }: NavbarProps) => {
    return (
        <div>
            {isNavBar && (<motion.div
                animate='visible'
                initial='hidden'
                variants={animation}
                className="absolute z-20 h-screen w-[200px] bg-[#020112bf] p-[40px] flex flex-col gap-[60px] backdrop-blur-[6px]"

            >
                <Image src='/arrow-back.svg' width={10} height={20} alt="<" onClick={closeNavBar} />

                <div className="flex flex-col gap-[30px] text-[#cccccc]">
                    {headerItems.map((i) => (
                        <Link href={i.href} key={i.title} onClick={closeNavBar}>
                            {i.title}
                        </Link>
                    ))}
                </div>
            </motion.div>)
            }
        </div>
    )
}

export default Navbar
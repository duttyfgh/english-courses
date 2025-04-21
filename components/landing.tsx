'use client'

import Image from "next/image"
import { motion, Variants } from "motion/react"

import Header from "./header"
import { useRef, useState } from "react"
import Link from "next/link"

const appearingAnimation: Variants = {
    hidden: {
        right: 0,
        opacity: 0,
        width: "0px"
    },
    visible: {
        right: 0,
        opacity: 1,
        width: "200px",
        transition: {
            duration: .2,
            ease: 'easeOut',
        },
    }
}

const disappearingAnimation: Variants = {
    hidden: {
        right: 0,
        opacity: 1,
        width: "200px",
        transition: {
            duration: .2,
            ease: 'easeInOut',
        }
    },
    visible: {
        right: 0,
        opacity: 0,
        width: "0px"
    },
}

const headerItems = [
    {
        title: 'Навчання',
        href: '#education'
    },
    {
        title: 'Відгуки',
        href: '/feedback'
    },
    {
        title: `Зв'язок`,
        href: '#contacts'
    },
    {
        title: 'Питання',
        href: '/faq'
    }

]

const Landing = () => {
    const [isNavBar, setIsNavBar] = useState<boolean>(false)
    const [animation, setAnimation] = useState<Variants>(appearingAnimation)

    const navBarTimerRef = useRef<NodeJS.Timeout | null>(null)

    const openNavBar = () => {
        if (navBarTimerRef.current) {
            clearTimeout(navBarTimerRef.current)
        }

        setAnimation(appearingAnimation)

        navBarTimerRef.current = setTimeout(() => {
            setIsNavBar(true)
        }, 50)
    }

    const closeNavBar = () => {
        if (navBarTimerRef.current) {
            clearTimeout(navBarTimerRef.current)
        }

        setAnimation(disappearingAnimation)

        navBarTimerRef.current = setTimeout(() => {
            setIsNavBar(false)
        }, 50)
    }

    return (
        <>
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

            <div
                className='bg-[linear-gradient(180deg,_#6C4AF5_0%,_#4026AB_27%,_#190668_51%,_#020111_81%)] h-screen w-full) xl:px-[100px] xl:pt-[50px] px-[35px] pt-[35px] flex flex-col items-center justify-between  gap-6'
                onClick={isNavBar ? closeNavBar : () => { }}
                id="landing"
            >
                <Header openNavBar={openNavBar} headerItems={headerItems} />

                <div className="flex flex-col gap-[10px]">
                    <div className="lg:text-[44px] text-[32px] flex flex-wrap leading-[32px] gap-[5px]">
                        <h1 className="main-text text-white">Англійська для</h1>
                        <h1 className="main-text text-[#FFD700]">початківців</h1>
                    </div>

                    <div className="flex flex-col gap-[5px] w-fill text-[#cccccc]">
                        <h3 className="text-[18px]">Вивчи англійску з повного нуля!</h3>
                        <p className="text-[16px] max-w-[1000px]">
                            Персональні уроки англійської мови з фокусом на результат.
                            Я підбираю підхід до кожного учня: враховую цілі, темп і стиль навчання.
                            Тривалість занять визначає не годинник, а досягнення. Вчися із задоволенням,
                            прогресуй впевнено. Розпочни свій шлях вже сьогодні.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center mb-24 gap-[5px] text-white">
                    <Link href='#education' className="text-[16px] bg-[linear-gradient(180deg,_#FFD700_0%,_#D4951F_100%)] px-[60px] py-[15px] rounded-[45px] gold-button-shadow hover:bg-[linear-gradient(180deg,_#F3CD02_0%,_#CA8E1F_100%)] transition-all">
                        Почати
                    </Link>

                    <Image src='/gold-arrow.svg' width={40} height={50} alt='\/' />
                </div>

            </div>
        </>
    )
}

export default Landing
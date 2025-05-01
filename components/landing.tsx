'use client'

import Image from "next/image"
import Link from "next/link"

import { useNavbar, headerItems } from "@/hooks/navbar-hooks"

import Header from "./header"
import Navbar from "./navbar"

const Landing = () => {
    const { openNavBar, closeNavBar, animation, isNavBar } = useNavbar()

    return (
        <>
            <Navbar
                closeNavBar={closeNavBar}
                isNavBar={isNavBar}
                animation={animation}
                headerItems={headerItems}
            />

            <div
                className='bg-[linear-gradient(180deg,_#6C4AF5_0%,_#4026AB_27%,_#190668_51%,_#020111_81%)] h-screen w-full) xl:px-[100px] xl:pt-[50px] px-[35px] pt-[35px] flex flex-col items-center justify-between gap-6'
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
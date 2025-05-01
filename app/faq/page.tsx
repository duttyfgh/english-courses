'use client'

import { useNavbar, headerItems } from '@/hooks/navbar-hooks'

import Navbar from "@/components/navbar"
import Header from '@/components/header'
import FaqItem from '@/components/faq-items'

const Faq = () => {
    const { openNavBar, closeNavBar, animation, isNavBar } = useNavbar()

    return (
        <>
            <Navbar
                closeNavBar={closeNavBar}
                isNavBar={isNavBar}
                animation={animation}
                headerItems={headerItems}
            />
            <div className="w-[320px] h-[360px] absolute -top-30 left-0 right-0 mx-auto bg-[#5D3ED9] blur-3xl rounded-full z-[-1]" />
            <div className='z-20 xl:px-[100px] xl:pt-[50px] px-[35px] pt-[35px] flex flex-col items-center h-screen '>
                <Header openNavBar={openNavBar} headerItems={headerItems} />

                <div className='w-full h-full flex flex-col justify-center items-center gap-[50px]'>
                    <div className='flex flex-col gap-[5px]'>
                        <h1 className='main-text text-white lg:text-[44px] text-[32px] leading-[32px]'>
                            Часто задавані питання
                        </h1>
                        <p className="text-[16px] text-[#cccccc] max-w-[620px]">
                            Напишіть мені в Telegram, на email або зателефонуйте, якщо не знайшли відповіді на своє запитання.
                        </p>
                    </div>


                </div>
                    <div className='flex flex-col items-center gap-[15px] w-full'>
                        <FaqItem />
                        <FaqItem />
                        <FaqItem />
                        <FaqItem />
                    </div>
            </div>

        </>
    )
}

export default Faq
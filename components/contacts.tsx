import Image from "next/image"
import Link from "next/link"

const Contacts = () => {
    return (
        <div
            className="h-screen bg-[linear-gradient(180deg,_#060120_0%,_#010111_100%)] p-[35px] xl:px-[100px] xl:pt-[50px] flex flex-col justify-between"
            id='contacts'
        >
            <h1 className="main-text text-white text-[24px]">Контакти</h1>

            <div className="flex flex-col gap-[10px] items-center">
                <Link
                    className="lg:max-w-[470px] max-w-[344px] w-full bg-[#442EA2]/12 flex justify-between lg:px-[50px] lg:py-[20px] px-[40px] py-[15px] poppins-font rounded-[45px] lg:text-[18px] text-[15px] shadow-[0_0_200px_1px_#442EA2]/20 hover:bg-[#442Ea2]/14 transition-all"
                    href='https://t.me/dutyfgh'
                    target="_blank"
                >

                    dutyfgh

                    <Image src='/telegram.svg' width={24} height={24} alt="telegram" />
                </Link>

                <Link
                    className="lg:max-w-[470px] max-w-[344px] w-full bg-[#442EA2]/12 flex justify-between lg:px-[50px] lg:py-[20px] px-[40px] py-[15px] poppins-font rounded-[45px] lg:text-[18px] text-[15px] shadow-[0_0_200px_1px_#442EA2]/20 hover:bg-[#442Ea2]/14 transition-all"
                    href="https://mail.google.com/mail/?view=cm&to=dmytrolagodich@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    dmytrolagodich@gmail.com

                    <Image src='/gmail.svg' width={24} height={24} alt="email" />
                </Link>

                <Link
                    className="lg:max-w-[470px] max-w-[344px] w-full bg-[#442EA2]/12 flex justify-between lg:px-[50px] lg:py-[20px] px-[40px] py-[15px] poppins-font rounded-[45px] lg:text-[18px] text-[15px] shadow-[0_0_200px_1px_#442EA2]/20 hover:bg-[#442Ea2]/14 transition-all"
                    href="tel:+380994156179"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    +380 99 415 6179

                    <Image src='/phone.svg' width={24} height={24} alt="phone" />
                </Link>
            </div>

            <div className="w-full flex justify-center pb-[40px]">
                <Link
                    href='#landing'
                    className="bg-[#5E3FDB] p-[20px] rounded-full w-[60px] h-[60px] shadow-[0_0_20px_#442EA2] flex items-center justify-center hover:bg-[#5e3fdbed] transition-all">
                    <Image src='/arrow-bottom.svg' width={20} height={30} alt="/\" className="rotate-180" />
                </Link>
            </div>

        </div>
    )
}

export default Contacts
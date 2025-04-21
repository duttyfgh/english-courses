import Image from "next/image"

export const Curriculum = () => {
    return (
        <div
            className="max-w-[360px] min-w-[360px] bg-[#18103A] pt-[40px] pb-[60px] hidden xl:block rounded-[45px] border-1 border-[#3B2F6B] z-30 2xl:shadow-[0_0_400px_#442EA2] shadow-[0_0_200px_#442EA2]"
        >

            <div className="flex justify-center items-center gap-[40px] text-[18px] border-b-1 border-b-[#3B2F6B] pb-[30px]">
                <Image src='/approach-icon.svg' width={20} height={30} alt="..." />
                <h3 className="text-[#cccccc]">План навчання</h3>
                <span className="text-[#ffffff]/40">А0-С1</span>
            </div>

            <ul className="w-full h-full flex flex-col px-[30px] py-[30px] gap-[20px] justify-center">

                <li className="flex items-center gap-[15px]">
                    <Image src='/curriculum-start.svg' width={24} height={18} alt='...' />
                    <div className="text-[#ffffff]/70">
                        <h3>Пробне заняття</h3>
                        <span>Визначення рівня знань</span>
                    </div>
                </li>

                <li className="flex items-center gap-[15px]">
                    <div className="w-[22px] h-[22px] bg-[#191529] rounded-full border-1 border-[#D9D9D9]" />
                    <div className="text-[#ffffff]/70">
                        <span>Визначення з планом навчання</span>
                    </div>
                </li>

                <li className="flex items-center gap-[15px]">
                    <div className="w-[22px] h-[22px] bg-[#D9D9D9] rounded-full" />
                    <div className="text-[#ffffff]/70">
                        <h3>Перше заняття</h3>
                        <span>Налаштування на працю</span>
                    </div>
                </li>

                <li className="flex items-center gap-[15px]">
                    <div className="w-[22px] h-[22px] bg-[#191529] rounded-full border-1 border-[#D9D9D9]" />
                    <div className="text-[#ffffff]/70">
                        <span>Систиматична праця</span>
                    </div>
                </li>

                <li className="flex items-center gap-[15px]">
                    <Image src='/curriculum-finish.svg' width={24} height={18} alt='...' />
                    <div className="text-[#ffffff]/70">
                        <h3>Омріяний результат</h3>
                    </div>
                </li>
            </ul>

        </div>
    )
}


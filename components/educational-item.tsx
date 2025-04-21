import Image from "next/image"

interface EducationalItemProps {
    title: string
    text: string
    img: string
}

export const EducationalItem = ({ title, text, img }: EducationalItemProps) => {
    return (
        <div className="border-1 border-[#ffffff14] rounded-[45px] flex flex-col gap-[12px] p-[30px] max-w-[344px] h-[230px] justify-center bg-[#0B091B]/30">
            <Image src={img} width={16} height={20} alt='...' />

            <h3 className="text-[18px] text-[#cccccc]">{title}</h3>
            <p className="text-white/50 text-[16px]">{text}</p>

        </div>
    )
}


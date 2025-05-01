import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"

interface FaqItemProps {
}

const FaqItem = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const onExpand = () => {
        setIsExpanded(prev => !prev)
    }

    return (
        <motion.div
            layout
            initial={{ height: 74 }}
            animate={{ height: isExpanded ? 'auto' : 74 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="overflow-hidden pt-[70px] pb-[2px] bg-[#291C61] rounded-[36px] text-white/60 relative max-w-[530px]"
        >
            <div className="absolute top-0 left-0 w-full bg-[#442EA2] px-[45px] py-[25px] rounded-[45px] flex items-center justify-between z-10">
                <h3 className="text-white/80">Як записатись на заняття?</h3>
                <motion.div
                    onClick={onExpand}
                    animate={{ rotate: isExpanded ? -90 : 0 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    style={{ cursor: "pointer" }}
                >
                    <Image
                        src="/arrow-bottom.svg"
                        width={18}
                        height={6}
                        alt={isExpanded ? "згорнути" : "розгорнути"}
                    />
                </motion.div>
            </div>

            <p className="p-[25px]">
                Щоб записатися на заняття, просто напишіть мені в Telegram, на електронну
                пошту або зателефонуйте. Ми домовимося про пробне заняття, визначимо ваш
                рівень і складемо індивідуальний план навчання.
            </p>
        </motion.div>
    )
}

export default FaqItem

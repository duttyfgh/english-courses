import Image from "next/image"
import { EducationalItem } from "./educational-item"
import { Curriculum } from "./curriculum"
import Link from "next/link"

const educationalItems = [
    {
        title: 'Підхід',
        text: 'Персональний підхід до кожного учня, головна мета — отримання задоволення. Твій темп, твій стиль, твоє задоволення.',
        img: '/approach-icon.svg'
    },
    {
        title: 'Гнучкі заняття',
        text: 'Тривалість занять визначається не годинником, а твоїм прогресом. Усе в твоєму темпі — без тиску й поспіху.',
        img: '/rectangle-icon.svg'
    },
    {
        title: '24/7 на зв’язку',
        text: 'Можеш звертатися в будь-який момент — я поруч, щоб підтримати та допомогти.',
        img: '/voice-icon.svg'
    },
    {
        title: 'Систиматизація',
        text: 'Моя головна мета — створити комфортну атмосферу саме для тебе, щоб навчання стало задоволенням, а не обов’язком.',
        img: '/student-icon.svg'
    },

]

const Education = () => {
    return (
        <div
            className="min-h-screen h-full bg-[linear-gradient(180deg,_#020111_0%,_#060120_100%)] xl:pt-[50px] xl:px-[100px] p-[35px] flex flex-col justify-between gap-[100px]"
            id="education"
        >
            <h1 className="main-text text-white text-[24px]">Навчання</h1>

            <div className="flex 2xl:justify-evenly xl:justify-between justify-center">
                <div className="flex flex-col gap-[20px] xl:items-start items-center">
                    <div className="flex flex-wrap gap-[20px] justify-center">
                        {educationalItems.slice(0, 2).map((i) => (
                            <EducationalItem title={i.title} text={i.text} img={i.img} key={i.text} />
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-[20px] justify-center">
                        {educationalItems.slice(2, 4).map((i) => (
                            <EducationalItem title={i.title} text={i.text} img={i.img} key={i.text} />
                        ))}
                    </div>
                </div>

                <Curriculum />

            </div>

            <div className="flex flex-col items-center gap-[15px] text-white">
                <Link href='#contacts' className="text-[16px] border-1 border-[#ffffff44] rounded-[45px] px-[60px] py-[15px] shadow-[0_0_10px_#442EA2] hover hover:bg-[#060124] transition-all">
                    Записатись
                </Link>

                <Image src='/arrow-bottom.svg' width={20} height={30} alt='\/' />
            </div>


        </div>
    )
}

export default Education
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
    openNavBar: () => void
    headerItems?: { title: string, href: string }[]
}

const Header = ({ openNavBar, headerItems = [] }: HeaderProps) => {
    return (
        <div className="flex justify-between items-center w-full">
            <h1 className="h1-en text-[24px]">
                Dmytro Lahodich
            </h1>

            <Image
                src='/burger.svg'
                width={25}
                height={17}
                alt='->'
                className="md:hidden ml-5"
                onClick={openNavBar}
            />

            <div className="md:flex gap-[40px] hidden text-[#cccccc]">
                {headerItems.map((i) => (
                    <Link href={i.href} key={i.title} className="hover:text-[#ccccccc4] transition-all">
                        {i.title}
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default Header
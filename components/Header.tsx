'use client'
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";

const Header = () => {
    return (
        <header>
            <div className="main-container inner">
                <Link href="/">
                    <Image src={"/logo.svg"} alt={"CoinBridge logo"} width={150} height={50}/>
                </Link>

                <nav>
'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {cn} from "@/lib/utils";

const Header = () => {
    const pathname = usePathname()

    return (
        <header>
            <div className="main-container inner">
                <nav>
                    <Link href={"/"} className={cn('nav-link',{
                        'is-active': pathname === '/',
                        'is-home': true
                    })}>Home</Link>
                    <p>Search Modal</p>
                    <Link href={"/coins"} className={cn('nav-link',{
                        'is-active': pathname === '/coins'
                    })}>All Coins</Link>
                </nav>
            </div>
        </header>
    )
}
                </nav>
            </div>
        </header>
    )
}
export default Header

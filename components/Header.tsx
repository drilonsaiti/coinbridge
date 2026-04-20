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
                    <Link href={"/"} className={cn('nav-link',{
                        'is-active': location.pathname === '/',
                        'is-home': true
                    })}>Home</Link>
                    <p>Search Modal</p>
                    <Link href={"/coins"} className={cn('nav-link',{
                        'is-active': location.pathname === '/coins'
                    })}>All Coins</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header

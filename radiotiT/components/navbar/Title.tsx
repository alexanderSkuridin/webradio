import type { NextPage } from "next";
import Image from 'next/image'
import radioPic from '../../public/radio.png'
import Logo from "./logo";
const Title: NextPage = () => {
    return (
        <div className="inline-flex space-x-4 items-center justify-center">
            <Logo />
            <p className="pt-2 text-2xl font-bold text-white">RadioIT</p>
        </div>
    )
}

export default Title

import type { NextPage } from "next";
import Image from 'next/image'
import radioPic from '../../public/radio.png'
const RadioImage: NextPage = () => {
    return (
        <Image
            src={radioPic}
            alt="Picture of the author"
            height={922}
            placeholder="blur" // Optional blur-up while loading
        />
    )
}

export default RadioImage

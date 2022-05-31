import type { NextPage } from "next";
import LogoIcon from '../../public/icon.svg';
import Image from 'next/image'

const Logo: NextPage = () => {
    return (
        <Image
            src={LogoIcon}
            alt="Logo"

        />
    )
}

export default Logo

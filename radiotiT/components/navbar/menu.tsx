import type { NextPage } from "next";
const Menu: NextPage = () => {
    return (
        <div className="inline-flex space-x-4 items-center justify-center" >
            <p className=" h-5 text-base text-white">Все станции  </p>
            <p className=" h-5 text-base text-white">Главная</p>
            <div className="inline-flex items-center justify-center w-44 h-11 pl-1 pr-1.5  bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full">
                <p className="text-base font-medium text-center text-white flex justify-center items-center ">Своя станция</p>
            </div>
        </div>

    )
}

export default Menu

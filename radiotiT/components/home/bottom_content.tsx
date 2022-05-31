import type { NextPage } from "next";
const BottomContent: NextPage = () => {
    return (
        <div className="relative bg-indigo-200 bg-opacity-10 rounded-2xl" >
            <div className="pt-20 inline-flex space-x-16 items-center justify-center w-full " >
                <div className="inline-flex flex-col space-y-1.5 items-center justify- end w-36 h-24">
                    <p className="w-32 h-1/4 text-base text-white">Станций</p>
                    <p className="w-full h-16 text-7xl font-bold text-white">50+</p>
                </div>
                <div className="inline-flex flex-col space-y-4 items-start justify-end w-44 h-24">
                    <p className="w-full h-4 text-base text-white">Время вещания</p>
                    <p className="w-full h-16 text-7xl font-bold text-white">∞</p>
                </div>
                <div className="inline-flex flex-col space-y-4 items-start justify-end w-44 h-full">
                    <p className="w-full h-5 text-base text-white">Слушателей</p>
                    <p className="w-40 h-2/3 text-7xl font-bold text-white">20к+</p>
                </div>
            </div>
        </div>
    )
}

export default BottomContent

import type { NextPage } from 'next'

const HomeTitle: NextPage = () => {
    return (
        <div >
            <div
                className="inline-flex flex-col space-y-4 items-start justify-start"
                style={{ height: 402 }}
            >
                <p className="text-7xl text-white">
                    Исследуйте
                    <br />
                    Новые радиостанции.
                </p>
                <p className="text-base text-gray-400" style={{ width: 600 }}>
                    Создание своей радиостанции довольно трудоёмкий процесс, необходимо подавать
                    заявки на частоту вещания, пройти конкурс, предъявить заявки в Роскомнадзор.
                    Наш сервис позволит вам создать свою радиостанцию за парку кликов и
                    транслировать свои идеи аудитории.
                    <br />
                    <br />
                </p>
                <div
                    className="inline-flex space-x-4 items-start"
                    style={{ width: 457, height: 50 }}
                >
                    <div className="relative">
                        <div className="flex items-center">
                            <div className=" bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full">
                                <p className="w-64 h-10 text-base font-medium text-center text-white flex justify-center items-center ">
                                    Создать свою станцию
                                </p>
                            </div>
                            <p className="w-64 h-10 pl-4 text-base font-medium underline text-start text-purple-400 flex items-center">
                                Послушать все станции 🠒
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTitle


import React from 'react'

const GridBoxesContainerComponent = () => {
    return (

        <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-4 md:grid-rows-4 gap-2 md:gap-2 m-4 text-center text-white font-bold text-xl md:text-3xl h-screen">
            <div className="GRIDBOX GRID___11 col-start-1 row-start-1 col-span-2 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-1 bg-red-950 hover:bg-transparent text-center font-bold rounded-md p-10 flex items-center justify-center">مد و زیبایی</div>
            <div className="GRIDBOX GRID___1 col-start-3 row-start-1 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1 bg-black font-bold rounded-md whitespace-nowrap flex items-center justify-center p-10"><h2>بی نهایت</h2> </div>
            <div className="GRIDBOX GRID___2 col-start-1 row-start-2 md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-blue-950">بازارهای مالی</div>
            <div className="GRIDBOX GRID___3 col-start-2 row-start-2 md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-green-950">پزشکی و سلامت</div>
            <div className="GRIDBOX GRID___4 col-start-3 row-start-2 md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-yellow-950">موزیک و ویدیو</div>
            <div className="GRIDBOX GRID___5 col-start-1 row-start-3 md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-pink-950">قریلنسر</div>
            <div className="GRIDBOX GRID___6 col-start-2 row-start-3 md:col-start-2 md:row-start-3 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-white/10">تور و گردشگری</div>
            <div className="GRIDBOX GRID___7 col-start-3 row-start-3 md:col-start-3 md:row-start-3 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-black">ورزش و سلامت</div>
            <div className="GRIDBOX GRID___8 col-start-1 row-start-4 md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-fuchsia-950">یادگیری و آموزش</div>
            <div className="GRIDBOX GRID___9 col-start-2 row-start-4 md:col-start-2 md:row-start-4 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-sky-900">فروشگاه و تکنولوژی</div>
            <div className="GRIDBOX GRID___10 col-start-3 row-start-4 md:col-start-3 md:row-start-4 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-indigo-800">غذا و آشپزی</div>

        </div>
    )
}

export default GridBoxesContainerComponent

import React from 'react'

const GridBoxesContainerComponent = () => {
    return (

        <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-4 md:grid-rows-4 gap-2 md:gap-2 m-4 text-center text-white font-bold text-xl md:text-3xl h-screen">
            <div className="GRID___1col-start-1 row-start-1 col-span-2 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-1 bg-red-950 text-center font-bold rounded-md p-10"><h2>بی نهایت</h2> </div>
            <div className="col-start-3 row-start-1 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1 bg-black font-bold rounded-md whitespace-nowrap flex items-center justify-center p-10"></div>
            <div className="col-start-1 row-start-2 md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-blue-950">2</div>
            <div className="col-start-2 row-start-2 md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-green-950">3</div>
            <div className="col-start-3 row-start-2 md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-yellow-950">4</div>
            <div className="col-start-1 row-start-3 md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-pink-950">5</div>
            <div className="col-start-2 row-start-3 md:col-start-2 md:row-start-3 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-white/10">6</div>
            <div className="col-start-3 row-start-3 md:col-start-3 md:row-start-3 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-black">7</div>
            <div className="col-start-1 row-start-4 md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-fuchsia-950">8</div>
            <div className="col-start-2 row-start-4 md:col-start-2 md:row-start-4 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-sky-900">9</div>
            <div className="col-start-3 row-start-4 md:col-start-3 md:row-start-4 md:col-span-1 md:row-span-1  text-center font-bold rounded-md flex items-center justify-center p-10 bg-indigo-800">10</div>

        </div>
    )
}

export default GridBoxesContainerComponent
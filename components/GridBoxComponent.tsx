
import React from 'react'

const GridBoxComponent = () => {
    return (

        <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-4 md:grid-rows-4 gap-2 md:gap-2 m-4 text-center text-white font-bold text-xl md:text-3xl">
            <div className="col-start-1 row-start-1 col-span-2 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-1 bg-black text-center font-bold rounded-md p-10">0</div>
            <div className="GRID___1 col-start-3 row-start-1 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1 bg-black font-bold rounded-md p-10 whitespace-nowrap flex items-center jus"><h2 className='mx-auto'>بی نهایت</h2> </div>
            <div className="col-start-1 row-start-2 md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1 bg-black text-center font-bold rounded-md p-10">2</div>
            <div className="col-start-2 row-start-2 md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1 bg-black text-center font-bold rounded-md p-10">3</div>
            <div className="col-start-3 row-start-2 md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1 bg-black text-center font-bold rounded-md p-10">4</div>
            <div className="col-start-1 row-start-3 md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1 bg-black text-center font-bold rounded-md p-10">5</div>
            <div className="col-start-2 row-start-3 md:col-start-2 md:row-start-3 md:col-span-1 md:row-span-1 bg-black text-center font-bold rounded-md p-10">6</div>
            <div className="col-start-3 row-start-3 md:col-start-3 md:row-start-3 md:col-span-1 md:row-span-1 bg-black text-center font-bold rounded-md p-10">7</div>
            <div className="col-start-1 row-start-4 md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-1 bg-black text-center font-bold rounded-md p-10">8</div>
            <div className="col-start-2 row-start-4 md:col-start-2 md:row-start-4 md:col-span-1 md:row-span-1 bg-black text-center font-bold rounded-md p-10">9</div>
            <div className="col-start-3 row-start-4 md:col-start-3 md:row-start-4 md:col-span-1 md:row-span-1 bg-black text-center font-bold rounded-md p-10">10</div>

        </div>
    )
}

export default GridBoxComponent
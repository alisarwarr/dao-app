//REACTJS
import { Fragment } from 'react';


function Column({
    data
}: {
    data: any[]
}) {
    return (
        <div className="flex items-center justify-around bg-[#2d3153] rounded-lg p-4">
            {
                data.map((item: any, i: number) => (
                    <Fragment>
                        <div className="pr-1.5 pl-1.5">
                            <p className="text-xs text-[#cccccc] SCREEN350:text-xs SCREEN350:leading-5 SCREEN500:text-[#a8a8a8] SCREEN500:text-sm SCREEN500:whitespace-nowrap mb-0.5"> {item.text} <span className="hidden SCREEN315:inline">{item.icon}</span> </p>
                            <p className="text-white SCREEN350:text-base SCREEN500:text-lg"> {item.detail} </p>
                        </div>
                        {(i !== data.length - 1) && <span className="text-6xl text-[#a8a8a8] font-thin"> | </span>}
                    </Fragment>
                ))
            }
        </div>
    )
}

export default Column;
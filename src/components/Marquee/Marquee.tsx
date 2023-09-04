import React from 'react';
import './marquee.css'; // Asegúrate de importar tu archivo CSS
import MarqueeItems from './MarqueeItems';

function Marquee() {
    return (
        <div className=' border-b-[3px] border-slate-950 marquee w-full h-auto py-3.5 overflow-hidden '>
            <ul className='marquee_content flex list-none  '>
             <MarqueeItems/>
             <MarqueeItems/>
             <MarqueeItems/>
             <MarqueeItems/>
            </ul>
        </div>

    );
}

export default Marquee;

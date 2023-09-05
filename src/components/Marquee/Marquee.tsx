import MarqueeItems from './MarqueeItems';

function Marquee() {
    return (
        <div className='relative border-b-[3px] border-slate-950 bg-white marquee w-full h-auto py-3.5 overflow-hidden '>
            <ul className='marquee_content flex list-none  z-50'>
                <MarqueeItems />
                <MarqueeItems />
                <MarqueeItems />
                <MarqueeItems />
            </ul>
        </div>

    );
}

export default Marquee;

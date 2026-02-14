import DateAndTime from "./DateAndTime";

const Nav=()=>{
    return <nav className="w-full text-white text-xs lg:text-[0.9rem] flex justify-between items-center bg-[#9e9e9e1b] backdrop-blur-[5px]">
        <div className="left flex lg:gap-4 gap-1.5 py-1 px-2 lg:py-2 lg:px-3 items-center">
            <div className="navIcon">
                <img src="/navbar-icons/apple.svg"/>
            </div>
            <div className="navItem cursor-pointer">
                <p>Abdul Ghani</p>
            </div>
            <div className="navItem cursor-pointer">
                <p>File</p>
            </div>
            <div className="navItem cursor-pointer">
                <p>Window</p>
            </div>
            <div className="navItem cursor-pointer">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right py-1 px-3 lg:gap-1 w-45 flex justify-around items-center">
            <div className="navIcon cursor-pointer">
                <img src="/navbar-icons/wifi.svg" alt="" />
            </div>
            <DateAndTime></DateAndTime>
        </div>
    </nav>
}

export default Nav;
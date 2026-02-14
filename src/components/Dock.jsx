import DockIcon from "./DockIcon";
import { useState } from "react";

const Dock=()=>{
    const [hovered,setHovered]=useState(null);
    const icons=[
        "calender.svg",
        "cli.svg",
        "github.svg",
        "link.svg",
        "mail.svg",
        "note.svg",
        "pdf.svg",
    ];
    
    return <footer className="absolute bottom-1 left-1/2 -translate-x-1/2 py-2 lg:px-3 px-2 backdrop-blur-md bg-[rgba(63,63,63,0.395)] rounded-lg text-white lg:gap-3 gap-1.5 flex justify-center items-center">
        {icons.map((icon,index)=>{
            return <div key={index} 
            onMouseEnter={()=>setHovered(index)}
            onMouseLeave={()=>setHovered(null)}
            className={`transition-all duration-200 ease-in-out ${
            hovered===index?
            "scale-120 -translate-y-3":
            hovered===index-1||hovered===index+1?
            "scale-115 -translate-y-2":
            ""}`}>
                <DockIcon icon={icon}></DockIcon>
            </div>
        })}
    </footer>
}

export default Dock;
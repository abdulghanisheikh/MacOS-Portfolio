const DockIcon=({icon})=>{
    return <div className={`cursor-pointer rounded-lg w-9 lg:w-11 p-1.5 flex justify-center items-center
    ${
        icon==="github.svg"||icon==="cli.svg"?
        "bg-black":
        icon==="note.svg"?
        "bg-gradient-to-b from-[rgb(255,179,87)] to-[rgb(255,153,28)]":
        icon==="pdf.svg"?
        "bg-gradient-to-b from-[rgb(255,65,78)] to-[rgb(255,25,40)]":
        icon==="calender.svg"||icon==="mail.svg"?
        "bg-gradient-to-b from-[rgb(105,94,255)] to-[rgb(66,52,255)]":
        icon==="spotify.svg"?
        "bg-gradient-to-b from-[rgb(78,176,33)] to-[rgb(53,142,12)]":
        icon==="link.svg"?
        "bg-gradient-to-b from-[rgb(163,97,170)] to-[rgb(142,33,154)]":
        ""
    }`}>
        <img src={`/doc-icons/${icon}`} alt="" />
    </div>
}

export default DockIcon;
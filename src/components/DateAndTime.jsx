const DateAndTime=()=>{
    const today=new Date();
    const date=today.toLocaleDateString();
    let hour=today.getHours();
    let ampm="pm";
    if(hour===0){ 
        hour=12;
        ampm="am";
    }
    else{
        if(hour>=12){
            ampm="pm";
        }
        else ampm="am";
        hour=hour%12;
    }
    const min=today.getMinutes();

    return <div>
        <p className="text-white cursor-pointer">{`${date} ${hour}:${min}${ampm}`}</p>
    </div>
}

export default DateAndTime;
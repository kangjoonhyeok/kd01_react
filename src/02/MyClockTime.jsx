function MyClockTime(){
    const current = new Date();
    

    return(
        <div>
            <span>현재시각 : {current.toLocaleTimeString()}</span>
        </div>
    )
}
export default MyClockTime
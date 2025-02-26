function HelloDate(){
    const current = new Date();
    

    return(
        <div>
            <span style={{color:"blue", fontWeight:"bold"}}>현재시각 : {current.toLocaleTimeString()}</span>
        </div>
    )
}
export default HelloDate
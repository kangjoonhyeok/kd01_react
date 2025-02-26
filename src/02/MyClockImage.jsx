import clock from "./clock.png"

function MyClockImage(){
    return(
        <div  className="w-full flex p-5 text-white text-2xl justify-center">
            <img src={clock} alt="시계"></img>
        </div>
    )
}

export default MyClockImage
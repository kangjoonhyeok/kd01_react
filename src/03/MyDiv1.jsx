import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
    const div1Name = "div1";
    const div2Name = "div2";
    const div3Name = "div3";

  
    return (
    <div className="flex flex-col justify-center items-center w-2/3 h-2/3
                    text-white bg-lime-900 rounded-sm m-10 p-10">
        
        <p className="flex w-full font-bold justify-start">{div1Name}</p>
        <MyDiv2 dn1 = {div1Name} dn2 ={div2Name} dn3 = {div3Name}/>
        </div>
  )
}

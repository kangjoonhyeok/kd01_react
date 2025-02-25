import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BiAccessibility } from "react-icons/bi";

function App() {

  return (
    //프레그먼트 태그
    // component는 사용자 정의 태그이다.
    <div className='w-full h-full'>
      <div className='w-full flex justify-center items-center p-10'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-bold text-2xl w-full h-full'>Vite + React</h1>
      <div className="card font-bold animate-bounce">        
        <p>
          부산대학교 KDT 1기 강준혁
        </p>
      </div>
      <p className="flex text-9xl justify-center text-black">
        <BiAccessibility/>
      </p>
    </div>
  )
}

export default App

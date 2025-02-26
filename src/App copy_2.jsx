import Hello from "./01/Hello"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    //프레그먼트 태그
    // component는 사용자 정의 태그이다.
    <div className='w-full xl:w-8 h-screen mx-auto flex flex-col'>
      <header className='w-full h-20 bg-amber-50
                        px-20
                        flext justify-between items-center'>
        <div className='text-4xl font-bold text-amber-700'>
          PNU KDT10
          <div className='flex'>
          <img src={reactLogo} alt="react" className='w-8'></img> +
          <img src={viteLogo} alt="vite" className='w-8'></img>

          </div>
        </div>
      </header>
<main className='w-full flex flex-col justify-start items-center overflow-auto'>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
</main>
<footer className='w-full h-20 bg-amber-900
                   px-10 text-md text-amber-50 font-bold
                   flex justify-center items-center'>


</footer>
    </div>
  )
}

export default App

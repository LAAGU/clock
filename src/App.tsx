import { useEffect, useState } from "react"

function App() {
const [Time,setTime] = useState({
  h: new Date().getHours(),
  m: new Date().getMinutes(),
  s: new Date().getSeconds(),
})

  useEffect(() => {
    const inter = setInterval(() => {
      const date = new Date()
      setTime({
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
      })
    },1000)


    return () => {
      clearInterval(inter)
    }
  })


  return (
    <>
      <div className="debug absolute left-2 top-2 text-white">Debug : {JSON.stringify(Time)}</div>
      <div style={{background: "linear-gradient(120deg, rgb(0, 19, 34) , rgb(0, 19, 24),rgb(0, 14, 34))",boxShadow: "0px 0px 10px black inset"}} className="w-[500px] aspect-square rounded-full relative flex items-center justify-center">

      <div style={{filter: "drop-shadow(0px 0px 3px black)"}} className="dot w-3 aspect-square bg-[rgb(22,61,83)] rounded-full z-5"></div>

      <div className="top absolute left-1/2 -translate-x-1/2 top-2 text-[rgb(39,89,117)] text-2xl font-bold">12</div>
      <div className="bottom absolute left-1/2 -translate-x-1/2 bottom-2 text-[rgb(39,89,117)] text-2xl font-bold">6</div>

      <div className="left absolute top-1/2 -translate-y-1/2 left-2 text-[rgb(39,89,117)] text-2xl font-bold">9</div>
      <div className="right absolute top-1/2 -translate-y-1/2 right-2 text-[rgb(39,89,117)] text-2xl font-bold">3</div>


      <div className="top-right-1 absolute left-[75%] -translate-x-1/2 top-12 text-[rgb(39,89,117)] text-2xl">1</div>
      <div className="top-right-2 absolute left-[90%] -translate-x-1/2 top-32 text-[rgb(39,89,117)] text-2xl">2</div>

      <div className="top-left-1 absolute left-[25%] -translate-x-1/2 top-12 text-[rgb(39,89,117)] text-2xl">11</div>
      <div className="top-left-2 absolute left-[10%] -translate-x-1/2 top-32 text-[rgb(39,89,117)] text-2xl">10</div>

      <div className="bottom-right-1 absolute left-[75%] -translate-x-1/2 bottom-12 text-[rgb(39,89,117)] text-2xl">5</div>
      <div className="bottom-right-2 absolute left-[90%] -translate-x-1/2 bottom-32 text-[rgb(39,89,117)] text-2xl">4</div>

      <div className="bottom-left-1 absolute left-[25%] -translate-x-1/2 bottom-12 text-[rgb(39,89,117)] text-2xl">7</div>
      <div className="bottom-left-2 absolute left-[10%] -translate-x-1/2 bottom-32 text-[rgb(39,89,117)] text-2xl">8</div>

      <div style={{filter: "drop-shadow(0px 0px 3px black)"}} className="center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[80%] aspect-square rounded-full">

        <div style={{transform: "rotate("+Time.s * 6 + "deg)"}} className="second-hand absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-0.5 h-[80%]">
          <div className="fill absolute left-0 top-0 w-full h-1/2 bg-[rgb(39,89,117)] rounded z-2">

          </div>
        </div>

        <div style={{transform: "rotate("+(Time.m + Time.s / 60) * 6 + "deg)"}} className="min-hand absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[0.17rem] h-[50%]">
          <div className="fill absolute left-0 top-0 w-full h-1/2 bg-[rgb(39,89,117)] rounded z-1"></div>
        </div>

        <div style={{transform: "rotate("+(Time.h + Time.m / 60) * 30.2 + "deg)"}} className="hour-hand absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[0.25rem] h-[35%]">
          <div className="fill absolute left-0 top-0 w-full h-1/2 bg-[rgb(39,89,117)] rounded z-0"></div>
        </div>


      </div>

    </div>
    </>
  )
}

export default App

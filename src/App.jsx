
import { RiBook2Line,RiMoonLine } from "react-icons/ri";

function App() {
  return (
    <div className='bg-red-500 flex justify-center h-full w-full'>
      <div className="bg-black w-full lg:w-[70%] align-center h-screen p-3 ">
       <header className="bg-white">
        <div className=" col-span-6 flex ">
          <div className="col-span-4 w-full">
              <RiBook2Line className="h-9 w-9"/>
          </div>
          <div>
            <select name="tipo-letra" id="letra">
              hola
            </select>
          </div>
          <div className="flex">
            
            hola
            <RiMoonLine/>
          </div>
        </div>
      
        </header>
      </div>
    </div>
  )
}

export default App

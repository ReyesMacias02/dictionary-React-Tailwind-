
import { RiBook2Line,RiMoonLine,RiSearch2Line,RiPlayFill,RiExternalLinkLine } from "react-icons/ri";

import { useState } from 'react'
function App() {
  const [ShowColor,setShowmenu]=useState(true);
  const toggleColor= ()=>{

    setShowmenu(!ShowColor);
    console.log(ShowColor)
  };
  return (
    <div className={` flex justify-center h-full w-full ${ShowColor ? 'bg-white' : 'bg-black'} ` }>
      <div className={`w-full lg:w-[70%]  align-center h-full p-3   ${ShowColor ? 'bg-white' : 'bg-black'} `} >
       <header className={` ${ShowColor ? 'bg-white' : 'bg-black'} mb-10 `}>
        <div className=" col-span-6 flex ">
          <div className="col-span-4 w-full">
              <RiBook2Line className={`h-9 w-9 ${ShowColor ? 'text-black' : 'text-white'}  `} />
          </div>
          <div className="relative mx-1 w-full text-center lg:w-[40%] font-serif font-bold  ">
  <select className={`form-select block w-full text-center pr-1 pl-1 lg:pl-14 py-2.5 font-serif   text-gray-500 bg-transparent border-0 border-b-0
           appearance-none text-l  ${ShowColor ? 'dark:text-black' : 'dark:text-white'}  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer`}>
    <option className="font-serif">Serif</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>


  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-700">
    <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
          <div className="flex">
          
          <label className="flex items-center relative w-max cursor-pointer select-none">

  <input  type="checkbox" 
  onChange={toggleColor}
  className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black 0 bg-gray-400" />
  <span className="absolute font-medium text-xs uppercase right-1 text-white">  </span>
  <span     className="absolute font-medium text-xs uppercase right-8 text-white">  </span>
  <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
</label>
     
            <RiMoonLine className={`h-9 w-9 ml-3 mt-1 ${ShowColor ? 'text-black' : 'text-purple-600'}  `} />
          </div>
        </div>
      
        </header>
        {/*Buscador*/}
        <div className=" mb-12 ">
        <form>
        <div className='w-full relative '>
        <input  type="text" placeholder='Search' className={` w-full py-3 pl-3 pr-4 rounded-xl  outline-none ${ShowColor ? 'text-black bg-[#e4e3e5] ' : 'bg-[#262525] text-white'}`} /> 
        <RiSearch2Line className='absolute w-6 h-6 text-purple-700   left-[91%] lg:left-[96%] sm:left-[95%]  top-1/2  -translate-y-1/2 '/>
           
        </div>
      
      </form>
        </div>
        {/*Respuesta API*/}
        {/*Cabecera*/}
        <div className=" col-span-3   flex ">
          <div className=" grid-cols-1 w-full relative z-1 -left ">
            <h1 className={`font-bold text-5xl mx-2 mb-7 ${ShowColor ? ' text-black' : ' text-white'}` }>
              Keyboard
            </h1>     
            <div className="mx-2  text-xl text-purple-700  ">
              <span>
              /'ki:bo:d/
            </span>
            </div >
         
          
            
          </div>
          <button className="   p-7   ">
         
               <RiPlayFill type="input" className=" w-20  bg-purple-300 h-20 rounded-full text-purple-700"/>
       
          </button>
        </div>
        {/*Significados*/}
        <div className="mx-2 mb-6 ">

          <div>
          <div className="mx-[60px] sm:mx-11 w-[83%] md:mx-20   ">
            <hr  className="  border-0.5 border-gray-300 w-full lg:border-t-0  border-t-4 relative top-5 "/>
          </div>
          <div className={` text-xl mb-5 font-bold font-sans italic  ${ShowColor ? ' text-black' : ' text-white'}`}>
              <span >
             noun 
            </span>   
            </div>
          </div>
          <h2 className="mb-5 text-gray-400 font-serif text-lg">
            Meaning
          </h2>
          <ul className="mb-8 ml-9 list-none ">
            <li  type= "disc" className=" text-purple-600 ">
              <span className={`${ShowColor ? 'text-black' : 'text-white'}` }>
                (etc.)A set of keys used to operate a typewriter, computer etc.
              </span>
               </li>
            <li type= "disc" className=" text-purple-600 ">
              <span className={`${ShowColor ? 'text-black' : 'text-white'}` }>
                 A component of many instruments including the piano, organ, and
                harpsichord consisting of usually black and white keys that cause different
                tones to be produced when struck.
              </span>
            </li>
            <li type= "disc" className=" text-purple-600 ">
              <span className={`${ShowColor ? 'text-black' : 'text-white'}` }>
                A device with keys of a musical keyboard, used to control electronic sound-
                producing devices which may be built into or separate from the keyboard
                device.
              </span>
             
            </li>
          </ul>
        
        <div className=" col-span-2 flex">
          <div className="mr-5">
          <h2 className="text-gray-400 text-lg"> Sinonyms</h2>
        </div>
        <div>
          <span className="text-purple-600 text-lg font-bold">electronic Keyboard</span>
        </div>
        </div>

        </div>
        {/*verb*/}
        <div> 
          <div className="mx-[60px] sm:mx-11 w-[83%] md:mx-20  ">
            <hr  className=" mt-4 mb-4 border-0.5 border-gray-300 w-full border-t-4 lg:border-t-0 relative top-8 "/>
          </div>
          <div>
            <h2 className={`text-xl font-bold mb-7 mr-1  ${ShowColor ? ' text-black' : ' text-white'}`}>Verb</h2>
          </div>
         
          <h2 className="mb-5 text-gray-400 font-serif text-lg">
            Meaning
          </h2>
          <ul className="mb-10 ml-9 list-none ">
            <li  type= "disc" className=" text-purple-600 ">
              <span className={`${ShowColor ? 'text-black' : 'text-white'}` }>
                To Type on a computer keyboard.
              </span>
               </li>
            <li type= "none" className="">
              <span className={`text-gray-500 ` }>
                "Keybording ins the part of this job t hate the most."
              </span>
            </li>
          
          </ul>
        </div>
        {/*recursos*/}
        <div className=" col-span-2 flex ">
  <div className="mr-5">
  <h2 className="text-gray-400 text-l"> Sources </h2>
</div>
<div className="mb-8 underline">
  <button className={`text-l flex ${ShowColor ? 'text-black' : 'text-white'}`}>https/en.wiktionary.org/wiki/keyboard<RiExternalLinkLine className="mx-2 my-1.5"/> </button>
</div>
</div>
      </div>
    </div>
  )
}

export default App

import React, { useState } from "react";

const TSwitch = () => {
  const [selectedOption, setSelectedOption] = useState(false);

  const handleChange = (event) => {
    
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex">
  
      <label for="toggleFour" class="flex cursor-pointer select-none items-center">
  <div class="relative">
    <input type="checkbox" id="toggleFour" class="sr-only" />
    <div class="box bg-dark block h-8 w-14 rounded-full"></div>
    <div
      class="dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition"
    ></div>
  </div>
</label>
<label class="flex items-center relative w-max cursor-pointer select-none">
  <span class="text-lg font-bold mr-3">Toggle</span>
  <input
   type="radio"
   value="option1"
   onChange={handleChange}
   checked={selectedOption === false}
class="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500" />
  <span class="absolute font-medium text-xs uppercase right-1 text-white"> OFF </span>
  <span class="absolute font-medium text-xs uppercase right-8 text-white"> ON </span>
  <span class="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
</label>
    </div>
  );
};

export default TSwitch;

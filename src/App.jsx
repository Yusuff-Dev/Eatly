import { use, useRef, useState } from "react";

export default function App() {
  // const element  = document.querySelector('h1');
  // console.log('element');
  // const ref = useRef(null);

  const btnsRef = useRef(null);
  if(!btnsRef.current){
    btnsRef.current = [];
  }

  // if(ref.current){
  //   const h1  = ref.current;
  //   h1.textContent = "Ozodbek";
  // }
const [value, setValue] = useState("");
const [isFocused, setIsFocused] = useState(false);
// console.log(isFocused);

//   const ref = useRef(null);
  // if(ref.current){
  //   const box = ref.current;
  //   // console.log(box)
  //   if(isFocused){
  //     box.style.outline = "2px solid red";
  //   }else{
  //     box.style.outline = "none";
  //   }
  // }



  return (
    <div className="container">
     {/* <h1 ref={ref} className="text-center">Ilgizbek</h1> */}

     <div className="flex gap-3">
      <button
        ref={(el) => (btnsRef.current[0] = el)}
        className="px-4 py-2 bg-blue-500 text-white"
      >
        Button 1
      </button>

      <button
        ref={(el) => (btnsRef.current[1] = el)}
        className="px-4 py-2 bg-blue-500 text-white"
      >
        Button 2
      </button>

      <button
        ref={(el) => (btnsRef.current[2] = el)}
        className="px-4 py-2 bg-blue-500 text-white"
      >
        Button 3
      </button>
    </div>

    <form ref={ref} className={`border rounded-sm flex items-center ${isFocused ? 'border-lime-400 border-2' : 'border'}`}>
      <input value={value} onFocus={()=>setIsFocused(true)} onBlur={()=>setIsFocused(false)} onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Enter your name" className="grow outline-none"/>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
} 

// ref={el => (ref.current[index] = el)} select bunch of elements in react

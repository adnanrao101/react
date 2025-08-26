import { useState } from "react";

import "./Counter.css"

function Counter() {
  // yahan state banayi jo 0 se start hogi
  const [count, setCount] = useState(10);

  return (
    <>
      <h2>COUNTER APP</h2>

      {/* state value show karne ke liye */}
      <h1>{count}</h1>

      {/* +1 button */}
      <button onClick={() => {setCount(count + 1)}}>click for +1</button>

      {/* -1 button */}
      <button onClick={() => setCount(count - 1)}>click for -1</button>

      {/* reset button */}
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;






























// function Counter() {
//     return(

//         <>
        

//         <h2>COUNTER APP</h2>

//         <h1> 0 </h1>

//         <button> click for +1 </button>
//         <button> click for -1 </button>
//         <button> Reset </button>


//     </>
//     )
// }

// export default Counter;
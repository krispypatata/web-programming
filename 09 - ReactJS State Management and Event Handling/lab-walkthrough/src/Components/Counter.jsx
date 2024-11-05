import { useState } from "react";


export default function Counter (props) {
  function addValue () {
    // alert("Added!");
    // return setVal(val + 1);
    setVal((prev) => prev + 1);
  }

  const [val, setVal] = useState(props.val);

  return (
    <>
      <h1>Counter: {val}</h1>
      <button onClick={() => {
        addValue()
        addValue()
        addValue()
      }}>Add</button>
    </>
  );
}

// You can also write the function inside the event handler.
// function Counter(props){
//   return (
//       <>
//       <h1>Counter: {props.val}</h1>
//       <button onClick={() => alert("Added!")}>Add</button>
//       </>
//   );
// }

// export default Counter
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setText] = useState('');
//   function changeHandler(){
//     console.log(text);
//   }

//   return (
//     <div className="App">
//       <input type="text" onChange={changeHandler}></input>
//     </div>
//   );
// }

// export default App;
import { useEffect } from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [text, setText] = useState(''); 
  const [name,setName] = useState('love');
  //variation 1 = every render
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE");
  // });

  //variation 2 = first render
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // },[]);

  //variation 3 - on first render + whenever text changes
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // }, [name]);

  //variation 4 - to handle unmounting of a component
  useEffect(() => {
     //add event listner
     console.log("listner added");
     return () => {
      console.log("Listner removed");
     }
  },[text]);

  function changeHandler(event) {
    setText(event.target.value); 
    console.log(event.target.value); 
  }

  return (
    <div className="App">
      <input 
        type="text" 
        value={text} 
        onChange={changeHandler} 
        placeholder="Type something..."
      ></input>
    </div>
  );
}

export default App;


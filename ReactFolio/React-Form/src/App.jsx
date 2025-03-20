import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  const[firstName, setFirstName] = useState("");
//  const[lastName, setLastName] = useState("");
//   console.log(firstName);
//   console.log(lastName);
//   function changeFirstHandlerHandler(event) {
//     // console.log(event.target.value)
//     setFirstName(event.target.value);
//   }
//   function changelastHandler(event) {
//     // console.log(event.target.value)
//     setLastName(event.target.value);
//   }
const [formData,setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  isVisible: false,
  mode: "online-mode",
});
function changeHandler(event){
  const{name,checked,type} = event.target;
  setFormData((prevFormData => {
    return {
      ...prevFormData,
     [name]:type === "checkbox" ? checked : event.target.value
    }
  }));
} 

  return (
   <div className='App'>
    <form>
      <input
      type="text"
      placeholder="first name"
      onChange={changeHandler}
      name='firstName'
      value={formData.firstName}/>
      <br/>
      <br></br>
      
      <input
      type="text"
      placeholder="last name"
      onChange={changeHandler}
      name='lastName'
      value={formData.lastName}/>

      <br/>
      <br></br>
      <input
      type= "email"
      placeholder="enter your email here"
      onChange={changeHandler}
      name="email"
      value={formData.email}/>

      <br/>
      <br></br>

      <textarea
      placeholder="write your message here"
      onChange={changeHandler}
      name="message"
      value={formData.message}/>

      <br/>
      <br></br>
      <input
      type="checkbox"
      onChange={changeHandler}
      name="isVisible"
      checked={formData.isVisible}/>
      <label htmlFor="isVisible">Am I visible</label>
      <br/>
      <br></br>
      <input
      type="radio"
      onChange={changeHandler}
      name="mode"
      value="online-mode"
      id="online-mode"/>
      <label htmlFor="online-mode">Online Mode</label>
      <br/>

      
    </form>
   </div> 
  )
}

export default App

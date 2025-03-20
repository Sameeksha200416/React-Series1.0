import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country:'India',
    state:'',
    city:'',
    address:'',
    postal:'',
    comments:'',
    candidates:false,
    offers:false,
    pushNotification:""

  })
  function changeHandler(event){
   const {name,value,checked,type} = event.target
   setFormData((prev)=>({...prev,[name]:type==='checkbox'?checked:value}));
  }

  return (
   <div className='flex flex-col item-center'>
    <form>
      <label htmlfor="firstName">First Name</label>
      <br/>
      <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={changeHandler}
      className="border-2 border-blue-500 rounded-md p-2 m-2"
      />
      <br/>
      <label htmlfor="lastName">Last Name</label>
      <br/>
      <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={changeHandler}
      className="border-2 border-blue-500 rounded-md p-2 m-2"
      />
      <br/>
      <label htmlfor="email">Email</label>
      <br/>
      <input
      type="text"
      name="email"
      id="email"
      placeholder="Email"
      value={formData.email}
      onChange={changeHandler}
      className="border-2 border-blue-500 rounded-md p-2 m-2"
      />
      <br/>
      <label htmlfor="country">Country</label>
      <br/>
      <select id="country"name="country"value={formData.country} onChange={changeHandler} className="border-2 border-blue-500 rounded-md p-2 m-2">
        <option>India</option>
        <option>USA</option>
        <option>Australia</option>
        <option>Canada</option>
      </select>
      <br/>
      <label htmlfor="state">State</label>
      <br/>
      <input
      type="text"
      name="state"
      id="state"
      placeholder="State"
      value={formData.state}
      onChange={changeHandler}
      className="border-2 border-blue-500 rounded-md p-2 m-2"
      />
      <br/>
      <label htmlfor="city">City</label>
      <br/>
      <input
      type="text"
      name="city"
      id="city"
      placeholder="City"
      value={formData.city}
      onChange={changeHandler}
      className="border-2 border-blue-500 rounded-md p-2 m-2"
      />
      <br/>
      <label htmlfor="address">Address</label>
      <br/>
      <input
      type="text"
      name="address"
      id="address"
      placeholder="Address"
      value={formData.address}
      onChange={changeHandler}
      className="border-2 border-blue-500 rounded-md p-2 m-2"
      />
      <br/>
      <label htmlfor="postal">Postal Code</label>
      <br/>
      <input 
      type="text"
      name="postal"
      id="postal"
      placeholder="Postal Code"
      value={formData.postal}
      onChange={changeHandler}
      className="border-2 border-blue-500 rounded-md p-2 m-2"
      />
      <br/>
      <fieldset>
        <legend>By Email</legend>
       <div className="flex">
       <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
        />
        <div>
          <label htmlfor="comments">Comments</label>
          <p>Get notified when someone comments on your post</p>
        </div>
       </div>

       <div className="flex">
       <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
        />
        <div>
          <label htmlfor="candidates">Candidates</label>
          <p>Get notified when a candidate applies for a job</p>
        </div>
        </div>
        <div className="flex">
        <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
        />
        <div>
          <label htmlfor="offers">Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer</p>
        </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Push Notification</legend>
        <p>These are delivery via SMS to your mobile phone</p>
        <input
        id="pushNotification"
        name="pushNotification"
        type="radio"
        value="yes"
        onChange={changeHandler}
        />
        <label htmlFor='pushNotification'>Everything</label>
        <br/>
        <input
        id="pushemail"
        name="pushNotification"
        type="radio"
        value="same as email"
        onChange={changeHandler}
        />
        <label htmlFor='pushemail'>Same as email</label>
        <br/>
        <input
        id="pushNothing"
        name="pushNotification"
        type="radio"
        value="No Push Notification"
        onChange={changeHandler}
        />
        <label htmlFor='pushNothing'>No Push Notification</label>
      </fieldset>
    </form>
   </div>

  )
}

export default App

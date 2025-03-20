import { useState } from 'react'
import {useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { filterData, apiUrl } from "./data/data.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS
import Navbar from "/src/components/Navbar.jsx";
import Filter from '/src/components/Filter.jsx';
import Cards from '/src/components/Cards.jsx';




const App = () => {
  const[Courses,setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
    try{
      const res = await fetch(apiUrl);
      const data = await res.json();
      //save data into a variable
      setCourses(data.data);
    }
    catch(error){
      toast.error("something went wrong")
    }
  }
  fetchData();
  },[]);
  return (
    <div>
      <Navbar/>
      <Filter
      filterData = {filterData}
      />
      <Cards courses = {Courses}/>
    </div>
  );
};
export default App;
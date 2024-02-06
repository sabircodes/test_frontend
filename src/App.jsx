import { Route, Routes } from "react-router-dom"

import Indexpage from "./Pages/Indexpage"
import Login from "./Pages/Login"
import Layout from "./components/Layout"
import Register from "./Pages/Register"
import axios from "axios"
import { UserContextProvider } from "./UserContext"
import Accountpage from "./Pages/Accountpage"
import Collections from "./Pages/Collections"
import Partners from "./Pages/Partners"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { SearchContextProvider } from "../context/search"
import Search from "./Pages/Search"
import Product from "./Pages/Product"
import Productedit from "./Pages/Productedit"
import { baseURL } from "../url"

axios.defaults.baseURL =baseURL
axios.defaults.withCredentials =true;

function App() {
  

  return (
    <UserContextProvider>
    <SearchContextProvider>
    
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Indexpage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      
      {/* <Route path="/account" element={<Accountpage/>}/> */}
      <Route path="/account/:subpage?" element={<Accountpage/>}/>
      {/* <Route path="/account/bookings" element={<Accountpage/>}/>
      <Route path="/account/places" element={<Accountpage/>}/> */}
      <Route path="/account/:subpage/:action" element={<Accountpage/>}/>
      <Route path="/collections" element={<Collections/>}/>
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/partners" element={<Partners/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/search/:keyword" element={<Search/>}/>
      <Route path="/collections/:id" element={<Product/>}/>
      <Route path="/collections/edit/:id" element={<Productedit/>}/>
      


      </Route>
    </Routes>
    </SearchContextProvider>
    </UserContextProvider>
   
  )
}

export default App

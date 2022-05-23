import React from 'react'
import styles from "../../styles/Sidebar.module.css"
import { Link } from "react-router-dom"
import {
  FaCode,
  FaWpforms,
  FaAddressCard,
  FaClipboardList,
  FaPager,
  FaUserCog,
  FaDatabase,
  FaBook,
  FaMusic,
  FaStream,
} from "react-icons/fa";
import { GiMeal, GiFruitBowl, GiNotebook } from "react-icons/gi";
import { BiNotepad, BiMoviePlay } from "react-icons/bi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiSurveyLine } from "react-icons/ri";
import { MdMenuBook } from "react-icons/md";
import { GrSystem } from "react-icons/gr";

const Sidebar = () => {
  return (
      <section className={styles.sidebar}>
          <h3>walk through</h3>
          <br />
          <Link to="/main/welcome"><span>Welcome</span><FaCode /></Link>
          <Link to="/main/card"><span>Card</span><FaAddressCard/></Link>
          <Link to="/main/form"><span>Form</span><FaWpforms/></Link>
          <Link to="/main/todoapp"><span>ToDo App</span><FaClipboardList/></Link>
          <Link to="/main/auth"><span>Authentication</span><FaUserCog/></Link>
          <Link to="/main/data"><span>Fetch Data</span><FaDatabase/></Link>
          <Link to="/main/pageone"><span>Landing Page 1</span><FaPager/></Link>
          <Link to="/main/pagetwo"><span>Landing Page 2</span><FaPager/></Link>
          <Link to="/main/pagethree"><span>Landing Page 3</span><FaPager/></Link>
          <Link to="main/welcome"><span>Welcome</span></Link>
          <br />
          <h3>projects</h3>
          <br />
          <Link to="/main/food"><span>Food Delivery</span><GiMeal/></Link>
          <Link to="/main/grocery"><span>Grocery Store</span><GiFruitBowl/></Link>
          <Link to="/main/noteapp"><span>Note App</span><BiNotepad/></Link>
          <Link to="/main/report"><span>Report</span><GiNotebook/></Link>
          <Link to="/main/booking"><span>Booking System</span><GrSystem/></Link>
          <Link to="/main/dictionary"><span>Dictionary</span><MdMenuBook/></Link>
          <Link to="/main/ebook"><span>eBook</span><FaBook/></Link>
          <Link to="/main/movie"><span>Movie</span><BiMoviePlay/></Link>
          <Link to="/main/music"><span>Music</span><FaMusic/></Link>
          <Link to="/main/survey"><span>Survey</span><RiSurveyLine/></Link>
          <Link to="/main/weather"><span>Weather</span><TiWeatherPartlySunny/></Link>
          <Link to="/main/stream"><span>Point of Sale</span><FaStream/></Link>
    </section>
  )
}

export default Sidebar
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/Nav.jsx'
import Section from './components/Section.jsx'
import Card from './components/Card.jsx'
import Footer from './components/footer.jsx'
import Loader from './components/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Loader/>
    <NavBar/>
    <Section/>
    <div className='flex flex-wrap px-2  gap-4 pb-20 bg-black mx-auto w-[100%] justify-center'>
      <Card url = "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="/>

      <Card url = "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw="/>

      <Card url = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="/>

      <Card url = "https://jooinn.com/images/landscape-photography-of-green-mountains.jpg"/>


      {/* 4 cards */}
      <Card url = "https://static.vecteezy.com/system/resources/thumbnails/049/855/238/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg"/>

      <Card url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg"/>

      <Card url = "https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?semt=ais_hybrid&w=740&q=80"/>

      <Card url = "https://static.vecteezy.com/system/resources/previews/049/855/259/non_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg"/>
    </div>

    <Footer/>
   
  </StrictMode>,
)

import React from 'react'
import './Weather.css'
import CloudIcon from '@mui/icons-material/Cloud';
import ListIcon from '@mui/icons-material/List';
import MapIcon from '@mui/icons-material/Map';
import SettingsIcon from '@mui/icons-material/Settings';

let Array = [
    {
        logo:<CloudIcon></CloudIcon>,
        title:"Weather",
        id:"1",
    },    
    {
        logo:<ListIcon></ListIcon>,
        title:"Cities",
        id:"2",
    },  
      {
        logo:<MapIcon></MapIcon>,
        title:"Map",
        id:"3",
    }, 
       {
        logo:<SettingsIcon></SettingsIcon>,
        title:"Settings",
        id:"4",
    },
]



const SideBar = () => {
  return (
    <div className='MainSideBar'>
        <div className='SideBarSub'>
            {Array.map((item) =>{
                return<div className='paraanchor' key={item.id}><p>{item.logo}</p><p >{item.title}</p></div>
            })}
        </div>
    </div>
  )
}
export default SideBar;
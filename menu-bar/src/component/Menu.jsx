import React, { useEffect, useState } from 'react'
import './Menu.css'
import { SideBarData } from './sideBarData';

function Menu() {
    const [isOpen,setOpen] = useState(true);
    function handleArrow(){
        setOpen(!isOpen)
    }
    return (
        <div>
            <header className={`${isOpen?'open':'closed'}`}>
                <div className="logo">
                    <button>
                        <div onClick={handleArrow} className={`arrow ${isOpen ? 'left':'right'}`}></div>
                    </button>
                    <div className="company-name">{!isOpen?'Mdraza':''}</div>
                </div>
                <ul>
                    {SideBarData?.map((item, index)=>{
                        return <li className='listItem' key={index}><a href={item.path}></a><span className='icon'>{item.icon}</span><span className='iconName'>{!isOpen ? item.title :''}</span></li>
                    })}
                </ul>
            </header>
        </div>
    )
}

export default Menu





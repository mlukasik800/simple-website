import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Navigation from '../styles/Navigation.css';


const list =  [
{
    name:"start",
    path:"/",
    exact: true,
},
{
    name:"produkty",
    path:"/products",
},
{
    name:"kontakt",
    path:"/contact",
},
{
    name:"admin",
    path:"/admin",
},
]

const menu = ()=> {

    const menu = list.map(item=> (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
        return ( 
            <nav className="main">
                <ul>
                   {menu}
                </ul>
            </nav>
         );
}
 
export default menu;










// const Navigation=()=>{
//     return ( 
//     <nav>
//         <ul>
//             <li>
//                 <NavLink to="./">Start</NavLink>
//             </li>
//             <li>
//                 <NavLink to="products">Produkty</NavLink>
//             </li>
//             <li>
//                 <NavLink to="contact">Kontakt</NavLink>
//             </li>
//             <li>
//                 <NavLink to="admin">Panel Admina</NavLink>
//             </li>
//         </ul>
//     </nav>
//  );
// }

// export default Navigation;
import React from "react";
import {
    Typography,
  } from "@material-tailwind/react";
import Dashboard from "../pages/dashboard";
  
export default function Navbar(){
    
    return <nav className = "nav " >
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium mb-2 sm:mb-0 flex flex-row"
        >
         <div class="h-10 w-10 self-center mr-2">
            <img class="h-10 w-10 self-center" src="logo.png" />
         </div>
         <a href="/" class="scroll-m-10 text-2xl font tracking-tight lg:text-1xl text-slate-50 ">BitsBIDS</a>
        </Typography>
        
        <ul>
            <li className="">
                <a href="/home">Home</a>
            </li>
            
            <li>
                <a href="./Dashboard">Dashboard</a>
                
            </li>

            <li>
                 <a href="/Buy">Buy</a>
            </li>

            <li>
                 <a href="/Sell">Sell</a>
            </li>

        </ul>





    </nav>
}
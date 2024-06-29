import React from "react";
import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";

function Icon({ name }){
   if(name == 'cross') return <FaTimes />
   else if(name == 'circle') return <FaRegCircle />
   return <FaPen />
}

export default Icon
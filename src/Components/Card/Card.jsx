import React from "react";
import Icon from "../Icon/Icon";

function Card({ gameEnd , player , play , index}){
    let icon = <Icon />
    if(player == 'X'){
        icon = <Icon name='cross'/>
    }else if(player == 'O'){
        icon = <Icon name='circle'/>
    }
    return(
        <>
        <div className="border bg-yellow-500 inline-block p-10 text-white text-3xl rounded-xl hover hover:bg-green-500 cursor-pointer duration-200" onClick={() => !gameEnd && player == '' && play(index)}>
            {icon}
        </div>
        </>
    )
}

export default Card;
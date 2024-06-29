import React, { useState } from "react";
import Card from "../Card/Card";
import isWinner from '../Helper/isWinner'

function Grid({ numberOfCards }){
    const[ board  , setBoard] = useState(Array(numberOfCards).fill(""));
    //True => 'O' and False => 'X'
    const[turn , setTurn] = useState(true);
    const[winner, setWinner] = useState(null);


    function onPlay(index){
        if(turn){
            board[index] = 'O';
        }else{
            board[index] = 'X';
        }

        let win = isWinner(board , turn ? 'O' : 'X');
        if(win){
            setWinner(win);
        }else if(!board.includes("")){
            setWinner("draw");
        }

        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setTurn(true);
        setWinner(null);
    }

    return(
        <>
            {
                winner && (
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="text-center text-4xl text-blue-500 font-bold mt-5">{winner === 'draw' ? 'It\'s a draw!' : `Winner is : ${winner}`}</h1>
                        <button onClick={reset} className="border py-2 px-4 bg-green-500 hover:bg-green-600 cursor-pointer duration-200 rounded-xl text-white mt-5 text-xl font-semibold">Reset Game</button>
                    </div>
                )
            }

            <h2 className="text-center text-4xl text-blue-600 font-bold mt-5">{!winner ? ` Current Turn is : ${turn ? 'O' : 'X' }`: null}</h2>
            <div className="flex items-center justify-center pt-20"> 
                <div className="grid grid-cols-3 gap-4">
                    {board.map((el, idx) => (
                        <Card gameEnd={winner ? true : false} player={el} play={onPlay} index={idx} key={idx} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Grid;
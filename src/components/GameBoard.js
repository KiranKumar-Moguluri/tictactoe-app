import { useState } from 'react';
import Square from './Square';

const GameBoard = () => {

    const [currentplayer, setcurrentplayer]=useState('X');

    const[moves, setmoves]=useState(0);

    const emptyGame=[{value:null}, {value:null}, {value:null}, {value:null}, {value:null}, {value:null}, {value:null}, {value:null}, {value:null}];
    const [gameState, setgameState]=useState(emptyGame);

    const executemove = index =>{
        //console.log(index);
        let newgamestate= gameState;

        if(newgamestate[index].value===null){
        newgamestate[index].value=currentplayer;
        setgameState(newgamestate);
        let nextplayer= currentplayer==="X"? "O":"X";
        setcurrentplayer(nextplayer);
            let result = winorDraw();
            if(result!=false)
            {
                alert(`Player ${result} wins !`);
            }
            let move_count=moves+1;
            setmoves(move_count);
            if(move_count===9){
                alert('Drawn!');
            }
        
        }
        
    }  

    const winorDraw = () =>{
        let win=false;

        if(gameState[0].value===gameState[1].value && gameState[0].value===gameState[2].value){
            win=gameState[0].value;
        }
       else if(gameState[0].value===gameState[4].value && gameState[4].value===gameState[8].value){
            win=gameState[0].value;
        }
        else if(gameState[0].value===gameState[1].value && gameState[0].value===gameState[2].value){
            win=gameState[0].value;
        }

        //console.log(win);

        return win;
    }

    return (
        <>
            <div className="col-md-12 col-12 text-center">
                <h3>Current Players :{currentplayer}</h3>
                <button onClick={e => setgameState(emptyGame)}>Restart</button>
            </div>

            <div className="bg-white col-md-6 offset-md-3 GameBoard shadow-sm row p-4">
            
            {gameState.map((square, key) => (

                <Square key={key} gameState={gameState} index={key} executor={executemove}/>
            
            ))}     
            


            </div>
        </>
      );
}
 
export default GameBoard;
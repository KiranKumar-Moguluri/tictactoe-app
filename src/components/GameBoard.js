import { useState } from 'react';
import Square from './Square';

const GameBoard = () => {

    const [currentplayer, setcurrentplayer]=useState('X');

    const[moves, setmoves]= useState(0);

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
            
           
            if(result!=false && result!=null)
            {
                alert(`Player ${result} wins !`);
                setgameState(emptyGame)
                setmoves(0);
            }else{
                let move_count= moves+1;
                setmoves(move_count);
            }
            
            if(moves===8){
                alert('Drawn!');
                setgameState(emptyGame)
                setmoves(0);
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
        else if(gameState[0].value===gameState[3].value && gameState[0].value===gameState[6].value){
            win=gameState[0].value;
        }
        else if(gameState[1].value===gameState[4].value && gameState[4].value===gameState[7].value){
            win=gameState[1].value;
        }
        else if(gameState[2].value===gameState[5].value && gameState[2].value===gameState[8].value){
            win=gameState[2].value;
        }
        else if(gameState[2].value===gameState[4].value && gameState[4].value===gameState[6].value){
            win=gameState[2].value;
        }
        else if(gameState[3].value===gameState[4].value && gameState[3].value===gameState[5].value){
            win=gameState[3].value;
        }
        else if(gameState[6].value===gameState[7].value && gameState[6].value===gameState[8].value){
            win=gameState[6].value;
        }
        // else{
        //          alert('Drawn! case 2');
               
        // }
        
        

        //console.log(win);

        return win;
    }

    return (
        <>
            <div className="col-md-12 col-12 text-center">
                <h3>Current Players :{currentplayer}</h3>
                <button onClick={e => {setgameState(emptyGame); setmoves(0)}}>Restart</button>
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
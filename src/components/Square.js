const Square = ({index, gameState, executor}) => {
    
       //console.log(gameState[index].value);

      const gridbox = index =>{
        let borderString="";

     

        if(index == 1 || index == 7 ){
            borderString+="bsb";
        }

        if(index == 3  || index == 5 ){
          borderString+="bstpb";
      }

      if(index == 4){borderString+="bs";}


        return borderString;
      }

    return (
        <div className ={`X10 Square-box ${gridbox(index)}`} onClick={e => executor(index)}>
          {gameState[index].value}

        </div>
      );
}
 
export default Square;
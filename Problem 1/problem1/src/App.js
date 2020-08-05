import React from 'react';

function App() {
  let colorPallete = ['red','blue','green','black','orange'];
  let [currentColor,setCurrentColor] = React.useState();
  let [nextColor,setNextColor] = React.useState();
  let [usedColors,setUsedColors] = React.useState([]);

  let changeColors = () =>{
    if(nextColor && nextColor === "green"){
      //push to used color
      setCurrentColor("green");
      let tempArray = usedColors.slice();
      tempArray.push("green");
      setUsedColors([...tempArray]);
      setNextColor(null);
    }
    else{
      let randomColor = colorPallete[Math.floor(Math.random()*colorPallete.length)];
      setCurrentColor(randomColor);
      let tempArray = usedColors.slice();
      tempArray.push(randomColor)
      setUsedColors([...tempArray]);
      if(randomColor === "blue"){
        setNextColor("green");
      }
    }
  }
  
  return (
    <div>
      <button id="button" onClick={() => changeColors()} style={{height:100,width:200,backgroundColor:currentColor}}>Click Me!</button>
      <div>
        {usedColors.map((x) => {
          return <span style={{color:x}}>{x},</span>
        })}
      </div>
    </div>
  );

 
}

export default App;

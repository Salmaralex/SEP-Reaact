import React from "react";
import './App.css';

 class App extends React.Component{
   constructor(props){
     super(props);
     this.state={
      square:Array(16).fill(null),
      count: 0
     }
     this.wineerLine=[
       [0,1,2,3],
       [4,5,6,7],
       [8,9,10,11],
       [12,13,14,15],
       [0,4,8,12],
       [1,5,9,13],
       [2,6,10,14],
       [3,7,11,15],
       [0,5,10,15],
       [3,6,9,12],
      ]
   }
   Iswinner=()=>{
let s = (this.state.count % 2===0)?'Y':'N'
for(let i=0;i<10;i++){
  let line=this.wineerLine[i]
  if(this.state.square[line[0]]=== s  
    && this.state.square[line[1]]=== s
    &&this.state.square[line[2]]=== s
    &&this.state.square[line[3]]=== s ){
      alert(s + ' win')
        this.setState({square: Array(16).fill(null)})
        this.setState({count:0})
    }
}
   }
   clickHandler= event=>{ 
    let data = event.target.getAttribute('data')
    console.log(data)
    let currentSquare = this.state.square
    if(currentSquare[data]===null){
    currentSquare[data]=(this.state.count%2===0)?'Y':'N'
    this.setState({count:this.state.count+1});
    this.setState({square:currentSquare});
    }
    this.Iswinner();
    
   }
   render(){
     return(
       <div className="test">
         <div className="grida" onClick={this.clickHandler} data="0">{this.state.square[0]}</div>
         <div className="grida" onClick={this.clickHandler} data="1">{this.state.square[1]}</div>
         <div className="grida" onClick={this.clickHandler} data="2">{this.state.square[2]}</div>
         <div className="grida" onClick={this.clickHandler} data="3">{this.state.square[3]}</div>
         <div className="grida" onClick={this.clickHandler} data="4">{this.state.square[4]}</div>
         <div className="grida" onClick={this.clickHandler} data="5">{this.state.square[5]}</div>
         <div className="grida" onClick={this.clickHandler} data="6">{this.state.square[6]}</div>
         <div className="grida" onClick={this.clickHandler} data="7">{this.state.square[7]}</div>
         <div className="grida" onClick={this.clickHandler} data="8">{this.state.square[8]}</div>
         <div className="grida" onClick={this.clickHandler} data="9">{this.state.square[9]}</div>
         <div className="grida" onClick={this.clickHandler} data="10">{this.state.square[10]}</div>
         <div className="grida" onClick={this.clickHandler} data="11">{this.state.square[11]}</div>
         <div className="grida" onClick={this.clickHandler} data="12">{this.state.square[12]}</div>
         <div className="grida" onClick={this.clickHandler} data="13">{this.state.square[13]}</div>
         <div className="grida" onClick={this.clickHandler} data="14">{this.state.square[14]}</div>
         <div className="grida" onClick={this.clickHandler} data="15">{this.state.square[15]}</div>
       </div>
     )
   }
 }
export default App;

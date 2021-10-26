// import logo from './logo.svg';
import './Style.css';
import {Component} from 'react';
import FunctionalComponents from './Components/functional';
import ClassComponent from './Components/class';

class RenderComponents extends Component{

  state = {
    isClassActive: false,
    isFunctionActive: false
  }

  render(){
    return (
      <div className="App">
        
          <h1 id="head1">Styling using Functional and Class Component</h1>
  
          
        
        
        <div className="Buttons-div">
        <button onClick={()=>{
          if( this.state.isFunctionActive==false){
            this.setState({isFunctionActive:true})}
          if(this.state.isFunctionActive){
            this.setState({isFunctionActive:false})
          }
        
        }}>To see styling in Functional Component</button>
  
        <button onClick={()=>{
          if( this.state.isClassActive==false){
            this.setState({isClassActive:true})}
          if(this.state.isClassActive){
            this.setState({isClassActive:false})
          }
        }} >To see styling in Class Component</button>
        </div>

        <div className ="data-container">
          <div style={{visibility:this.state.isFunctionActive ? "visible":"hidden"}}>
          <FunctionalComponents /> 
        </div>

        <div style={{visibility:this.state.isClassActive ? "visible":"hidden"}}>
        <ClassComponent />
        </div>
      </div>
        </div>
    );
  }
  
}


export default RenderComponents;

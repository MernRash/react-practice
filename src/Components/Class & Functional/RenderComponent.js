
import '../../Style.css';
import {Component} from 'react';
import FunctionalComponents from './functional';
import ClassComponent from './class';


class RenderComponents extends Component{

    state = {
      isClassActive: false,
      isFunctionActive: false
    }
  
    functionActive(){
     this.setState({isFunctionActive: !this.state.isFunctionActive});
    }
  
    classActive(){
      this.setState({isClassActive:!this.state.isClassActive});
    }
    render(){
      return (
        <div className="App">
          
            <h1 id="head1">Styling using Functional and Class Component</h1>
    
            
       
          
          <div className="Buttons-div">
          <button onClick={()=>this.functionActive()}>To see styling in Functional Component</button>
    
          <button onClick={()=>this.classActive()} >To see styling in Class Component</button>
          </div>
  
          <div className ="data-container">
            {this.state.isFunctionActive? <FunctionalComponents /> : null}
  
            {this.state.isClassActive ? <ClassComponent /> : null}
        </div>
          </div>
      );
    }
    
  }

  export default RenderComponents;

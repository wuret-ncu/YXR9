import React from 'react';
import './App.css';
import Nav from './components/Nav.js'
import Input from './components/Input.js'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      item:['讀書','寫作業','畫畫'],
      input:'',
    };
    this.Addtx=this.Addtx.bind(this);
  }
  insert_text=(e)=>{
    // console.log(e.target.value);
    if(e.target instanceof HTMLInputElement){
      this.setState({
        input:e.target.value,
      })
    }
  }
  Addtx=(a)=>{
      const otheritem=[a.target.value,...this.state.item]
      this.setState({
        item:otheritem,
        input:'',
        check:true
      })
      // console.log('ok~');
    
  }
  //lifecycle
  componentDidUpdate() {
    console.log("Update")
  }
  render(){
    return (
      <div>
        <h1>To Do List</h1>
        <input type="text" value={this.state.input} onKeyPress={this.Addtx} onChange={this.insert_text}/>
        <button onClick={this.Addtx} value={this.state.input}>Add</button>
        <Nav />
        <Input name={this.state.item}/>
        
      </div>
    );
  }
}

export default App;
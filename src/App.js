import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Nav from './components/Nav.js'
import Input from './components/Input.js'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      item:['讀書','寫作業','畫畫'],
      input:'',
      completed:false,
      id:nanoid(),
    };
    this.addList=this.addList.bind(this);
  }
  /* 於輸入框輸入清單項目 */
  insertList=(e)=>{
    // console.log(e.target.value);
    if(e.target instanceof HTMLInputElement){
      this.setState({
        input:e.target.value,
        completed:false,
        id:nanoid(),
      })
    }
  }

  /* 按下Add按鈕，新增清單項目 */
  addList=(a)=>{
    const otheritem=[a.target.value,...this.state.item]
    this.setState({
      id:nanoid(),
      item:otheritem,
      input:'',
      completed:false,
    })
    // console.log('ok~');
  }

  /**按下清單項目的Delete按鈕，刪除清單項目 */
  removeList=(index)=>{
    const {item}=this.state;
    item.splice(index,1);
    this.setState({
      item,
    });
  };

  /**當勾選清單項目時的事件 */
  toggleCompleted=(event,index)=>{
    const listCompleted=this.state.item.filter((todo)=>{
      if(todo.id===index+1){
        todo.completed=event.target.checked;
      }
      return todo;
    });
    this.setState({
      item: listCompleted,
      completed:true,
      id:nanoid(),
    });
  }

  //lifecycle
  componentDidUpdate() {
    console.log("Update")
  }

  render(){
    return (
      <div>
        <h1 className="title">To Do List</h1>
        <input 
          className="input"
          type="text" 
          placeholder="Type item here..." 
          onKeyPress={this.addList} 
          onChange={this.insertList}
        />
        <button className="btn" onClick={this.addList} value={this.state.input}>Add</button>
        <Nav name={this.state.item}/>
        <Input
          item={this.state.item}
          value={this.state.input} 
          id={this.state.id}
          completed={this.state.completed}
          handleOnChange={this.toggleCompleted}
          handleOnRemove={this.removeList}
        />
      </div>
    );
  }
}

export default App;
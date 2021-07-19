import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Nav from './components/Nav.js'
import Input from './components/Input.js'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      item: [{id:1,title:"讀書",completed:false},{id:2,title:"寫作業",completed:false},{id:3,title:"畫畫",completed:false}],
      input: '',
    };
    this.addList = this.addList.bind(this);
  }
  /* 於輸入框輸入清單項目 */
  insertList = (e) => {
    // console.log(e.target.value);
    if(e.target instanceof HTMLInputElement){
      this.setState({
        input: e.target.value,
      })
    }
  }

  /* 按下Add按鈕，新增清單項目 */
  addList = (a) => {
    let itemLength = this.state.item.length;

    if(this.state.input === ""){
      return;
    }
    this.setState({
      item: [...this.state.item,{
        id: (itemLength += 1),
        title: this.state.input,
        completed: false,
      },],
      input: '',
    });
    // console.log('ok~');
  };

  /**按下清單項目的Delete按鈕，刪除清單項目 */
  removeList = (index) => {
    const {item} = this.state;
    item.splice(index,1);   //從該索引值位置刪除一個項目
    this.setState({
      item,
    });
  };

  /**當勾選清單項目時的事件 */
  toggleCompleted = (index) => {
    const {item} = this.state;
    this.setState({
      item: item.map(todo=>{
        if(todo.id === index+1)
        return{
          ...todo,
          completed: !todo.completed
        };
        return todo;
      })
    });
  };

  //lifecycle
  componentDidUpdate() {
    console.log("Update")
  }

  render(){
    return (
      <div>
        <h1 className= "title">To Do List</h1>
        <input 
          className= "input"
          type= "text" 
          placeholder= "Type item here..." 
          onKeyPress= {this.addList} 
          onChange= {this.insertList}
        />
        <button className= "btn" onClick= {this.addList} value= {this.state.input}>Add</button>
        <Nav name= {this.state.item}/>
        <Input
          item= {this.state.item}
          handleOnChange= {this.toggleCompleted}
          handleOnRemove= {this.removeList}
        />
      </div>
    );
  }
}

export default App;
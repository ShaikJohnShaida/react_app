import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  addItem() {
    if (this.inputElement.value !== '') {
      this.setState({
        items: [
          ...this.state.items,
          {
            text: this.inputElement.value,
            id: Date.now(),
          },
        ],
      });
      this.inputElement.value = '';
    }
  }
  deleteMyText(key) {
    console.log(this.state.items);
    const array = this.state.items;
    const index = array.indexOf(key.target.value);
    console.log(index);
    delete array[index];
    console.log(this.state.items);
    this.setState({
      items: array,
    });
  }
  render() {
    console.log('test');
    return (
      <div className="todoListMain">
        <div className="header">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.addItem();
            }}
          >
            <input ref={(a) => { this.inputElement = a; }} placeholder="enter your task" />
            <button type="submit">add me</button>
          </form>
        </div>
        <ul className="theList">{
          this.state.items.map(i =>
            <li id={i.id}>
              <a
                href="" onClick={(e) => {
                  e.preventDefault();
                  this.deleteMyText(i.id);
                }}
              >{i.text}</a></li>,
        )
      }
        </ul>
      </div>
    );
  }
}
export default TodoList;

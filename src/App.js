import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button.jsx';
import ButtonClass from './button-class.jsx';
import List from './list.jsx';
import Input from './input.jsx';


class App extends React.Component {
  //let arrButt = ['one', 'two', 'three', 'four'];

  /*let count = [
    {'id': 1 ,'title': 'one'},
    {'id': 2 ,'title': 'two'},
    {'id': 3 ,'title': 'three'},
    {'id': 4 ,'title': 'four'}
  ];*/
  constructor(props) {
    super(props);
    this.state = { 
      list: ['one', 'two', 'three'],
      weather: 'the weather is  good',
      listItemTitle: '', 
      listItemIndex: ''
    };
  };
  addButtonItem = () => {
    this.setState( (prev) => ({ ...prev,list: prev.list.concat(this.state.listItemTitle)}) );
  };
  removeListItem = (index) => {
    let listItems = this.state.list
    listItems.splice(index, 1);
    this.setState({list : listItems});
  };
  onChangeHandle = (payload) => {
    this.setState({ listItemTitle: payload});
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.bla lba
        </p>
        <p>{this.state.weather}</p>
          {/* {
            this.state.list.map((btn, key) => (
              <Button buttonTitle={btn} key={btn+key}/>)
            )
          } */}
          <Input onChangeValue={this.onChangeHandle} inputValue={this.state.listItemTitle} />
          <button onClick={this.addButtonItem}>add</button>
        <p>{this.state.listItemTitle}</p>
        {
          this.state.listItemTitle === '20' && 
            <Button buttonTitle='twenty' />
        }
        <List listTitle={this.state.list} click={this.removeListItem}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  };
}

export default App;

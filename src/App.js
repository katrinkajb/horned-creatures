import './App.css';
import React, { Component } from 'react';
import imageArray from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';


export default class App extends Component {
  state = {
    title: '',
    horns: '',
    description: '',
    keyword: '',
    url: '',
  }

  // // Handler
  handleNumberOfHorns = (e) => {
    this.setState({
      horns: e.target.value
    });
  }

  render() {

    return (
      <>
        <Header />
        <form>
          Filter by Number of Horns
          <select value={this.state.horns} onChange={this.handleNumberOfHorns}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            </select>
        </form>
        <div>
          Number of Horns: {this.state.horns}
          <ul className='list'>
          <ImageList imageArray={imageArray} />
          </ul>
        </div>
      </>    
    )
  }
}

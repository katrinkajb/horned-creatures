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

  // // Handler NOT WORKING!
  handleNumberOfHorns = (e) => {
    this.setState({
      horns: e.target.value
    });
  }

  render() {
    const filteredImages = imageArray.filter((ImageItem) => {
      // if statements for if horns = 1 do this, if horns = 2 do this, etc
      if (!this.props.horns) return true;
      if (ImageItem.horns === Number(this.state.horns)) return true;
      return false;
    });

    return (
      <div>
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
          <ImageList imageArray={filteredImages} />
          </ul>
        </div>
      </div>    
    )
  }
}

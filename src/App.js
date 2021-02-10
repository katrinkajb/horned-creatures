import './App.css';
import React, { Component } from 'react';
import imageArray from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import Dropdown from './dropdown.js';


export default class App extends Component {
  state = {
    horns: '',
    keyword: '',
  }

  handleHornsChange = (e) => {
    this.setState({
      horns: e.target.value
    });
  }

  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  render() {
    const filteredImages = imageArray.filter((ImageItem) => {
      // if statements for if horns = 1 do this, if horns = 2 do this, etc
      if (!this.state.horns && !this.state.keyword) return true;

      if (this.state.horns && !this.state.keyword) {
        if (ImageItem.horns === Number(this.state.horns)) return true;
      }

      if (!this.state.horns && this.state.keyword) {
        if (ImageItem.keyword === this.state.keyword) return true;
      }

      if (this.state.horns && this.state.keyword) {
        if (ImageItem.horns === Number(this.state.horns) && ImageItem.keyword === this.state.keyword) return true;
      }

      return false;
    });

    return (
      <>
        <Header />
        <div className='form'>
          Filter by Number of Horns 
          <Dropdown 
            currentValue={this.state.horns}
            handleChange={this.handleHornsChange}
            options={[1, 2, 3, 100]}
          />
        </div>
        <div className='form'>
          Filter by Keyword 
          <Dropdown 
            currentValue={this.state.keyword}
            handleChange={this.handleKeywordChange}
            options={['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']}
          />
        </div>
        <div>
          <ul className='list'>
            <ImageList imageArray={filteredImages} />
          </ul>
        </div>
      </>    
    )
  }
}

import './App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import imageArray from './data.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImageList ImageItemProp={imageArray} />
      </div>
    )
  }
}

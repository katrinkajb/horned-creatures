import React, {Component} from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        const imageList = this.props.images.map(
            image => <ImageItem image= {image.title}/>
        )
        return (
            <ul>{imageList}</ul>
        )
    }
}
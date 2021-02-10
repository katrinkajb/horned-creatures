import React, {Component} from 'react';
import ImageItem from './ImageItem.js';



export default class ImageList extends Component {
    render() {
        
        
        const imageList = this.props.imageArray.map(
            image => <ImageItem 
                key={image.title}
                image={image}/>
        )
        return (
            <ul className='list'>{imageList}</ul>
        )
    }
}

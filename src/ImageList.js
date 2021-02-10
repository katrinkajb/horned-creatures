import React, {Component} from 'react';
import ImageItem from './ImageItem.js';



export default class ImageList extends Component {
    render() {
        const filteredImages = this.props.imageArray.filter((ImageItem) => {
            // if statements for if horns = 1 do this, if horns = 2 do this, etc
            if (!this.props.horns) return true;
            if (ImageItem.horns === this.state.horns) return true;
            return false;
          });
        
          console.log(filteredImages);

        const imageList = this.props.imageArray.map(
            image => <ImageItem image={image}/>
        )
        return (
            <ul>{imageList}</ul>
        )
    }
}

import React, { Component } from 'react'


export default class ImageItem extends Component {
    render() {
        return (
            <li><img alt={this.props.image.description} src={this.props.image.url} className='list-pic'/>
                {/* {this.props.image.title}
                {this.props.image.keyword} */}
            </li>
        )
    }
}

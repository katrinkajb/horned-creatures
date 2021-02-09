import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            (<li><img alt='horned creature' />{this.props.image.title}</li>)
        )
    }
}

import React, { Component } from 'react';
import './rating.scss';

class Rating extends Component {
    constructor(props) {
        super(props);
    }

    starRange = size => {
        const result = new Array(size)
    
        for (let i = 0; i < size; i++) {
            result[i] = i + 1
        }
    
        return result
    }
    render(){
        return(
            <div className='star-rating-input'>
                {this.starRange(this.props.value).map(i => <Star key={i} />)}
            </div>
        )
    }
}

function Star() {
    return (
        <div className='star-rating-star-container'>
            <a
                className={`star-rating-star on`}
                href=''
                onClick={(e) => { e.preventDefault() }} />
        </div>
    )
}

export default Rating;
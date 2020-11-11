import React from 'react'
import './box.css';

class Squares extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             squareIndex: this.props.index
        }
    }
    render() {
        const divStyle = {
            backgroundColor: this.props.colors
        };
        return (
            <div>
                <div className="box" style={divStyle}>{this.state.squareIndex}</div>
            </div>
        )
    }
}
 
export default Squares


import React from "react";

class ToolTip extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            opacity: false
        }
        this.handler = this.handler.bind(this)
    }

    handler() {
        const elem = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: elem.offsetTop,
            left: elem.offsetLeft
        })
    }

    render() {
        let style = {
            zIndex: (this.state.opacity) ? 1000: -1000,
            opacity: +this.state.opacity,
            position: "absolute",
            top: (this.state.top || 0) +20,
            left: (this.state.left || 0)
        }

        return(
            <div style={{display: "inline"}}>
                <span onMouseEnter={this.handler} onMouseOut={this.handler}>{this.props.children}</span>
                <span style={style}>
                    {this.props.text}
                </span>
            </div>
        )
    }
}

export default ToolTip
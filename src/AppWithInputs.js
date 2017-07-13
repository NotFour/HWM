import React from "react"

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {number: 0, lastSearch: ''}
        this.handlerState = this.handlerState.bind(this)
    }

    handlerState(filterText, lastSearch) {
        this.setState({number: filterText, lastSearch: lastSearch})
    }

    render() {
        let massSearch = METRICS.map((search)=><Search name = {search} number = {this.state.number} lastSearch = {this.state.lastSearch} handler = {this.handlerState}/>)
        return(
            <div>
                {massSearch}
            </div>
        )
    }
}

const METRICS = ['Other metrics', 'Farengheit', 'Other metrics', 'Celsium']

function temperature(number, name) {
    switch(name) {
        case 'Farengheit': return number/10;
        case 'Celsium': return number/5;
        default: return number;
    }
}

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.outText = ''
    }

    onChange() {
        this.props.handler(this.outText.value, this.props.name)
    }

    setText(number, name, lastSearch) {
        if (name === lastSearch) {
            return number
        }
        else {
            return temperature(number, name)
        }
    }

    render() {
        return(
            <input type="number" value = {this.setText(this.props.number, this.props.name, this.props.lastSearch)} onChange = {this.onChange} ref={(input)=>this.outText = input}/>
        )
    }
}

export default App
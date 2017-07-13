import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            expLast: {
                "Осталось опыта": 0
            },
            skillNow: {
                "Умений сейчас": 0
            },
            pumping: {
                "Перекач": 0
            },
            battleKinds: {
                "Видов боев": 0
            },
            question: 0
        }
        this.handlerButton = this.handlerButton.bind(this)
    }

    handlerButton() {
        this.state.question++
    }

    handlerInput(value) {
        let mass = Object.assign(this.state)
        mass[mass.question] = value
        this.setState(mass)
    }

    render() {
        let label = <LabelQ>{this.state[this.state.question]} введите</LabelQ>
        return(
            <div>
                {label}
                <InputQ value={this.state[this.state.question]} handlerInput={this.handlerInput}/>
                <ButtonQ handler={this.handlerButton}/>
            </div>
        )
    }
}

class LabelQ extends React.Component {

    render() {
        return(
            <label>{this.props.children}</label>
        )
    }
}

class InputQ extends React.Component {

    constructor(props) {
        super(props)
        this.input = null
        this.handler = this.handler.bind(this)
    }

    handler() {
        return this.props.handlerInput(this.input.value)
    }

    render() {
        return(
            <input type="number" value={this.props.value} onChange={this.handler} ref={(input)=>this.input = input}/>
        )
    }
}

class ButtonQ extends React.Component {

    render() {
        return(
            <button onClick={this.handler}>Далее</button>
        )
    }
}

export default App
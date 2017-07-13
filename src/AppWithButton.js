import React from "react";


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {clicked: 0}
        this.buttonHandler = this.buttonHandler.bind(this)
    }

    buttonHandler() {
        this.setState({clicked: ++this.state.clicked})
    }

    checkClicks() {
        if(this.state.clicked>10) {
            return (
                <span>Да хватит уже!</span>
            )
        }
        return (
            <div>
                <MyButton handler = {this.buttonHandler}/>
                <span>Кликнули уже {this.state.clicked} раз!!</span>
            </div>
        )
    }

    render() {
        let content = this.checkClicks()
        return(
            content
        )
    }
}

class MyButton extends React.Component {

    render() {
        return(
            <button onClick= {this.props.handler}>не кликать</button>
        )
    }
}

export default App

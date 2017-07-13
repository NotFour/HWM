import React from 'react'

function Time(props) {

    return(
        <h2>Текущее время: {props.date.toLocaleTimeString()}</h2>
    )
}

function GreatingUser(props) {

    return (
      <h1>Добро пожаловать, {props.name}</h1>
    )
}

function GreatingGuest() {

    return (
        <h1>Вы не вошли в аккаунт{}</h1>
    )
}

function Greatings(props){

    if(props.isLogged) {
        return <GreatingUser name={props.name}/>
    }

    return (
        <GreatingGuest/>
    )
}

class List extends React.Component {

    constructor(props) {
        super(props)
        this.list = this.props.numbers.map((number)=><li>{number}</li>)
    }

    render() {
        if(this.props.isLogged) {
            return(
                <div>
                    <span>Предполагаемый список друзей:</span>
                    <ul>{this.list}</ul>
                </div>
            )
        } else {
            return(
                <div>
                    <span>Авторизируйтесь чтобы увидеть список друзей</span>
                </div>
            )
        }
    }
}

const listNames = ['marado', 'dipper', 'petya', 'katya', 'vova']

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {isLogged: false, name: '', date: new Date()}
        this.buttonOnClick = this.buttonOnClick.bind(this)
        this.buttonOffClick = this.buttonOffClick.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    buttonOnClick() {
        let name = prompt('Введите ваше имя', '')
        this.setState({isLogged: true, name})
    }

    buttonOffClick() {
        this.setState({isLogged: false})
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        const isLogged = this.state.isLogged
        let button = null
        let time = null
        if(isLogged) {
            time = <Time date = {this.state.date}/>
            button = <button onClick={this.buttonOffClick}>Выйти</button>
        } else {
            button = <button onClick={this.buttonOnClick}>Войти</button>
        }
        return(
            <div>
                <Greatings isLogged = {isLogged} name={this.state.name}/>
                <List isLogged = {isLogged} numbers = {listNames}/>
                {time}
                {button}
            </div>
        )
    }
}

export default App
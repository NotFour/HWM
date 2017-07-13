import React from "react";

class TimerApp extends React.Component {

    constructor(props) {
        super(props)
        this.handlerTimer = this.handlerTimer.bind(this)
        this.state = {
            timer: null,
            timeLeft: null
        }
    }

    handlerTimer(timeLeft) {
        clearInterval(this.state.timer)
        let timer = setInterval(()=>{
            let timeLeft = this.state.timeLeft-1
            if(timeLeft===0) {
                clearInterval(timer)
            }
            this.setState({timeLeft: timeLeft})
        },1000)
        return(
            this.setState({timeLeft: timeLeft, timer: timer})
        )
    }
    render() {
        return(
            <div>
                <div>Установить таймер на</div>
                <TimerButton time="5" handlerTimer={this.handlerTimer}/>
                <TimerButton time="10" handlerTimer={this.handlerTimer}/>
                <TimerButton time="15" handlerTimer={this.handlerTimer}/>
                <TimerDisplay timeLeft={this.state.timeLeft}/>
            </div>
        )
    }
}

class TimerButton extends React.Component {

    handler() {
        return this.props.handlerTimer(this.props.time)
    }
    render() {
        return(
            <button onClick={this.handler.bind(this)}>{this.props.time} секунд</button>
        )
    }
}

class TimerDisplay extends React.Component {

    render() {

        if (this.props.timeLeft===0){
            return(
                <span>Время вышло!</span>
            )
        }
        if(this.props.timeLeft===null) {
            return (
                <div/>
            )
        }
        return(
            <span>До конца таймера осталось {this.props.timeLeft}</span>
        )
    }
}
export default TimerApp
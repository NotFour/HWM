import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.changeInputKnowLanguages = this.changeInputKnowLanguages.bind(this)
        this.changeInputMarks = this.changeInputMarks.bind(this)
        this.state = {
            languages: {
                cpp: false,
                sharp: false,
                java: false,
                pascal: false
            },
            marks: {
                cpp: null,
                sharp: null,
                java: null,
                pascal: null
            }
        }
    }

    changeInputKnowLanguages(event) {
        let langs = Object.assign(this.state.marks)
        langs[event.target.value] = event.target.checked
        this.setState({languages: langs})
    }

    changeInputMarks(event) {
        let marks = Object.assign(this.state.marks)
        marks[event.target.name] = event.target.value
        this.setState({marks: marks})
    }

    render() {
        let marks = null
        for(let i=0;i<this.state.languages;i++) {
            if(this.state.languages[i]) {
                marks+=<input type="number" name={this.state.languages[i].Component} value={this.state.marks[i]} onChange={this.changeInputMarks}/>
            }
        }
        return(
            <div>
                <form>
                    <input type="checkbox" value="cpp" checked={this.state.languages.cpp} onChange={this.changeInputKnowLanguages}/>
                    <input type="checkbox" value="sharp" checked={this.state.languages.sharp} onChange={this.changeInputKnowLanguages}/>
                    <input type="checkbox" value="java" checked={this.state.languages.java} onChange={this.changeInputKnowLanguages}/>
                    <input type="checkbox" value="pascal" checked={this.state.languages.pascal} onChange={this.changeInputKnowLanguages}/>
                </form>
                <form>
                    {marks}
                </form>
            </div>
        )
    }
}
export default App
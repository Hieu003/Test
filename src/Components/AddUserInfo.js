import React from "react";


class AddUserInfo extends React.Component {

    state = {
        name: "",
        address: "Ninh Binh",
        age: ""
    };



    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.handleAddUserInfo({
            id: Math.floor(Math.random() * 100) + 1 + "-random",
            name: this.state.name,
            age: this.state.age
        })
    }

    render() {
        return (
            <div>
                Hello my name is {this.state.name} and im {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <span>Your name: </span>
                    <input value={this.state.name} type="text" onChange={(event) => { this.handleOnChangeInput(event) }}></input>
                    <span>Your Age: </span>
                    <input type="text" onChange={(event) => { this.handleOnChangeAge(event) }}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfo
import React from "react";


class UserInfo extends React.Component {

    state = {
        name: "Hieu",
        address: "Ninh Binh",
        age: "22"
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
    }

    render() {
        return (
            <div>
                Hello my name is {this.state.name} and im {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input value={this.state.name} type="text" onChange={(event) => { this.handleOnChangeInput(event) }}></input>
                    <button>Submit</button>
                </form>

                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input type="text" onChange={(event) => { this.handleOnChangeAge(event) }}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo
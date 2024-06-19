import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Hiesu", age: "22" },
            { id: 2, name: "Sekiro", age: "23" },
            { id: 3, name: "Paul", age: "24" }
        ]
    }

    handleAddUserInfo = (userObj) => {
        console.log("check data: ", userObj)

        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    render() {
        return (
            <div>
                <AddUserInfo handleAddUserInfo={this.handleAddUserInfo}></AddUserInfo>
                <DisplayInfo listUser={this.state.listUser}></DisplayInfo>
            </div >
        )
    }
}

export default MyComponent
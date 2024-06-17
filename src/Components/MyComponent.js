import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Hiesu", age: "22" },
            { id: 2, name: "Sekiro", age: "23" },
            { id: 3, name: "Paul", age: "24" }
        ]
    }

    render() {
        return (
            <div>
                <UserInfo></UserInfo>
                <DisplayInfo listUser={this.state.listUser}></DisplayInfo>
            </div >
        )
    }
}

export default MyComponent
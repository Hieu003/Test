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

    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUser: listUserClone
        })
    }

    render() {
        return (
            <>
                <div className="a">
                    <AddUserInfo handleAddUserInfo={this.handleAddUserInfo}></AddUserInfo>
                    <DisplayInfo listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    ></DisplayInfo>
                </div >

                <div className="b">

                </div>
            </>



        )
    }
}

export default MyComponent
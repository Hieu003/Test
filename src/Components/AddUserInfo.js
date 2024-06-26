import React, { useState } from "react";


// class AddUserInfo extends React.Component {

//     state = {
//         name: "",
//         address: "Ninh Binh",
//         age: ""
//     };



//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }


//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state)
//         this.props.handleAddUserInfo({
//             id: Math.floor(Math.random() * 100) + 1 + "-random",
//             name: this.state.name,
//             age: this.state.age
//         })
//     }

//     render() {
//         return (
//             <div>
//                 Hello my name is {this.state.name} and im {this.state.age}
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <span>Your name: </span>
//                     <input value={this.state.name} type="text" onChange={(event) => { this.handleOnChangeInput(event) }}></input>
//                     <span>Your Age: </span>
//                     <input type="text" onChange={(event) => { this.handleOnChangeAge(event) }}></input>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }


const AddUserInfo = (props) => {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("Ninh Binh")
    const [age, setAge] = useState("")

    //     state = {
    //         name: "",
    //         address: "Ninh Binh",
    //         age: ""
    //     };



    const handleOnChangeInput = (event) => {
        setName(event.target.value)

    }


    const handleOnChangeAge = (event) => {

        setAge(event.target.value)

    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddUserInfo({
            id: Math.floor(Math.random() * 100) + 1 + "-random",
            name: name,
            age: age
        })
    }

    return (
        <div>
            Hello my name is {name} and im {age}
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <span>Your name: </span>
                <input value={name} type="text" onChange={(event) => { handleOnChangeInput(event) }}></input>
                <span>Your Age: </span>
                <input type="text" onChange={(event) => { handleOnChangeAge(event) }}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo
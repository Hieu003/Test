import React from "react";
import "./DisplayInfo.scss"
import logo from "./../logo.svg"

// class DisplayInfo extends React.Component {




//     // render() {
//     //     const { listUser } = this.props
//     //     return (
//     //         <div className="display-infor-container">

//     //             {true &&
//     //                 <>
//     //                     {listUser.map((user, index) => {
//     //                         return (
//     //                             <div key={user.id} className={+user.age > 23 ? "green" : "red"}>
//     //                                 <div >
//     //                                     My name is {user.name}
//     //                                     <br></br>
//     //                                     My age is {user.age}
//     //                                     <hr></hr>
//     //                                 </div>
//     //                                 <div>
//     //                                     <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//     //                                 </div>
//     //                             </div>
//     //                         )

//     //                     })}

//     //                 </>
//     //             }
//     //         </div>
//     //     )
//     // }

// }

const DisplayInfo = (props) => {

    const { listUser } = props

    return (
        <div className="display-infor-container">

            {true &&
                <>
                    {listUser.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 23 ? "green" : "red"}>
                                <div >
                                    My name is {user.name}
                                    <br></br>
                                    My age is {user.age}
                                    <hr></hr>
                                </div>
                                <div>
                                    <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                </div>
                            </div>
                        )

                    })}

                </>
            }
        </div>
    )
}


export default DisplayInfo
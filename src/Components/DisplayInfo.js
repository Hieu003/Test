import React, { useState } from "react";
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

    const { listUser } = props;

    const [isShowHide, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHide)

    }

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => { handleShowHideListUser() }}>
                    {isShowHide === true ? "Hide list user" : "Show List User"}
                </span>
            </div>

            {isShowHide &&
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
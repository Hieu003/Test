import React from "react";

class DisplayInfo extends React.Component {

    state = {
        isShowList: true
    }

    handleHideShow = () => {
        this.setState({
            isShowList: !this.state.isShowList
        })
    }


    render() {
        const { listUser } = this.props
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleHideShow() }}>
                        {this.state.isShowList === true ? "Hide List User: " : "Show List User"}
                    </span>
                </div>
                {this.state.isShowList &&
                    <div>
                        {listUser.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 23 ? "green" : "red"}>
                                    <div >
                                        My name is {user.name}
                                        <br></br>
                                        My age is {user.age}
                                        <hr></hr>
                                    </div>
                                </div>
                            )

                        })}

                    </div>
                }
            </div>

            // <div>
            //     <div>My name is {name} </div>
            //     <div>My age is {age} </div>
            //     <hr></hr>
            //     <div>My name is {name} </div>
            //     <div>My age is {age} </div>
            //     <hr></hr>
            //     <div>My name is {name} </div>
            //     <div>My age is {age} </div>
            //     <hr></hr>
            // </div>
        )
    }
}

export default DisplayInfo
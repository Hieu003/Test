import React from "react";




class MyComponent extends React.Component {

    state = {
        name: "Hieu",
        address: "Ninh Binh"
    };

    render() {
        return (
            <div> Hello my name is {this.state.name} and im from {this.state.address}
            </div>
        )
    }
}

export default MyComponent
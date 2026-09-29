import React from "react";
export default class MainCard extends React.Component {

    componentDidMount = () => {
        console.log("MainCard props", this.props);
    }

    render() {
        return <>
        
        <div className="card" id={this.props.cardstyle}>
            <div className="card-title">{this.props.title}</div>
            <div className="card-content">{this.props.content}</div>
        </div>
        
        </>
    }
}
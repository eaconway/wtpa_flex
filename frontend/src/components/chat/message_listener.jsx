import React from 'react';
// import io from 'socket.io';

class MessageListener extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
    }
    componentDidMount(){
        window.socket.on('chat message', function (msg) {
            // $('#messages').append($('<li>').text(msg));
            console.log(<li>{msg}</li>);
        });
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default MessageListener;
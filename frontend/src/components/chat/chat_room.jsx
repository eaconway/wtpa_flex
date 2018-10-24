import React from 'react';
// import io from 

class ChatRoom extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: '',
            messages: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.partyId);
    }

    componentDidMount() {
        window.socket.on('chat message', msg => {
            console.log(msg)
            let messages = this.state.messages;
            messages.push(<li>{msg}</li>);
            this.setState({messages});
        });
    }

    update(field){
        return e => this.setState({ message: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        let backendPayload = {
            body: this.state.message,
            partyId: this.props.partyId,
            user: this.props.currentUser.id
        }
        window.socket.emit('chat message', backendPayload);
        this.setState({message: ''})
    }
    render(){
        return (
            <div className='chat-room-section'>
                <ul id="messages">
                    {this.state.messages}
                </ul>
                <form className='chat-room' onSubmit={this.handleSubmit}>
                    <input autoComplete="off" value={this.state.message}
                        onChange={this.update('message')}/><button>Send</button>
                </form>
            </div>
        )
    }
}

export default ChatRoom;
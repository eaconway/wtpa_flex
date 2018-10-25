import React from 'react';
import * as ReactDOM from "react-dom";

class ChatRoom extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: '',
            messages: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.registerListeners = this.registerListeners.bind(this);
        this.update = this.update.bind(this);
        this.registerListeners();
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    componentDidMount() {
        window.socket.emit("seed chat", this.props.partyId);
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        const { messages } = this.refs;
        const scrollHeight = messages.scrollHeight;
        const height = messages.clientHeight;
        const maxScrollTop = scrollHeight - height;
        ReactDOM.findDOMNode(messages).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    registerListeners(){
        
        window.socket.on('seed chat', prevMessages => {
            this.setState({ messages: prevMessages });
        });

        window.socket.on('chat message', curr => {
            let messages = this.state.messages;

            messages.push(curr);
            this.setState({ messages });
        });
    }

    update(field){
        return e => this.setState({ [field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        // const formData = new FormData();

        // if (this.state.imageFile) {
        //     formData.append('message[image]', this.state.imageFile);
        // }

        // formData.append('body', this.state.body);
        // formData.append('partyId', this.props.partyId);
        // formData.append("userId", this.props.currentUser.id);

        let backendPayload = {
            body: this.state.body,
            partyId: this.props.partyId,
            userId: this.props.currentUser.id
        }

        // debugger
        // window.socket.emit('chat message', formData);
        window.socket.emit("chat message", backendPayload);
        this.setState({message: ''});
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ imageFile: file, imageUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render(){
        let messages = this.state.messages.map(message => (
          <li className="chat-message">
            <span className='chat-name'>{message.name}</span>: {message.msg}
          </li>
        ));

        console.log(this.state.messages);
        return <div className="chat-room-section">
            <h1>Chat The Party</h1>
            <ul id="messages" ref="messages">
              {messages}
            </ul>
            <form className="chat-room" onSubmit={this.handleSubmit}>
              <input autoComplete="off" value={this.state.body} onChange={this.update("body")} 
              placeholder="Enter Text" className='chat-message-input'/>
              <button>
                <i className="far fa-envelope chat-send-icon" />
              </button>
              <div className='chat-file-wrapper'>
                    <i className="fas fa-paperclip chat-file-icon"/>
                    <input type="file" onChange={this.handleFile} className='chat-file-input' 
                    placeholder=''/>
              </div>
            </form>
          </div>;
    }
}

export default ChatRoom;
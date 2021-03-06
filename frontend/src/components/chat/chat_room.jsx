import React from 'react';
import * as ReactDOM from "react-dom";
import './chat.css';
// import SocketIOFileUpload from "socketio-file-upload";

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
        this.handleFile = this.handleFile.bind(this);
        
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

            if (curr.partyId === this.props.partyId){
                messages.unshift(curr);
                console.log('curr is about to be added', curr)
                this.setState({ messages });
            } 
        });

        // window.uploader.listenOnInput(document.getElementById("siofu_input"));

        window.uploader.addEventListener("complete", function (event) {
            console.log(event.success);
            console.log(event.file);
        });
    }

    update(field){
        return e => this.setState({ [field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        if (this.state.imageFile) {
            window.uploader.submitFiles([this.state.imageFile])
        }

        let backendPayload = {
            body: this.state.body,
            partyId: this.props.partyId,
            userId: this.props.currentUserId
        }

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
        let messages = this.state.messages.slice().reverse().map(message => (
          <li className="chat-message">
            <span className='chat-name'>{message.name}</span>: {message.msg}
          </li>
        ));

        const preview = this.state.imageUrl ? (
            <div>
                <img className={'image-upload-preview'} src={this.state.imageUrl} />
            </div>
        ) : (
            <textarea autoComplete="off" value={this.state.body}
            onChange={this.update("body")} placeholder="Enter Text"
            className="chat-message-input"></textarea>
        );

        console.log(this.state.messages);
        return (
        <div>
        <div className="chat-room-section">
            <ul id="messages" ref="messages">
              {messages}
            </ul>
            <form className="chat-room" onSubmit={this.handleSubmit}>
                <div className='chat-room-input-field'>
                    { preview }
                </div>
                <div>
                    <button>CHAT</button>
                </div>
                
              <div className="chat-file-wrapper">
                <i className="fas fa-paperclip chat-file-icon" />
                <input type="file" id="siofu_input" onChange={this.handleFile} 
                    className="chat-file-input" placeholder="" />
              </div>
            </form>
          </div>
        </div>
        );
    }
}

export default ChatRoom;
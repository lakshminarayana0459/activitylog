import React from 'react';
import Compose from './Compose';

const message = [{'id':1, msg : 'hi', from : '', to : ''}, {'id':2, msg : 'hello', from : '', to : ''}]
class RightPanel extends React.Component {
    rendermessage = (message)  => {return <MessageItem message={message}/>}
    render(){
        return(
            <div className='rightflexed'>
                 {message.map((m) => this.rendermessage(m))}
                 <Compose />
            </div>
        )
    }
}

export default RightPanel;


const MessageItem = ({message}) => {
    return <p>{message.id}</p>
  }
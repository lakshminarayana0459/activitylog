import React from 'react';

const users = [ 'user 1', 'user 2']

class LeftPanel extends React.Component {

    renderuser = (user)  => <UserItem user={user}/>
    render(){
        return(
            <div>
                {users.map((u) => this.renderuser(u))}
            </div>
        )
    }
}

const UserItem = ({user}) => {
  return <p>{user}</p>
}

export default LeftPanel;
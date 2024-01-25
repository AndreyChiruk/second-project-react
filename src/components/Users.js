import React from 'react';
import User from './User';

class Users extends React.Component{
    render(){
        return(
            <div>
                {this.props.user.map((el) => (<User name={el.name} isCame={el.isCame}/>))}
            </div>
        )
    }
}

export default Users;
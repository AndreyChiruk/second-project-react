import React from 'react';

class User extends React.Component{
    render(){
        return(
            <div className="userBlock">
                <h3>{this.props.name}</h3>
                <p>{this.props.isCame ? "Присутствует" : "Отсутствует"}</p>
            </div>
        )
    }
}
export default User;
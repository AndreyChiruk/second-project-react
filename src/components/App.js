import React from 'react';
import Users from './Users';
import AddUser from './AddUser';
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: [
                {
                    id: 1,
                    name: "Andrey",
                    isCame: true,
                },
                {
                    id: 2,
                    name: "Nikita",
                    isCame: false,
                },
                {
                    id: 3,
                    name: "Vlad",
                    isCame: false,
                },
                {
                    id: 4,
                    name: "Oleg",
                    isCame: true,
                }
            ]
        }

        this.addUser = this.addUser.bind(this);
    }
    render(){
        return(
            <div className="block">
                <div className="header">
                    <h1>Список людей на мероприятии</h1>
                </div>
                <AddUser onAdd={this.addUser}/>
                <Users user={this.state.user}/>
            </div>
        )
    }
    addUser(user){
        const id = this.state.user.length + 1;
        this.setState({ user: [...this.state.user, { id, ...user }] });
    }
}

export default App;
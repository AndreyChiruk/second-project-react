import React from 'react';

class AddUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: 1,
            name: "",
            isCame: false,
        }
    }
    render(){
        return(
            <form>
                <input placeholder='Имя: ' onChange={(e)=>this.setState({name: e.target.value})}/>
                <label className="labelForm" htmlFor="isCame">Присутствует ?<input className="labelCheckbox" type="checkbox" id="isCame" onChange={(e)=>this.setState({isCame: e.target.checked})} /></label>
                <button type="button" onClick={() => this.props.onAdd({
                    name: this.state.name,
                    isCame: this.state.isCame,
                })}
                >Отметить</button>
            </form>
        )
    }
}

export default AddUser;
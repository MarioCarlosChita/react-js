import React ,{Component} from "react";

interface MenuProps{
    name?:string
}

interface MenuState{
  
}

class Menu extends React.Component<MenuProps ,MenuState>{ 
   
    render(){
        return ( 
            <h1>{this.props.name}</h1>
        )
    }
}
export default Menu;
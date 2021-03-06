import React from "react";
import {Link} from "react-router";
import {Accounts} from "meteor/accounts-base"

export default class Signup extends React.Component{
    constructor(props){
        super(props);//Estamos sobrecargando el constructor. Por eso ejecutamos super. Solo podemos usar super en el constructor
        this.state={
            error:""
        }
    }
    onSubmit(e){
        e.preventDefault();
        let email=this.refs.email.value.trim();
        let password=this.refs.password.value.trim();
        if (password.length<9){
            return this.setState({error:"La contraseña debe tener 9 carácteres o más"});
        }
        Accounts.createUser({email, password},(err)=>{
            if (err){
                this.setState({error:err.reason});
            }else{
                this.setState({error:""});
            }
        });
    }
    render(){
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Registro</h1>
                    {this.state.error?<p>{this.state.error}</p>:undefined}
                    <form onSubmit={this.onSubmit.bind(this)} noValidate>
                        <input type="email" ref="email" name="email" placeholder="e-mail"/>
                        <input type="password" ref="password" name="password" placeholder="Contraseña"/>
                        <button>Crear cuenta</button>
                    </form>
                    <Link to="/">Volver a login</Link>
                </div>
            </div>
        )
    }
}

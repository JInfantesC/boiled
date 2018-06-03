import React from "react";
import {Link} from "react-router"; //No es default por eso las llaves
import {Meteor} from "meteor/meteor";

import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";

export default class Login extends React.Component{
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

        Meteor.loginWithPassword({email},password,(err)=>{
            if (err){
                this.setState({error:"Credenciales incorrectas. Revise email y contraseña"});
            }else{
                this.setState({error:""});
            }
        });
    }
    render(){
        return (<div>
            <PublicHeader title="Dashboard"/>
            <div className="d-flex justify-content-center">
                <div className="card" style={{"marginTop": "10rem"}}>
                    <div className="card-header"><h1>Login</h1></div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this)} noValidate className="form-group">
                            <input type="email" ref="email" name="email" placeholder="e-mail" className="form-control"/>
                            <input type="password" ref="password" name="password" placeholder="Contraseña" className="form-control"/>
                            <button className="btn btn-success btn-block"><i className="fas fa-sign-in-alt"></i> Login</button>
                            {this.state.error?<p>{this.state.error}</p>:undefined}
                        </form>
                    </div>
                    <div className="card-footer">
                        <Link to="/signup">¿Tienes una cuenta?</Link>
                    </div>
                </div>
            </div>
            <PublicFooter/>
        </div>)
    }
}

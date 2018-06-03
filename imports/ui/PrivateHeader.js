import React from "react";
import {Accounts} from "meteor/accounts-base"

export default class PrivateHeader extends React.Component{
    onLogout(){
        Accounts.logout();
    }
    render(){
        return (
            <div className="page__header">
                <nav className="navbar navbar-expand-sm bg-light">
                    <a className="" href="#">
                        <img src="img/bird.jpg" alt="Logo" className="page__logo"></img>
                    </a>
                    {/* <!-- Toggler/collapsibe Button --> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navCollapse">
                        <span className="fas fa-bars"></span>
                    </button>
                    <div id="navCollapse" className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-users"></i> Link 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 2</a>
                            </li>
                            <li className="nav-item">

                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button onClick={this.onLogout.bind(this)} className="btn btn-danger align-right"><i className="fas fa-sign-out-alt"></i>Cerrar sesión</button>
                            </li>
                        </ul>
                    </div>


                </nav>
            </div>
        )
    }
}

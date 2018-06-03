import React from "react";
import {Accounts} from "meteor/accounts-base"

export default class PublicHeader extends React.Component{
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
                                <a className="nav-link" href="#"><i className="fas fa-question"></i> Need help?</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

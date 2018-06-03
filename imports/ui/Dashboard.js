import React from "react";
import PrivateHeader from "./PrivateHeader";
import PrivateFooter from "./PrivateFooter";
export default class Link extends React.Component {
    render() {
        return (<div className="">
            <PrivateHeader title="Dashboard"/>
            <div className="page-content">
                <div className="container bg-light">
                    <h1>My First Bootstrap Page <span className="badge badge-success">New</span></h1>
                    <div className="row">
                        <div className="col-3">1</div>
                        <div className="col-3">2</div>
                    </div>
                    <div className="row">
                        <div className="col-4">33</div>
                        <div className="col-4">44</div>
                        <div className="col-4">55</div>
                    </div>
                </div>
                <div className="container row">
                    <div className="col font-italic" >Una dola</div>
                    <div className="col font-weight-bold">tela catola</div>
                    <div className="col text-right font-weight-light">tarata tarara</div>
                    <div className="col text-center text-monospace">quina quinete</div>
                </div>
                <div className="container-fluid row">
                    <div className="col text-muted">muted</div>
                    <div className="col text-primary">texto primario en azul</div>
                    <div className="col text-secondary">Texto secundario en otro color</div>
                    <div className="col text-danger">peligro!</div>
                </div>
                <div className="container-fluid table-responsive">
                    <table className="table-striped table-bordered table-hover thead-light">
                        <thead className="">
                            <tr>
                                <th>Encabezado 1</th>
                                <th>Encabezado 2</th>
                                <th>Encabezado 3</th>
                                <th>Encabezado 1</th>
                                <th>Encabezado 2</th>
                                <th>Encabezado 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Celda 1</td>
                                <td>Celda 2</td>
                                <td>Celda 3</td>
                                <td>Celda 1</td>
                                <td>Celda 2</td>
                                <td>Celda 3</td>
                            </tr>
                            <tr className="table-success">
                                <td>Celda 1</td>
                                <td>Celda 2</td>
                                <td>Celda 3</td>
                                <td>Celda 1</td>
                                <td>Celda 2</td>
                                <td>Celda 3</td>
                            </tr>
                            <tr className="table-warning">
                                <td>Celda 1</td>
                                <td>Celda 2</td>
                                <td>Celda 3</td>
                                <td>Celda 1</td>
                                <td>Celda 2</td>
                                <td>Celda 3</td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </div>

                <div className="container">
                    <img src="img/sanfran.jpg" className="img-thumbnail mx-auto d-block "></img>
                </div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Bootstrap Tutorial</h1>
                        <p>Bootstrap is the most popular HTML, CSS...</p>
                    </div>

                </div>
                <div className="alert alert-success fade show">
                    <strong>Success!</strong> Indicates a successful or positive action.
                </div>
                <div className="alert alert-warning fade show">
                    <strong>Success!</strong> You should <a href="#" className="alert-link">read this message</a>.
                </div>
                <div className="alert alert-danger alert-dismissible fade show">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Success!</strong> Indicates a successful or positive action.
                </div>
                <div className="btn-group btn-group-lg">
                    <button type="button" className="btn btn-primary">Apple</button>
                    <button type="button" className="btn btn-primary">Samsung</button>
                    <button type="button" className="btn btn-primary">Sony <span className="badge badge-light">4</span></button>
                </div>
                <div className="container">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:"10%"}}></div>
                    </div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Photos</a></li>
                        <li className="breadcrumb-item"><a href="#">Summer 2017</a></li>
                        <li className="breadcrumb-item"><a href="#">Italy</a></li>
                        <li className="breadcrumb-item active">Rome</li>
                    </ul>
                </div>
                <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-success">Success item <span className="badge badge-success">New</span></li>
                        <li className="list-group-item list-group-item-secondary">Secondary item</li>
                        <li className="list-group-item list-group-item-info">Info item</li>
                        <li className="list-group-item list-group-item-warning">Warning item</li>
                        <li className="list-group-item list-group-item-danger">Danger item</li>
                        <li className="list-group-item list-group-item-primary">Primary item</li>
                        <li className="list-group-item list-group-item-dark">Dark item</li>
                        <li className="list-group-item list-group-item-light">Light item</li>
                    </ul>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="card-header">Header</div>
                        <div className="card-body">Content
                            <button data-toggle="collapse" data-target="#demo" className="btn btn-success">Collapsible</button>

                            <div id="demo" className="collapse">
                                Lorem ipsum dolor text....
                            </div>
                        </div>
                        <div className="card-footer">Footer</div>

                    </div>
                </div>
                <div className="container">
                    <div className="media border p-3">
                        <img src="img/sanfran.jpg" alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
                        <div className="media-body">
                            <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                </div>
            </div>
            <PrivateFooter/>
        </div>)
    }

}

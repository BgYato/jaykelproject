import React from "react";
import {Link} from "react-router-dom"

const Login = () => {
    return (<div className="login-box">
        <div className="login-logo">
            <Link to="#"><b>Iniciar</b> Seción</Link>
        </div>
        {/* /.login-logo */}
        <div className="card">
            <div className="card-body login-card-body">
                <p className="login-box-msg">Bienvendio ingrese credenciales</p>
                <form action="../../index3.html" method="post">
                    <div className="input-group mb-3">
                        <input type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        id = "email"
                        name = "email"/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope" />
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        id="password"
                        name="password"/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-lock" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    </div>
                
                <div className="social-auth-links text-center mb-3">
                    <button title="submit" className="btn btn-block btn-primary">
                        <i className="fab fa-facebook mr-2" /> Ingresar
                    </button>
                    <Link to="#" className="btn btn-block btn-danger">
                        <i className="fab fa-google-plus mr-2" /> Crear cuenta
                    </Link>
                </div>
                </form>
            </div>
            {/* /.login-card-body */}
        </div>
    </div>
    );
}

export default Login
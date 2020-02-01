import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registro: false
    }
  }


  registrar = () => {
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const correo = document.getElementById('correo').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const contraseñaRepite = document.getElementById('contraseñaRepite').value;

    if (nombreCompleto === '') {
      alert('Debes completar el campo Nombre de Usuario.');
    } else if (correo === '') {
      alert('Debes completar el campo Correo Electrónico.');
    } else if (nombreUsuario === '') {
      alert('Debes completar el campo Nombre de Usuario.');
    } else if (contraseña === '') {
      alert('Debes completar el campo contraseña.');
    } else if (contraseñaRepite === '') {
      alert('Debes completar el campo Repite la contraseña.');
    } else if (contraseña !== contraseñaRepite) {
      alert('Las contraseñas no coinciden. Vuelve a intentarlo.');
    } else {
      this.setState({
        registro: true,
        usuario: nombreCompleto
      })
    }
  }

  render () {
    if(this.state.registro)
      return(
        <div>
          <h3>Registro Satisfactorio.</h3>
          <p>Usuario : <b>{this.state.usuario}</b> registrado.</p>
        </div>
      );

    return (
      <div className="container login" style={{textAlign: 'center'}}>
        <h2>Registro de Usuario</h2>
        <form method="post" action="#" className="col-sm-12">

          <div className="form-group">
            <label className="control-label col-sm-2" style={{backgroundColor: '#7644'}}><span>Nombre Completo</span></label>
            <input id="nombreCompleto" className="form-control" type="text" placeholder="Nombre Completo de usuario"/>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" style={{backgroundColor: '#7644'}}><span>Correo Electrónico</span></label>
            <input id="correo" className="form-control" type="text" placeholder="Correo Electrónico"/>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" style={{backgroundColor: '#7644'}}><span>Nombre de Usuario</span></label>
            <input id="nombreUsuario" className="form-control" type="text" placeholder="Nombre de usuario"/>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" style={{backgroundColor: '#7644'}}><span>Contraseña</span></label>
            <input id="contraseña" className="form-control" type="password" placeholder="Contraseña"/>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" style={{backgroundColor: '#7644'}}><span>Repite la Contraseña</span></label>
            <input id="contraseñaRepite" className="form-control" type="password" placeholder="Repite la Contraseña"/>
          </div>
          <div className='btn-group pb-3'>
            <button type="button" class="btn btn-primary btn-lg btn-block login-button"
              onClick={this.registrar}>
              Registrar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

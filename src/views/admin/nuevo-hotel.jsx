import React, { Component } from 'react'

class NuevoHotel extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            HOTELES
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto"></div>
            <form className="form-inline my-2 my-lg-0">
              <span className="mr-3">Administrador</span>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Cerrar sesión
              </button>
            </form>
          </div>
        </nav>

        <div className="container w-50 card mt-3">
          <h1 className="text-center mt-2">
            <span className="badge badge-secondary">NUEVO HOTEL</span>
          </h1>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Nombre</label>
              <input type="text" class="form-control" name="name" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Precio (S/)</label>
              <input type="text" class="form-control" name="price" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Ciudad</label>
              <select class="form-control" name="city">
                <option value="">- Seleccione ciudad -</option>
                <option value="Lima">Lima</option>
                <option value="Cusco">Cusco</option>
                <option value="Arequipa">Arequipa</option>
                <option value="Ayacucho">Ayacucho</option>
                <option value="Ica">Ica</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Dirección</label>
              <input type="text" class="form-control" name="address" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Descripción</label>
              <textarea
                class="form-control"
                name="description"
                rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Url de Imagen</label>
              <input type="text" class="form-control" name="url_image" />
            </div>
            <div class="form-group text-center">
              <button type="button" class="btn btn-primary">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default NuevoHotel

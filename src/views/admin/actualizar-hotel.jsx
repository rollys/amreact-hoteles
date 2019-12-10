import React, { Component } from 'react'
import AdminLayout from '../layout/admin'

class ActualizarHotel extends Component {
  render() {
    return (
      <AdminLayout>
        <h1 className="text-center mt-2">
          <span className="badge badge-secondary">ACTUALIZAR HOTEL</span>
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
      </AdminLayout>
    )
  }
}

export default ActualizarHotel

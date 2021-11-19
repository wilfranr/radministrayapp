import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

function EstadoCuenta() {
  return (
    <div>
      <Header></Header>
      <div class="clasificados">
        <br></br>
        <h2>ESTADO DE CUENTA</h2>
        <div class="container mt-5">
          <div class="container bg-light text-center text-black-50">
            <p>Torres de Bellavista</p>
            <p>Torre 1 Apto 1601</p>
            <p>Propietario: Yoseth Rivera</p>
          </div>
          <table class="table bg-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Fecha (DD/MM/AA)</th>
                <th scope="col">Descripción</th>
                <th scope="col">Cargos</th>
                <th scope="col">Abonos</th>
                <th scope="col">Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>09/09/21</td>
                <td>Cobro Administración</td>
                <td>$76.000</td>
                <td>$228.000</td>
                <td>$0</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>09/09/21</td>
                <td>Cobro Administración</td>
                <td>$76.000</td>
                <td>$0</td>
                <td>$152.000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>09/09/21</td>
                <td>Cobro Administración</td>
                <td>$76.000</td>
                <td>$0</td>
                <td>$76.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default EstadoCuenta
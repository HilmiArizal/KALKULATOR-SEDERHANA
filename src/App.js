import React, { Component } from 'react';
import ButtonPerhitungan from './Pilihan/ButtonPerhitungan';
import { Route } from 'react-router-dom';
import Pertambahan from './Perhitungan/Pertambahan';
import Pengurangan from './Perhitungan/Pengurangan';
import Perkalian from './Perhitungan/Perkalian';
import Pembagian from './Perhitungan/Pembagian';
// import LoginRegister from './Pilihan/LoginRegister';

class App extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <ButtonPerhitungan/>
        {/* <LoginRegister/> */}
        <Route path='/pertambahan' component={Pertambahan}/>
        <Route path='/pengurangan' component={Pengurangan}/>
        <Route path='/perkalian' component={Perkalian}/>
        <Route path='/pembagian' component={Pembagian}/>
      </div>
    );
  }
}


export default App;

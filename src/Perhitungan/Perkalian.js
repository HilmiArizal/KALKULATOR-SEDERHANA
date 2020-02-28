import React, { Component } from 'react';

class Perkalian extends Component {
    state = {
        input1: 0,
        input2: 0,
        jumlah: null
    }

    onBtnClick = () => {
        var input1 = this.state.input1;
        var input2 = this.state.input2;
        if (input1 === 0 || input2 === 0) {
            alert('ISI DULU!')
        } else {
            var total = parseInt(input1) * parseInt(input2)
            this.setState({ jumlah: total })
        }
    }

    render() {
        return (
            <div>
                <center>
                    <h1>
                        SELAMAT DATANG DI KELAS PERKALIAN!
                    </h1>
                    <br />
                    <div> SILAHKAN MASUKAN ANGKA PERTAMA <br /> <input type='number' onChange={(e) => this.setState({ input1: e.target.value })}></input></div>
                    <h1>*</h1>
                    <div> SILAHKAN MASUKAN ANGKA KEDUA <br /> <input type='number' onChange={(e) => this.setState({ input2: e.target.value })}></input></div>
                    <br />
                    <button onClick={this.onBtnClick}>
                        LIHAT HASIL
                    </button>
                    <div>
                        {this.state.jumlah}
                    </div>
                </center>
            </div>
        );
    }
}

export default Perkalian;
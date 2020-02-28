import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonPerhitungan extends Component {
    state = {}
    render() {
        return (
            <div style={{ margin: '5%' }}>
                <center>
                    <div style={{ padding: '5%' }}>
                        <h3>
                            SILAHKAN PILIH!
                        </h3>
                    </div>
                    <Link to='pertambahan'>
                        <button> PERTAMBAHAN </button>
                    </Link>
                    <Link to='pengurangan'>
                        <button> PENGURANGAN </button>
                    </Link>
                    <Link to='perkalian'>
                        <button> PERKALIAN </button>
                    </Link>
                    <Link to='pembagian'>
                        <button> PEMBAGIAN </button>
                    </Link>
                </center>
            </div>
        );
    }
}

export default ButtonPerhitungan
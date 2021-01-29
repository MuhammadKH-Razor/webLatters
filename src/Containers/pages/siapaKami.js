import React from 'react';
import '../assets/style/homepage.css';
import firebase, {database} from '../config/firebase/fire';
import Swal from 'sweetalert2';

import logo10 from '../assets/images/images.jpg';
import logo11 from '../assets/images/undraw_messages1_9ah2 (1).svg';
import logo12 from '../assets/images/undraw_file_searching_duff.svg';
import logo13 from '../assets/images/cropped-logo-imporclub.png';
import logo14 from '../assets/images/undraw_faq_rjoy.svg';
import logo15 from '../assets/images/re-about-02.jpg';
import logo16 from '../assets/images/download.jpg';
import logo17 from '../assets/images/re-program-seminar-01 (1).jpg';
import logo18 from '../assets/images/re-program-tour-03.jpg';
import komunitas from '../assets/images/undraw_community_8nwl.svg';
import pendampingan from '../assets/images/undraw_group_hangout_5gmq.svg';
import konsultasi from '../assets/images/undraw_celebrating_bol5.svg';
import gathering from '../assets/images/undraw_team_ih79.svg';
import tour from '../assets/images/re-homepage-06.jpg';
import bni from '../assets/images/download-removebg-preview (1).png';


class SiapaKami extends React.Component {

    state = {
        name: '',
        transferKe: '',
        totalTransfer: '',
        waktuTransfer: '',
        foto: ''
      }

    valueChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }

      daftar = (e) => {
          e.preventDefault();
        const { order, name, totalTransfer, transferKe, waktuTransfer } = this.state;

        const cekKirim = database.ref('/payent/' + name).push({
            order: order,
            name: name,
            waktuTransfer: waktuTransfer,
            transferKe: transferKe,
            totalTransfer: totalTransfer,
        })
        this.props.history.push('/');
      }

      if(cekKirim) {
        const Toast = Swal.mixin({
            toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            
            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            })

            this.setState({
                name: '',
                transferKe: '',
                totalTransfer: '',
                waktuTransfer: '',
                foto: ''
            })
        }

    render() {

        const { name, transferKe, totalTransfer, waktuTransfer, foto } = this.state;
        const { valueChange , daftar } = this;
        console.log(this.state);

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light text-dark navs">
                    <div className="container-fluid">
                <a className="navbar-brand text-dark pl-4" href="#">
                    2020
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item d-flex text-white" data-toggle="modal" data-target="#staticBackdrop">
                        <i className="fas fa-pen-square"></i><a className="nav-link" href="#" >Kelas</a>
                    </li>
                    <li className="nav-item d-flex text-white">
                        <i className="fas fa-chalkboard-teacher"></i><a className="nav-link" href="#">Motivator</a>
                    </li>
                    <li className="nav-item d-flex text-white">
                        <i className="fas fa-clipboard-list"></i><a className="nav-link" href="#">Aktivitas</a>
                    </li>
                    <li className="nav-item d-flex text-white">
                        <a className="nav-link" href="#paketz">
                        <button className="btn btn bt-join animate__animated animate__repeat-2 animate__delay-1s"> 
                            Gabung seminar 
                        </button>
                    </a>
                    </li>
                    
                    </ul>
                </div>
                </div>

                <div className="jml-user">
                <i className="fas fa-user"></i>
                </div>

            </nav>

            <div className="WRAQP">

            <div className="limiter2">
                <h3 clasName="text-center mb-4">Transaksi pembayaran via rekening</h3>
                <form onSubmit={daftar}>
                    <div className="form-group text-center">
                        <label htmlFor="exampleInputEmail1">Order ID</label>
                        <input type="text" className="form-control" name="order" value={new Date().getTime()} id="exampleInputEmail1" onChange={valueChange}/>
                    </div>
                    <div className="form-group text-center">
                        <label htmlFor="exampleInputEmail1">Pemilik rekening</label>
                        <input type="text" className="form-control" name="name" value={name} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={valueChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Transfer ke</label>
                        <input type="text" className="form-control" name="transferKe" value="BNI - Yayang Dandi Purwana - 67533376262" id="exampleInputPassword1" onChange={valueChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Waktu transfer</label>
                        <input type="date" className="form-control" name="waktuTransfer" value={waktuTransfer} id="exampleInputPassword1" onChange={valueChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Jumlah transfer</label>
                        <input type="number" className="form-control" name="totalTransfer" value={totalTransfer} id="exampleInputPassword1" onChange={valueChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputalamat1">Bukti transfer</label>
                            <input type="file" name="foto" value={foto} className="form-control" />                    
                        </div>
                    <button type="submit" className="btn btn bt-reg">Kirim sekarang</button>
                </form>
            </div>

            <div className="bank">
                <img src={bni} />
            </div>

        </div>

        </div>
        )
    }
}

export default SiapaKami;
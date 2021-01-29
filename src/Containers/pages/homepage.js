import React from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import Template from '../template/completeTemplate/template';

import '../assets/style/homepage.css';
import logo1 from '../assets/images/undraw_Scrum_board_re_wk7v.svg';
import logo2 from '../assets/images/undraw_content_team_3epn.svg';
import logo3 from '../assets/images/undraw_work_together_h63l.svg';
import logo4 from '../assets/images/undraw_mobile_development_8gyo.svg';
import logo5 from '../assets/images/undraw_Credit_card_re_blml.svg';
import logo6 from '../assets/images/undraw_fill_forms_yltj.svg';
import logo7 from '../assets/images/undraw_discount_d4bd.svg';
import logo8 from '../assets/images/undraw_hiring_cyhs.svg';
import logo9 from '../assets/images/download.jpg';
import ydp from '../assets/images/download (6).jpg';
import kacamata from '../assets/images/undraw_live_collaboration_2r4y.svg';
import logo10 from '../assets/images/images.jpg';
import logo11 from '../assets/images/undraw_messages1_9ah2 (1).svg';
import logo12 from '../assets/images/undraw_file_searching_duff.svg';
import logo13 from '../assets/images/cropped-logo-imporclub.png';
import logo14 from '../assets/images/undraw_faq_rjoy.svg';
import logo15 from '../assets/images/re-about-02.jpg';
import logo16 from '../assets/images/download.jpg';
import logo17 from '../assets/images/re-program-seminar-01 (1).jpg';
import logo18 from '../assets/images/re-program-tour-03.jpg';
import komunitas from '../assets/images/networking.svg';
import pendampingan from '../assets/images/avatar.svg';
import konsultasi from '../assets/images/consult.svg';
import gathering from '../assets/images/friend.svg';
import tour from '../assets/images/undraw_files_6b3d.svg';
import gelombang1 from '../assets/images/gelombang2020.png';
import gelombang2 from '../assets/images/gelombang3.jpg';
import profile from '../assets/images/re-keunggulan-02.jpg';
import convert from '../assets/images/undraw_download_files_aydf.svg';
import user from '../assets/images/IMG_20201001_160106.jpg';
import ones from '../assets/images/images/gg/stock.svg'

import { connect } from 'react-redux';
import { register, addData, login } from '../config/redux/actions';



class Homepage extends React.Component {


  state = {
    files: '',
    name: '',
    email: '',
    password: '',
    alamat: '',
    nomer: '',
    scroll: '',
    komentator: '',
    isikomentar: '',
    fotokomentator: '',
    likekomentator: '',
    dislikekomentator: '',
    emailkomentator: '',
    kategori: 'komentar',
    akses: false,
    textButton: 'Login sekarang',
    uid: '',
    tokenLogin: false
  }

  componentDidMount = () => {

    const tokenz = JSON.parse(localStorage.getItem('loginData'));

    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 390) {
        const homes = document.getElementById('sec-template');
        homes.classList.add('sec-template-show')
      } else if (window.pageYOffset < 390) {
        const homes = document.getElementById('sec-template');
        homes.classList.remove('sec-template-show')
      }
    });

    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 2000 && window.innerWidth >= 900 && window.innerWidth <= 1400) {
        const homesz = document.getElementById('sec-5');
        homesz.classList.add('sec-5-show')
      } else if (window.pageYOffset < 2000 && window.innerWidth >= 900 && window.innerWidth <= 1400) {
        const homesz = document.getElementById('sec-5');
        homesz.classList.remove('sec-5-show')
      }
    });

  }

  valueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  valueChange2 = (e) => {
    this.setState({
      files: e.target.files[0]
    })
  }

  closed = () => {
    const interval = document.getElementById('interval');
    const close = document.getElementById('close');

    close.addEventListener('click', () => {
      interval.classList.toggle('closedz');
      close.classList.toggle('closedz2');
    })
  }

  daftar = (e) => {
    e.preventDefault();

    const { name, alamat, nomer, email, password, ktp } = this.state;
    const { registerCloud } = this.props;
    const dataUser = {
      nama: name,
      email: email,
      password: password,
      ktp: ktp,
      alamat: alamat,
      nomer: nomer,

    }

    if (dataUser && password.length >= 6) {

      emailjs.sendForm('12345', 'template_244i2y9', e.target, 'user_5bWKB6fhqsotVwLUSl0tP')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })

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

      registerCloud({ email, password, dataUser });
      this.setState({
        username: '',
        email: '',
        password: '',
        alamat: '',
        nomer: '',
        ktp: ''
      })

      window.location.reload();

    } else {
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
        icon: 'warning',
        title: 'Signed in failed'
      })
    }
  }

  pesan = (e) => {
    this.props.history.push('/payment');
    window.location.reload();
  }

  komentar = (e) => {
    const { komentarAdd } = this.props;
    const { komentator, isikomentar, emailkomentator, kategori } = this.state;
    komentarAdd({ komentator, emailkomentator, isikomentar, kategori });

  }

  login = async (e) => {
    e.preventDefault();

    const { loginCloud } = this.props;
    const { email, password, emailkomentator, tokenLogin } = this.state;

    const res = await loginCloud({ email, password });
    if (res) {
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
        email: '',
        password: '',
        akses: true,
        textButton: 'komentar sekarang'
      })

      const dataz = JSON.parse(localStorage.getItem('loginData'));
      this.setState({
        uid: dataz.uid,
        emailkomentator: dataz.email,
      })


    } else {
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
        icon: 'warning',
        title: 'Signed in failed'
      })
    }
  }

  exportWord = (e) => {
    const name = e;
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    const footer = "</body></html>";
    const sourceHTML = header + document.getElementById(`${name}`).innerHTML + footer;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-start',
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

    emailjs.sendForm('12345', 'template_244i2y9', e.target, 'user_5bWKB6fhqsotVwLUSl0tP')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <div id="particles-js">
        <section className="sec-1" id="home">
          <div className="sec1 sec11">
            <p> Anda tidak tahu cara buat surat yang terstruktur dan benar?, anda butuh yang cepat dan singkat untuk pengerjaannya. Disini ada banyak template surat siap pakai dan di kustom sesuai keinginan </p>
            <div className="join">
              <a href="https://api.whatsapp.com/send?phone=6289513093406&text=Saya%20tertarik%20untuk%20melakukan%20order%20template%20surat">
                <button className="btn btn animate__animated animate__swing animate__repeat-2 animate__delay-1s">
                  Order Template
                </button>
              </a>
            </div>
          </div>

        </section>

        <section className="template">
          <nav className="navbar navbar-expand-lg navbar-light navi">
            <div className="collapse navbar-collapse d-flex navul" id="navbarNav">
              <div className="li-type alas" onClick={this.props.allTemplate}>All</div>
              <div className="li-type" onClick={this.props.edaranTemplate}>Edaran</div>
              <div className="li-type" onClick={this.props.undanganTemplate}>Undangan</div>
              <div className="li-type" onClick={this.props.peringatanTemplate}>Lamaran</div>
              <div className="li-type" onClick={this.props.izinTemplate}>Perizinan</div>
              <div className="li-type" onClick={this.props.keteranganTemplate}>Keterangan</div>
              <div className="li-type" onClick={this.props.pesanTemplate}>Pribadi</div>
            </div>
          </nav>

          <div className="sec-template" id="sec-template">

            <Template />

          </div>

          <div>
          </div>

          <div>
          </div>

        </section>

        <section className="sec-5" id="sec-5">
          <div>
            <h1>Siapakah yang <span style={{ color: 'aqua' }}>membutuhkan</span> template ini ?</h1>
          </div>

          <div className="list-people">
            <div className="list-1">
              <ul>
                <li><i className="fas fa-check-circle"></i> Kalian yang tidak tahu bagaimana cara membuat surat dengan baik dan benar</li>
                <li><i className="fas fa-check-circle"></i> Kalian yang membutuhkan sebuah surat dalam jangka waktu yang begitu singkat</li>
                <li><i className="fas fa-check-circle"></i> Kalian yang ingin mempelajari jenis dan setiap isi dari surat surat nya</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sec-footer">
          <small>Copyright templateSurat.com | 2020</small>
        </section>

      </div>
    )
  }
}

const getStateRedux = (state) => {
  return {
    enter: state.Template
  }
}

const getActionredux = (dispatch) => {
  return {
    registerCloud: (data) => dispatch(register(data)),
    komentarAdd: (data) => dispatch(addData(data)),
    loginCloud: (data) => dispatch(login(data)),
    allTemplate: () => dispatch({ type: 'TEMPLATE_ENTER', value: 'All' }),
    edaranTemplate: () => dispatch({ type: 'TEMPLATE_ENTER', value: 'Edaran' }),
    undanganTemplate: () => dispatch({ type: 'TEMPLATE_ENTER', value: 'Undangan' }),
    peringatanTemplate: () => dispatch({ type: 'TEMPLATE_ENTER', value: 'Lamaran' }),
    pesanTemplate: () => dispatch({ type: 'TEMPLATE_ENTER', value: 'Pesan' }),
    izinTemplate: () => dispatch({ type: 'TEMPLATE_ENTER', value: 'Izin' }),
    keteranganTemplate: () => dispatch({ type: 'TEMPLATE_ENTER', value: 'Keterangan' }),
  }
}

export default connect(getStateRedux, getActionredux)(Homepage);
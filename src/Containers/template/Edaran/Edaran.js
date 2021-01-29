import React from 'react';
import Swal from 'sweetalert2';
import '../../assets/style/homepage.css';

class Edaran extends React.Component {

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
  }

  render() {

    const { exportWord } = this;

    return (
      <div>

        <div className="jumlah-surat">
          12 Surat Tersedia (Edaran)
            </div>
        <div className="wrapTemplate">

          <div className="source-html-outer">
            <div className="source-html-outer2" name="source-html-outer" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(1)}>Download</button>
              <div id="1" name="source-html2">
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  RUKUN TETANGGA 07/10 PERUMAHAN GRIYA MUTIARA INDAH<br />
                            DESA SRIHARJO KECAMATAN SEWON<br />
                            KABUPATEN BANTUL 55341<br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>Jl. Ahmad Yani km 12 Bantul</p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal', }}>
                  Bantul, 14 Maret 2018
                      </p>
                <p>Perihal : Undangan</p>
                <p>
                  Kepada Yth.<br />
                      Saudara/i<br />
                      di tempat
                      </p>
                <p>
                  Dengan Hormat
                  Dalam rangka menjaga kebersihan, keindahan dan kesehatan lingkungan, untuk itu kami sebagai pengurus RT mengundang kepada seluruh warga untuk ikut berpartisipasi dalam kegiatan kerja bakti pada :
                        <br /><br />
                        Hari/Tanggal	:	Senin/19 Maret 2018
                        <br />
                        Pukul	:	08.00 - Selesai
                        <br />
                        Tempat Kumpul	:	Rumah Ketua RT
                        <br /><br />
                        Demikian surat undangan ini kami buat, kami berharap seluruh warga dapat ikut serta dalam kegiatan ini untuk meningkatkan rasa peduli terhadap lingkungan dan menjaga kekompakan antar warga.
                      </p>
                <p>
                  Hormat Kami,<br />
                      Ketua RT 07/10,
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran Kerja Bakti </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(2)}>Download</button>
              <div id="2" name="source-html" id="2">
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  ORGANISASI SISWA INTRA SEKOLAH<br />
                        SMK NEGERI 1 BANTUL
                        <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jl. Parangtritis km.15 Sabdodadi Bantul
                        </p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'bold', textAlign: 'center', zIndex: -1 }}>
                  SURAT EDARAN CLASS MEETING
                        </p>
                <p style={{ position: 'relative', fontWeight: 'normal' }}>
                  Bantul, 14 Maret 2018
                        </p>
                <p>
                  Yth.<br />
                            Ketua Kelas<br />
                            DiTempat
                        </p>
                <p>
                  Assalamu’alaikum, Wr. Wb
                        </p>
                <p>
                  Dengan ini kami informasikan kepada seluruh  ketua kelas SMA Negeri 1 Bantul. Dalam waktu dekat ini akan diselenggarakan “Class Meeting” yang akan dilaksanakan pada :
                            <br /><br />
                            Hari/Tanggal	:	Senin/19 Maret 2018
                            <br />
                            Pukul	:	08.00 - Selesai
                            <br />
                            Tempat	:	Lapangan SMK Negeri 1 Bantul
                            <br /><br />
                            Untuk kelancaran acara “ Class Meeting”  setiap kelas diwajibkan memberi bantuan sebesar Rp.25.000,-
                            <br />
                            Demikian surat ini kami sampaikan.
                            <br />
                            Wassalamu’alaikum, Wr.Wb
                            <br />
                            Hormat Kami, <br />
                            Ketua OSIS SMK Negeri 1 Bantul,
                            </p>
                <br />
                <p>
                  Budi Seto
                        </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran OSIS </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="3" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(3)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  DIREKTORAT <br /> JENDRAL PERGURUAN TINGGI<br />
                        PROVINSI ISTIMEWA YOGYAKARTA<br />
                        Jalan Sultan Agung No. 76 A, YOGYAKARTA
                        <br /><br />
                        SURAT EDARAN
                    </p>
                <p style={{ position: 'relative', fontWeight: 'normal'}}>
                  Yogyakarta, 14 Maret 2018
                      </p>
                <p>
                  No      : 11/NJ/I/18<br />
                        Lamp    : – <br />
                        Perihal : Pemberitahuan<br />
                </p>
                <p>
                  Kepada yang terhormat,<br />
                        Saudara-Saudara Dosen<br />
                        Perguruan Tinggi Yogyakarta<br />
                        Di Tempat
                      </p>
                <p>
                  Berdasarkan dengan surat gubernur tingkat dua No.23/DKI/II/018 tentang penetapan waktu pelaksanaan wisuda dengan ini kami beritahukan bahwa dalam hubungannya dengan kegiatan pelaksanaan wisuda tersebut yang akan berlangsung pada tanggal 19 Maret 2018.
                      </p>
                <p>
                  Dengan ini kami beritahuan bahwa agar selama kegiatan wisuda Saudara- saudara dosen agar untuk mengenakan pakaian jas berwarna hitam.
                      </p>
                <p>
                  Atas perhatian Saudara kami ucapkan terima kasih.                     </p>
                <p>
                  Hormat Kami,<br />
                        Kepala DIKTI Provinsi D.I Yogyakarta,
                      </p>
                <br />
                <p>
                  Budi Seto, MM
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran Pelaksanaan Wisuda </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="4" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(4)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PEMERINTAH KABUPATEN SLEMAN<br />
                        DINAS PENDIDIKAN<br />
                        SMP NEGERI 1 SLEMAN<br />
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal' }}>
                  Sleman, 14 Maret 2018
                        </p>
                <p>
                  Nomor : 111/ 05 /smp n 1 slmn /2014<br />
                        Lampiran :- <br />
                        Perihal : Edaran Perpisahan<br />
                </p>
                <p>
                  Kepada Yth<br />
                        Orang Tua /Wali Murid<br />
                        Siswa Kelas IX<br />
                        di Tempat
                      </p>
                <p>
                  Berdasarkan hasil pertemuaan Orang Tua / Wali Murid kelas IX dan staff guru- guru SMP Negeri 1 Sleman serta di hadiri oleh pihak komite SMP Negeri 1 Sleman pada:
                      </p>
                <p>
                  Hari/Tanggal	:	Senin/19 Maret 2018<br />
                        Tempat	:	SMP Negeri 1 Sleman<br />
                        Acara	:	Rapat Perencanaan Perpisahan Siswa Kelas IX<br />
                </p>
                <p>
                  Maka telah disepakati akan diadakan acara perpisahan bagi siswa-siswi kelas IX SMP Negeri 1 sekayu yang dihadiri oleh pengurus komite SMP Negeri 1 Sleman tahun pelajaran 2013/2014. Untuk mendukung kegiatan tersebut kami mengharapkan kontribusi finansial dari orang tua/ wali murid dengan rincian sebagai berikut :
                      </p>
                <br />
                <p>
                  1.	Kelas 9 :Rp. 65.000<br />
                        2.	Kelas 8 :Rp.45.000<br />
                        3.	Kelas 7 :Rp.30.000
                      </p>
                <p>
                  Demikianlah surat edaran ini kami sampaikan , atas perhatian dan kerjasamanya kami ucapkan terima kasih.
                        <br />
                  <br />
                        Hormat Kami,<br />
                        Ketua Komite SMP Negeri 1 Sleman,
                      </p>
                <br />
                <p>
                  Muhammad Khoirul Huda
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran Perpisahan sekolah </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="5" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(5)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  DINAS PENDIDIKAN FORMAL DAN NON-FORMAL<br />
                            PROVINSI JAWA TIMUR<br />
                            SMK NEGERI 1 MALANG
                            <br />
                  <br />
                  <p style={{ position: 'relative', fontWeight: 'normal' }}>
                    Jl. Sonokembang Janti, Bandungrejosari, Sukun, Bandungrejosari, Sukun,<br />
                                Kota Malang, Jawa Timur 65148<br />
                                Telp: (0314) 6237235
                            </p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal' }}>
                  Malang, 14 Maret 2018
                        </p>
                <p>
                  Nomor       : 100/SUR/SMP-SK/2018<br />
                        Lampiran   : –<br />
                        Perihal      : Undangan<br />
                  <br />
                  <br />
                        Kepada Yth :<br />
                        Bapak/Ibu Orang Tua/Wali Murid Kelas XII (Dua Belas)<br />
                        SMK NEGERI 1 MALANG<br />
                        Ditempat
                        <br />
                  <br />
                        Dengan Hormat,
                        <br />
                  <br />
                        Dengan surat ini, kami mendoakan semoga Bapak/Ibu sekeluarga selalu dalam keadaan sehat wal’afiat serta selalu dalam lindungan-Nya. Amin.
                        <br />
                  <br />
                        Melalui surat ini, kami mengundang Bapak/Ibu Orang Tua/Wali Murid kelas XII (Dua Belas) SMK NEGERI 1 MALANG untuk berkenan hadir pada :
                        <br />
                  <br />
                        Hari/Tanggal	:	Senin/19 Maret 2018<br />
                        Waktu	:	Jam 09.00 - Selesai<br />
                        Acara	:	Rapat Persiapan UN TA 2017/2018<br />
                        Tempat	:	Aula SMK Negeri 1 Malang<br />
                  <br />
                        Demikian pemberitahuan ini kami sampaikan, atas perhatian dan kehadiran Bapak/Ibu sekalian kami ucapkan terima kasih.
                        <br />
                  <br />
                        Hormat Kami,<br />
                        Kepala SMK Negeri 1 Malang,
                        <br />
                  <br />
                  <br />
                        Muhammad Khoirul Huda
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran Persiapan UN </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PT. SEGAR ALAM ABADI
                <br />
                  <p style={{ position: 'relative', fontWeight: 'normal', textAlign: 'center' }}>
                    Jl. Raya  Wangi Teh Melati Km. 670977<br />
                Website: www.segaralamabadi.com Email: info@segaralamabadi.com
                </p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal'}}>
                  Bandung, 14 Maret 2018</p>
                <p style={{ position: 'relative', fontWeight: 'bold', textAlign: 'center' }}>
                  SURAT EDARAN
                <p style={{ position: 'relative', fontWeight: 'normal', textAlign: 'center' }}>
                    Nomor : 035/ST/X/16
                </p>
                </p>
                <p>
                  Sehubungan dengan adanya Peraturan Pemerintah Kota Bandung nomor: 72/PP/X/2018 mengenai aturan dilarang merokok pada lingkungan kerja, maka dengan ini kami melarang kepada seluruh pegawai karyawan PT. Segar Alam Abadi untuk tidak merokok di lingkungan kantor kecuali pada ruangan smoking area yang telah disediakan.
                <br />
                  <br />
                Demikian surat edaran ini dibuat harap menjadi maklum dan dipatuhi demi kenyamanan bersama.
                <br />
                  <br />
                Mengetahui,
                Direktur SDM PT. Segar Alam Abadi,
                <br />
                  <br />
                  <br />
                Drs. Budi Seto
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran Perusahaan </p>
            </div>
          </div>



          {/* 6 surat sisa */}

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PEMERINTAH KOTA MADYA BANDA ACEH
                  KECAMATAN KUTA BARO KUTA ALAM
                    <br />
                  <p style={{ position: 'relative', fontWeight: 'normal', textAlign: 'center' }}>
                    Jln. Kelapa Dua No. 65 Kuta Baro Jaya Banda Aceh <br />
                    Telepon (0651) 675465
                    </p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal'}}>
                  Banda Aceh, 14 Maret 2018
                    </p>
                <p>
                  Nomor   : 20/KB/2018<br />
                    Sifat     : Penting<br />
                    Perihal : Kerja Bakti Bersama
                    <br />
                  <br />
                    Yth. Ketua RW 05, 06, 07 dan 10<br />
                    Kelurahan Kuta Baro<br />
                    Di Banda Aceh
                    <br />
                  <br />
                    Melalui surat keputusan dari Kepala Dinas Kesehatan Masyarakat Kotamadya Banda Aceh Nomor:
                    05/2.654 pada tanggal 10 Maret 2018 mengenai hal Jadwal Pelaksanaan Bulan Bakti Gerakan
                    Menguras, Menutup dan Mengubur (BBG 3M) yaitu dalam rangka memberantas nyamuk demam berdarah
                    serta penanggulangan bencana banjir, maka bersama surat ini kami mohon kepada para pengurus
                    RW supaya mengoordinasi/mengarahkan semua warga untuk dapat melakukan kerja bakti tersebut,
                    yang akan dilaksanakan pada :
                    <br />
                  <br />
                    Hari/Tanggal	:	Senin/19 Maret 2018<br />
                    Waktu	:	Pukul 08.00 - Selesai<br />
                    Tempat	:	Lingkungan Masing - Masing RW
                    <br />
                  <br />
                    Demikianlah informasi yang dapat kami sampaikan untuk dapat diketahui atas perhatian dan kerjasama bapak kami ucapkan terimakasih.
                    <br />
                  <br />
                    Hormat Kami,<br />
                    Lurah Kuta Baro,
                    <br />
                  <br />
                  <br />
                    Muhammad Khoirul Huda
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran Resmi Pemerintah </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  DINAS PENDIDIKAN DAN KEBUDAYAAN KOTA BEKASI
                  SEKOLAH MENGENGAH PERTAMA NEGERI 1 BEKASI
                    <br />
                  <p style={{ position: 'relative', fontWeight: 'normal', textAlign: 'center' }}>
                    Jln. KH Agus Salim No. 181 Kota Bekasi<br />
                        Telp: (0314) 6237235
                    </p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal' }}>
                  Bekasi, 14 Maret 2018
                </p>
                <p>
                  Nomor      : 053/SMAN-1/Study Tour/V/2018<br />
                    Lampiran : -<br />
                    Hal          : Pemberitahuan Kegiatan Study Tour
                    <br />
                  <br />
                    Kepada Yth :<br />
                    Bapak/Ibu Orang Tua/Wali Murid Kelas VI<br />
                    di Tempat
                    <br />
                  <br />
                    Dengan Hormat,
                    <br />
                  <br />
                    Bersama surat ini kami beritahukan kepada Bapak/Ibu, bahwa untuk menambah pengetahuan, wawasan dan juga pengalaman yang berkaitan dengan ilmu pengetahuan dan teknologi untuk anak didik, maka dari pihak sekolah ingin melaksanakan kegiatan kunjungan pendidikan (study tour) yang akan dilaksanakan pada awal bulan April 2018. Rencana kegiatan study tour sebagaimana uraian berikut :
                    <br />
                  <br />
                    TUJUAN DAN BIAYA
                    <br />
                  <br />
                    1.	Tujuan : BOGOR - BANDUNG - JAKARTA<br />
                    2.	Biaya  : Rp. 550.000,-
                    <br />
                  <br />
                    TEMPAT YANG AKAN DIKUNJUNGI
                    <br />
                  <br />
                    1.	Bogor      - Taman Safari Indonesia<br />
                    2.	Bandung - Cibaduyut<br />
                    3.	Jakarta   - Taman Mini Indonesia Indah
                    <br />
                  <br />
                    FASILITAS YANG AKAN DISEDIAKAN
                    <br />
                  <br />
                    1.	Bus Pariwisata AC;<br />
                    2.	Tiket obyek wisata;<br />
                    3.	Makan 3 kali (Prasmanan/Box);<br />
                    4.	Dokumentasi;<br />
                    5.	Asuransi;<br />
                    6.	PPPK;<br />
                    7.	Tour leader dari Purnama Wisata.<br />
                  <br />
                  <br />
                    Bagi siswa (i) yang berminat untuk mengikuti kegiatan studi tour ini, diwajibkan untuk segera melunasi biaya kegiatan paling lambat pada tanggal 26 Maret 2018.
                    <br />
                  <br />
                    Demikian surat pemberitahuan ini kami berikan, atas segala perhatian dan kerjasamanya kami ucapkan terima kasih.
                    <br />
                  <br />
                    Hormat Kami,<br />
                    Kepala Sekolah,
                    <br />
                  <br />
                  <br />
                    Muhammad Khoirul Huda
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran study tour </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  MAJELIS PENDIDIKAN DASAR DAN MENENGAH MUHAMMADIYAH
                <br />
                SMK MUHAMMADIYAH 1 NGAWI
                <br />
                  <p style={{ position: 'relative', fontWeight: 'normal', textAlign: 'center' }}>
                    Jl. Gatot Subroto No.14 Ngawi 66341
                <br />
                Telp: (0274) 875234
                </p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal'}}>
                  Ngawi, 14 Maret 2018
                </p>
                <p>
                  Nomor     :  I/III.4.AU/A/2018<br />
                    Lampiran  :   –<br />
                    Hal       :   Pemberitahuan
                    <br />
                  <br />
                    Kepada Yth.<br />
                    Bapak/Ibu Orang Tua/Wali Murid Siswa/i<br />
                    SMK Muhammadiyah 1 Ngawi<br />
                    di Tempat
                    <br />
                  <br />
                    Assalamu’alaikum Wr. Wb
                    <br />
                  <br />
                    Puji syukur Kita panjatkan kepada Allah SWT yang senantiasa melimpahkan Rahmat dan Hidayah-Nya pada kita semua, Sholawat serta salam semoga tercurah pada junjungan Nabi Agung Muhammad SAW beserta pengikut- pengikutnya hingga akhir zaman. Amin.
                    <br />
                  <br />
                    Sehubungan dengan pelaksanaan kegiatan idul adha. Kami selaku Panitia kegiatan idul adha SMK Muhammadiyah 1 Ngawi akan melaksanakan kegiatan qurban di SMP Muhammadiyah 4 Ngawi yang beralamatkan di Ds. Plosorejo, Jagir, Sine.
                    <br />
                  <br />
                    Adapun kegiatan tersebut Insya Allah akan dilaksanakan pada :
                    <br />
                  <br />
                    Hari/Tanggal    : Jum’at s/d Minggu,  16 - 18 Maret 2018
                    <br />
                  <br />
                    Mengingat waktu penyelenggaraan sudah dekat, maka kami mohon partisipasi Bapak/Ibu orangtua wali siswa/i SMK Muhammadiyah 1 Ngawi. Untuk kelancaran kegiatan tersebut, setiap siswa dikenakan biaya minimal sebesar Rp 25.000,-/siswa. Biaya administrasi dapat di lakukan mulai diedarkannya edaran ini paling lambat tanggal 15 Maret 2018 di bendahara sekolah (Bapak Joko Sudiro).
                    <br />
                  <br />
                    Atas perhatian dan kerjasama Bapak/Ibu, kami ucapkan terimakasih.
                    <br />
                  <br />
                    Wassalamu’alaikum Wr. Wb.
                    <br />
                  <br />
                    Hormat Kami,
                    Kepala SMK Muhammadiyah 1 Ngawi,
                    <br />
                  <br />

                    Muhammad Khoirul Huda
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran Permintaan Partisipasi </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  DINAS INDUSTRI DAN PERDAGANGAN
                    <br />
                    PEMERINTAH DAERAH KOTA YOGYAKARTA
                    <br />
                  <p style={{ position: 'relative', fontWeight: 'normal', textAlign: 'center' }}>
                    Jln. Ahmad Yani No. 35 Kota Yogyakarya
                    Telp. 0651 – 987867 Fax. 987867
                    </p>
                  <br />
                  <br />
                  <p style={{ position: 'relative', fontWeight: 'bold', textAlign: 'center' }}>
                    Surat Edaran
                    </p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal' }}>
                  Yogyakarta, 14 Maret 2018
                </p>
                <p>
                  Nomor   : 34/PTKS/SE/6/17<br />
                    Sifat   : Penting<br />
                    Perihal : Rapat Besar Dinas
                    <br />
                  <br />
                    Yth.  <br />
                    Bapak/Ibu Staf Karyawan  <br />
                    Dinas Industri dan Perdagangan  <br />
                    Pemerintah Daerah Kota Yogyakarta  <br />
                    di Tempat
                    <br />
                  <br />
                    Sehubungan dengan akan diadakannya Rapat Besar Kedinasan dalam rangka melaksanakan Peraturan Daerah No. 22 Tahun 2017 mengenai penetapan pengambilan cuti dan izin tidak masuk kerja dan Peraturan Daerah No. 65 Tahun 2016 mengenai kewajiban kepemilikan NPWP, maka dimohon kepada Bapak/Ibu untuk hadir pada Rapat Besar tersebut pada :                    <br />
                  <br />
                    Hari/Tanggal	:	Senin/19 Maret 2018 <br />
                    Tempat	:	Aula Gedung Serbaguna <br />
                    Waktu	:	09.00 - Selesai
                    <br />
                  <br />
                    Mengingat pentingnya rapat tersebut maka dimohon Bapak/Ibu hadir tepat waktu. Atas perhatian dan kerjasama Bapak/Ibu, kami ucapkan terima kasih.
                    <br />
                  <br />
                    Kepala Dinas Industri dan Perdagangan,
                    <br />
                  <br />
                  <br />
                    Bambang Setyo R
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran Rapat Besar </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PEMERINTAHAN KABUPATEN SEMARANG
                  Jl. Pangeran Diponegoro No. 123
                    <br />
                    Semarang
                    <br />
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal' }}>
                  Semarang, 14 Maret 2018
                </p>
                <p>
                  Nomor  : 02/PHBI/XI/2018
                  Lamp.   :  –
                    Perihal  : <b>Pemberitahuan Lomba MTQ</b>
                  <br />
                  <br />
                    Yth.<br />
                    Kepala MA NEGERI 2 Semarang<br />
                    di tempat
                    <br />
                  <br />
                    Assalamu’alaikum Wr. Wb.
                    <br />
                  <br />
                    Segala puji dan syukur hanya untuk Allah swt, shalawat dan salam semoga tercurah kepada Nabi Muhammad saw, keluarga, sahabat, dan semoga sampai kepada kita selaku umatnya. Aamiin.
                    Sehubungan dengan akan diselenggarakannya Lomba MTQ se-Kabupaten Semarang yang dilaksanakan pada :
                    <br />
                  <br />
                    Hari/Tanggal	:	Senin/19 Maret 2018<br />
                    Waktu	:	07.00 - Selesai<br />
                    Tempat	:	Islamic Center Semarang
                    <br />
                  <br />
                    Melalui surat ini kami bermaksud mengundang untuk bisa mengirimkan peserta maxsimal 3 orang di acara tersebut. Demikian permohonan ini kami haturkan, atas perhatiannya kami sampaikan terima kasih.
                    <br />
                  <br />
                    Wassalamu’alaikum Wr. Wb.
                    <br />
                  <br />
                    Hormat Kami,
                    Ketua Panitia,
                    <br />
                  <br />
                  <br />
                    Muhammad Khoirul Huda
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran Lomba MTQ </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  SURAT EDARAN
                    </p>
                <br />
                <br />
                <p>
                  Kepada Yth,<br />
                    Para pengunjung Pasar Malam<br />
                    Di Tempat
                    <br />
                  <br />
                    Dengan hormat,
                    <br />
                  <br />
                    Melalui surat edaran ini kami memberitahukan yang bahwa tanggal 15 Maret 2018 untuk sementara pasar malam di Medan Baru akan ditutup dan kembali dibuka pada tanggal 19 Maret 2018.
                    <br />
                  <br />
                    Demikian yang dapat kami beritahukan atas perhatiannya kami ucapkan terimakasih.
                    <br />
                  <br />
                    Medan, 14 Maret 2018
                    <br />
                  <br />
                    Hormat kami,
                    Ketua Penyelenggara Pasar Malam,
                    <br />
                  <br />
                  <br />
                    Budi Seto
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Edaran Singkat </p>
            </div>
          </div>



        </div>
      </div>
    )
  }
}

export default Edaran;
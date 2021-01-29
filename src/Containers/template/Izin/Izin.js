import React from 'react';
import Swal from 'sweetalert2';
import '../../assets/style/homepage.css';

class Izin extends React.Component {

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
          12 Surat Tersedia (Izin)
            </div>
        <div className="wrapTemplate d-flex">

          <div className="source-html-outer">
            <div className="source-html-outer2" name="source-html-outer" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(1)}>Download</button>
              <div id="1" name="source-html2">
                <p style={{ position: 'relative', fontWeight: 'normal', left: 140 }}>
                  Surabaya, 20 Mei 2019
                      </p>
                <br />
                <p>
                  Kepada Yth
                        <br />
                  <br />
                        Bapak/ Ibu Guru di Kelas 5
                        <br />
                  <br />
                        SD Anak Bangsa 5
                        <br />
                  <br />
                        Assalamua’alaikum Wr Wb
                        <br />
                  <br />
                        Dengan hormat, sehubungan dengan datangnya surat ini kami orang tua/wali murid dari :
                        <br />
                  <br />
                        Nama : Baharuddin
                        Siswa : Kelas 5 SD Anak Bangsa 5
                        Alamat : Jalan Sejahteran No 96 Surabaya
                        Tidak dapat melaksanakan kegiatan belajar mengajar seperti biasanya pada Hari Senin
                        Tanggal 20 Mei 2019 dikarenakan sakit. Oleh sebab itu, mohon Bapak/ Ibu Guru di Kelas
                         5 SD Anak Bangsa 5 memberikan izin.
                        <br />
                  <br />
                        Demikian surat ini dibuat. Atas perhatian Bapak/Ibu kami mengucapkan terimakasih.
                        <br />
                  <br />
                        Hormat kami,
                        <br />
                  <br />
                  <br />
                        Orang Tua Baharuddin
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin sekolah (Sakit) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="2" name="source-html" id="2">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(2)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  surat izin karena ada kepentinagn keluarga
                        </p>
                <p>
                  <p style={{ position: 'absolute', fontWeight: 'normal', right: 10, marginBottom: 20 }}>
                    Cirebon, 17 Mei 2018
                          </p>
                  <br />
                  <br />
                          Kepada Yth.
                          Bapak/Ibu Guru Wali Kelas XII IPS 1
                          SMA Negeri 1 Cirebon
                          <br />
                  <br />
                          Dengan hormat,
                          Dengan ini saya orang tua/wali murid dari:
                          Nama : Prayogo Lukman
                          Siswa : Kelas XII IPS 1 SMA Negeri 1 Cirebon
                          Alamat : Jl. Patiunus No 655, Cirebon
                          <br />
                  <br />
                          Memberitahukan bahwa anak saya tidak dapat mengikuti proses belajar mengajar pada hari ini,
                          abu 17 Agustus 2018 dikarenakan terdapat kepentingan keluarga yang tidak dapat kami
                          tinggalkan. Oleh karena itu, kami memohon kepada Bapak/Ibu Guru Wali Kelas XII IPS 1 agar
                           memberikan izin.
                          <br />
                  <br />
                          Demikian yang dapat saya sampaikan. Atas perhatian Bapak/Ibu Guru Wali Kelas, saya ucapkan
                          terima kasih.
                          <br />
                  <br />
                  <p style={{ position: 'absolute', textAlign: 'center', fontWeight: 'normal', right: 10, marginTop: 20 }}>
                    Hormat Saya,
                            <br />
                    <br />
                            Orang tua/Wali murid
                            <br />
                    <br />
                    <br />
                            Bpk. Hidayat
                          </p>
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin Sekolah (Kepentingan) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="3" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(3)}>Download</button>
                <p style={{ position: 'absolute', fontWeight: 'normal', right: 10, marginBottom: 20 }}>
                  Surabaya, 20 Mei 2019
                      </p>
                <br />
                <br />
                <br />
                <p>
                  Kepada Yth<br />
                      Bapak/ Ibu Dosen Kelas A Ilmu Pemerintahan
                      <br />
                  <br />
                      Universitas Indonesia Jaya
                      <br />
                  <br />
                      Assalamua’alaikum Wr Wb
                      <br />
                  <br />
                      Dengan hormat, sehubungan dengan datangnya surat ini saya yang bertanda
                      tangan di bawah ini:
                      <br />
                  <br />
                      Nama : Akbar Saputro<br />
                      Alamat : Jalan Bahagia No 96 Surabaya<br />
                      NIM : 123903587548<br />
                      Kelas : Kelas A Jurusan Ilmu Pemerintahan Angkatan 2018
                      <br />
                  <br />
                      Tidak dapat melaksanakan kegiatan belajar mengajar di kelas seperti
                      biasanya pada Hari Senin Tanggal 20 Mei 2019 dikarenakan sakit. Oleh
                      sebab itu, mohon Bapak/ Ibu Dosen yang mengajar memberikan izin
                      <br />
                  <br />
                      Demikian surat ini dibuat. Atas perhatian Bapak/Ibu saya mengucapkan
                      terimakasih.
                      <br />
                  <br />
                      Hormat saya,
                      <br />
                  <br />
                  <br />
                      Akbar Saputro
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin Kuliah (Sakit) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="4" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(4)}>Download</button>
                <p style={{ position: 'absolute', fontWeight: 'normal', right: 10, marginBottom: 20 }}>
                  Sleman, 14 Maret 2018
                      </p>
                <br />
                <br />
                <br />
                <p>
                  Kepada Yth
                      <br />
                  <br />
                      Bapak/ Ibu Dosen Kelas A Ilmu Pemerintahan
                      <br />
                  <br />
                      Universitas Indonesia Jaya
                      <br />
                  <br />
                      Assalamua’alaikum Wr Wb
                      <br />
                  <br />
                      Dengan hormat, sehubungan dengan datangnya surat ini saya yang bertanda
                      tangan di bawah ini:
                      <br />
                  <br />
                      Nama : Akbar Saputro<br />
                      Alamat : Jalan Bahagia No 96 Surabaya<br />
                      NIM : 123903587548<br />
                      Kelas : Kelas A Jurusan Ilmu Pemerintahan Angkatan 2018<br />
                      Tidak dapat melaksanakan kegiatan belajar mengajar di kelas seperti
                      biasanya.Terhitung sejak Hari Senin Tanggal 20 Mei 2019 hingga hari
                      Jum’at Tanggal 31 Mei 2019 dikarenakan sedang mengikuti program magang
                      di PT. Kimia Farma. Oleh sebab itu, mohon Bapak/ Ibu Dosen yang mengajar
                      memberikan izin.
                      <br />
                  <br />
                      Demikian surat ini dibuat. Atas perhatian Bapak/Ibu saya mengucapkan
                      terimakasih.
                      <br />
                  <br />
                      Hormat saya,
                      <br />
                  <br />
                  <br />
                      Akbar Saputro
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin Kuliah (Kepentingan) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="5" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(5)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  ORGANISASI PRAMUKA SMA ANAK BANGSA
                      <br />
                      KECAMATAN SURABAYA KOTA SURABAYA
                      <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jalan Raya Sejahtera No 189 Kode Pos 76853
                      </p>
                </p>
                <p>
                  Nomor : 67/546/pramuka/2019<br />
                      Lampiran : –<br />
                      Perihal : Izin Mengikuti Kegiatan Perkemahan
                      <br />
                  <br />
                      Kepada Yth<br />
                      Bapak/Ibu Orang Tua Murid
                      <br />
                  <br />
                      Assalamu’alaikum Wr Wb
                      <br />
                  <br />
                      Dengan hormat. Kami selaku organisasi pramuka SMA Anak Bangsa akan
                      mengadakan kegiatan perkemahan siswa. Penyelenggaraan kegiatan ini
                      dalam rangka pelatihan anggota baru pramuka serta pelantikan pengurus baru.
                      <br />
                  <br />
                      Adapun pelaksanaannya, akan diselenggarakan pada:
                      <br />
                  <br />
                      Tempat : Bumi Perkemahan Mojokerto<br />
                      Tanggal : 20 Mei 2019 – 23 Mei 2019<br />
                      Waktu : Pukul 07.30 hingga selesai
                      <br />
                  <br />
                      Menyangkut pentingnya pelaksanaan kegiatan ini. Kami mohon kepada
                      Bapak/Ibu orang tua murid dapat memberikan izin putra putrinya untuk
                      melaksanakan kegiatan tersebut.
                      <br />
                  <br />
                      Demikian yang dapat kami sampaikan. Atas perhatiannya kami mengucapkan
                      terimakasih.
                      <br />
                  <br />
                      Wa’alaikumsalam Wr Wb
                      <br />
                  <br />
                      Mengetahui
                      <br />
                  <br />
                      Kepala Sekolah SMA Anak Bangsa Ketua Pelaksana Kegiatan
                  </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin Kepada Ortu </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  ORGANISASI PRAMUKA UNIVERSITAS TRISAKTI SURABAYA
                <br />
                KECAMATAN SURABAYA KOTA SURABAYA
                <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jalan Raya Sejahtera No 189 Kode Pos 76853
                </p>
                </p>
                <p>
                  Nomor : 67/546/pramuka/2019<br />
                Lampiran : –<br />
                Perihal : Peminjaman Tempat Kegiatan Rapat Tahunan
                <br />
                  <br />
                Kepada Yth<br />
                Bapak/Ibu Bag. Perlengkapan
                <br />
                  <br />
                Assalamu’alaikum Wr Wb
                <br />
                  <br />
                Dengan hormat. Kami selaku organisasi pramuka Universitas Trisakti Surabaya
                akan mengadakan kegiatan rapat tahunan mahasiswa. Dengan datangnya kegiatan
                tersebut maka kami akan menyelanggarakannyadan akan dilaksanakan pada berikut ini :
                <br />
                  <br />
                Tempat : Aula Gedung Utama Universitas Trisakti
                Hari : Senin- Rabu
                Tanggal : 20 Mei 2019 – 23 Mei 2019
                Waktu : Pukul 07.30 hingga selesai
                Menyangkut pentingnya pelaksanaan kegiatan ini. Kami mohon kepada
                Bapak/Ibu bagian perlengakapan agar dapat memberikan izin di tempat
                yang sudah kami tentukan di atas.
                <br />
                  <br />
                Demikian yang dapat kami sampaikan. Atas perhatiannya kami mengucapkan terimakasih.
                <br />
                  <br />
                Wa’alaikumsalam Wr Wb
                <br />
                  <br />
                Mengetahui
                <br />
                  <br />
                Pembantu Rektor III Universitas Trisakti Ketua Badan Eksekutif Mahasiswa

                Tembusan :

                Bag ruang dan lcd

                Bag Keamanan
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin Pinjam Tempat Usaha </p>
            </div>
          </div>



          {/* 6 surat sisa */}

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  UNIVERSITAS ANAK BANGSA
                    </p>
                <br />
                <br />
                <p>
                  Jakarta, 21 Mei 2019
                    <br />
                  <br />
                    Nomor : 758465/II/2019
                    Lampiran :-
                    Perihal : Ijin Pengambilan data
                    <br />
                  <br />
                    Kepada Yth
                    Pemimpin/Kepala Desa
                    <br />
                  <br />
                    Dengan hormat,
                    <br />
                  <br />
                    Kami dari Universitas Anak Bangsa, dengan ini hendak mengajukan permohonan
                    ijin penelitian mahasiswa kami agar sekiranya bisa diterima di tempat Anda :
                    <br />
                  <br />
                    Nama : Rahmad Saputra<br />
                    NIM : 62437656475656<br />
                    Program Studi : Ilmu Politik<br />
                    Judul Penelitian : Analisis Kepemimpinan Sebelum dan Sesudah Lengsernya
                    Kepala Daerah PadaTahun 2013
                    <br />
                  <br />
                    Penelitian tersebut akan dilaksanakan dalam kurang lebih satu bulan,
                    yaitu pada tanggal 20 Mei-20 Juni 2019.
                    <br />
                  <br />
                    Demikian surat permohonan ini kami sampaikan. Atas perhatiannya kami
                    ucapkan terimakasih.
                    <br />
                  <br />
                    Hormat kami, Ketua Program Studi Ilmu Politik
                    <br />
                  <br />
                    Universitas Anak Bangsa
                    <br />
                  <br />
                    Nama ketua prodi
                    <br />
                  <br />
                  <br />
                    NIP : 237374655694769
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin Penelitian </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PEMERINTAH KABUPATEN MALANG
                    <br />
                    DINAS PELAYANAN PERIZINAN TERPADU
                    <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jl. Trunojoyo Kav 6 Lt I&II Telp. (0341) 396633 –fax (0341) 396633</p>
                    KEPANJEN MALANG 65163
                </p>
                <p>
                  Nomor : 77745947476/SIUP-K/42138498/2013
                <br />
                  <br />
                Nama Perusahaan : <br /> PT Maju Mundur
                <br />
                  <br />
                Nama Merek (Milik Sendiri/Lisensi) : <br /> –
                <br />
                  <br />
                Alamat Kantor Perusahaan : <br /> Jalan Gajahmada no 75 Kecamatan Kepanjen
                Kabupaten Malang
                <br />
                  <br />
                Nama Pemilik/ Penanggung Jawab : <br /> Sulthon Fathoni
                <br />
                  <br />
                Alamat Penanggung Jawab : <br /> Jalan Singosari No 87 Kecamatan Singosari
                Kota Malang
                <br />
                  <br />
                Nomor Pokok Wajib Pajak (NPWP) : <br /> 548957486758
                <br />
                  <br />
                Nilai Modal Kekayaan bersih perusahaan
                <br />
                  <br />
                tidak termasuk tanah : <br /> Rp. 100.000.000 (Seratus Juta Rupiah)
                <br />
                  <br />
                Kegiatan Usaha : <br /> Perdagangan Barang
                <br />
                  <br />
                Kelembagaan : <br /> Pedagang Pengecer<br />
                Bidang Usaha : <br /> Perdagangan Pengecer Khusus Beras dan Sembako di dalam
                Bangunan (7364356)
                <br />
                  <br />
                Jenis Barang/ Barang Dagangan Utama : <br /> Sembako,Minyak Goreng, Sabun Cuci,
                Sabun Mandi, Sikat Gigi, Gula, Garam
                <br />
                  <br />
                SIUP ini diberikan dengan ketentuan :
                <br />
                  <br />
                PERTAMA : Surat Ijin Usaha Perdagangan (SIUP) ini berlaku untuk melakukan
                kegiatan usaha perdagangan seluruh Wilayah Republik Indonesia selama perusahaan
                masih menjalankan usaha perdagangan.
                <br />
                  <br />
                KEDUA : Pemilik/ Penanggung jawab memberikan laporan kegiatan usaha perdagangannya
                dua kali dalam setahun dengan jadwal untuk semester pertama paling lambat
                tanggal 31 Juli dan untuk semester kedua paling lambat 31 Januari tahun
                berikutnya bagi SIUP menengah dan besar atau bagi SIUP kecil satu kali dalam
                setahun selambat-lambatnya tanggal 31 Januari berikutnya.
                <br />
                  <br />
                KETIGA : Tidak berlaku untu kegiatan perdagangan berjangka komoditi
                <br />
                  <br />
                KEEMPAT :Tidak untuk melakukan kegiatan usaha selain tercatum dalam SIUP ini.
                <br />
                  <br />
                Dikeluarkan di, MALANG
                <br />
                  <br />
                Pada tanggal, 05 Mei 2019
                <br />
                  <br />
                KEPALA BADAN PELAYANAN PERIJINAN TERPADU
                <br />
                  <br />
                  <br />
                AHMAD BAIDHOWI M.Si
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin Usaha (Dagang) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  ORGANISASI INTRA SEKOLAH (OSIS)<br />
                SMA NEGERI 60 KOTA BANDUNG
                <br />
                  <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jl. Teratai Merah Muda No. 102 – 104 Bandung 67033<br />
                Tlp. 022 – 690210  Fax. 022 – 690211
                </p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal', left: 100 }}>
                  Bandung, 22 Maret 2018
                </p>
                <p>
                  Nomo : 22/OS60/SU/9/18<br />
                Sifat : Penting<br /><br />
                Lampiran : 1 Berkas Proposal<br />
                Hal : Permohonan Izin Kegiatan
                <br />
                  <br />
                Kepada<br />
                Bapak Kepala<br />
                SMA Negeri 60 Kota Bandung<br />
                Di tempat
                <br />
                  <br />
                Assalamualaikum Wr. Wb.
                <br />
                  <br />
                Dengan hormat,
                <br />
                  <br />
                Segala puji bagi Allah SWT yang telah melimpahkan rahmat dan hidayah-Nya, dan
                semoga kita selalu dalam limpahan iman kepada-Nya. Shalawat dan sholawat serta
                salam semoga senantiasa tercurah kepada Nabi besar Muhammad SAW hingga akhir zaman.
                <br />
                  <br />
                Dalam rangka memperingati Hari Ulang Tahun SMA Negeri 60 Kota Bandung yang ke
                25, kami bermaksud mengadakan acara syukuran bagi seluruh warga SMA Negeri 60
                Kota Bandung guna memperat tali silaturahmi dan meningkatkan solidaritas warga
                SMA Negeri 60 Kota Bandung yang akan diadakan pada :
                <br />
                  <br />
                Hari/Tanggal	:	Senin/26 Maret 2018<br />
                Waktu	:	09.00 - Selesai<br />
                Tempat	:	Gedung Serbaguna SMA Negeri 60 Kota Bandung
                <br />
                  <br />
                Oleh karena itu, kami selaku panitia pelaksana kegiatan bermaksud memohon izin
                untuk mengadakan kegiatan tersebut agar acara kegiatan ini dapat berjalan dengan
                lancar sebagaimana mestinya.
                <br />
                  <br />
                Demikian permohonan ini kami sampaikan. Besar harapan kami agar permohonan izin
                ini dikabulkan sehingga kegiatan ini bisa terlaksana dengan baik. Atas perhatian
                dan  dukungan Bapak, kami ucapkan terimakasih.
                <br />
                  <br />
                Wasalamualaikum Wr. Wb.
                <br />
                  <br />
                Hormat Kami
                <br />
                  <br />
                  <br />
                Ketua OSIS SMA Negeri 60 Bandung,
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin selenggara Acara </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  DEPARTEMEN PENDIDIKAN DAN KEBUDAYAAN<br />
                SMA NEGERI 60 KOTA BANDUNG
                <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jl. Teratai Merah Muda No. 102 – 104 Bandung 67033<br />
                Tlp. 022 – 690210  Fax. 022 – 690211
                </p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal', left: 100 }}>
                  Bandung, 22 Maret 2018
                </p>
                <p>
                  Nomor : 005/PK/60/VIII/2018<br />
                Perihal : Permohonan Izin Kegiatan
                <br />
                  <br />
                Kepada Yth, <br />
                Orang Tua Siswa  – Siswi <br />
                SMA Negeri 60 Kota Bandung
                <br />
                  <br />
                Assalamualaikum Wr. Wb.
                <br />
                  <br />
                Dengan hormat,
                <br />
                  <br />
                Segala puji hanya bagi Allah SWT yang telah memberikan nikmat hingga saat ini.
                Shalawat serta salam semoga tercurah kepada junjungan kita nabi Muhammad SAW
                beserta keluarganya, para sahabatnya dan umatnya yang setia hingga akhir zaman.
                Teriring doa semoga kita senantiasa berada dalam lindungan Allah SWT.
                <br />
                  <br />
                Seseuai dengan agenda kegiatan untuk siswa- siswi baru SMA Negeri 60 Kota
                Bandung yaitu kegiatan Perkemahan Sabtu-Minggu (PERSAMI) untuk mendidik siswa
                – siswi baru agar menjadi siswa – siswi yang Mandiri, Terampil dan Bertanggung
                Jawab, maka kami bermaksud untuk memohon kepada Bapak/Ibu sebagai Orang Tua/Wali
                Murid untuk mengizinkan putra/ putrinya dalam mengikuti kegiatan tersebut yang
                pelaksanaannya Insya Allah akan diselenggarakan pada :
                <br />
                  <br />
                Hari/Tanggal	:	Senin/26 Maret 2018<br />
                Waktu	:	09.00 - Selesai<br />
                Tempat	:	Gedung Serbaguna SMA Negeri 60 Kota Bandung
                <br />
                  <br />
                Mengingat akan pentingnya kegiatan tersebut, kami mohon agar Bapak/Ibu sebagai Orang Tua/Wali Murid dapat memberikan izin. Demikian surat ini kami sampaikan, atas perhatian dan kerjasama Bapak/ Ibu, kami ucapkan terima kasih.
                <br />
                  <br />
                Wassalamu’alaikum Wr. Wb.
                <br />
                  <br />
                Hormat Kami<br />
                SMA Negeri 60 Kota Bandung,
                <br />
                  <br />
                  <br />
                Bambang Wicaksono
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin Ikuti Kegiatan</p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PT. SEGAR ALAM ABADI
                <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Ruko Edelwis Permai Blok AB3 No. 4 - Bandung 670977
                Telp. 022 332769 - Fax. 022 332766 <br />
                  </p>
                </p>
                <p style={{ position: 'relative', fontWeight: 'normal', left: 100 }}>
                  Bandung, 22 Maret 2018
                </p>
                <p>
                  No        : 018/PTSAA/09/2018<br />
                Hal       : Permohonan Izin Mendirikan Bangunan<br />
                Lampiran  : 1 (satu) berkas
                <br />
                  <br />
                Yth. <br />
                Kepala Badan Peayanan Perizinan Terpadu <br />
                Jalan Kayu Putih 3 Raya No. 45 – 47
                Kota Bandung
                <br />
                  <br />
                Dengan hormat,
                <br />
                  <br />
                Yang bertanda tangan di bawah ini :
                <br />
                  <br />
                Nama	:	Anton Sanjaya<br />
                Jenis Kelamin	:	Laki - Laki<br />
                No. KTP	:	34587357<br />
                Alamat	:	Jl. Perjuangan No. 123 Bandung
                <br />
                  <br />
                Dengan ini mengajukan permohonan izin mendirikan bangunan (IMB) untuk keperluan Tempat untuk Kantor yang berlokasi di Jalan Melati Putih Gg. Mawar No. 10B RT. 02 RW. 05 Kelurahan Melodi Indah, Kecamatan Musik Kaler Kota Bandung 32989. Dengan spesifikasi bangunan adalah memiliki luas tanah 1000 meter persegi dan luas bangunan 600 meter persegi dengan memiliki 2 (dua) tingkat lantai.
                <br />
                  <br />
                Untuk melengkapi permohonan izin ini, bersama surat ini juga kami lampirkan surat – surat yang diperlukan.
                <br />
                  <br />
                Demikian surat ini kami buat. Atas perhatian dan kerjasama Bapak Ibu, kami ucapkan terima kasih dan harap maklum.
                <br />
                  <br />
                Pemohon
                <br />
                  <br />
                  <br />
                Anton Sanjaya
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin Mendirikan Bangunan</p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p>
                  Medan, 22 Maret 2018
                <br />
                  <br />
                Kepada Yth<br />
                Direktur PT. Maju Mundur<br />
                Jl. Perjuangan No. 123
                Medan
                <br />
                  <br />
                Dengan Hormat,
                <br />
                  <br />
                Yang bertanda tangan dibawah ini :
                <br />
                  <br />
                Nama	:	Anton Sanjaya<br />
                NIP	:	34587387<br />
                Jabatan	:	Staff Produksi<br />
                Mengajukan permohonan izin
                <br />
                  <br />
                tidak dapat bekerja disebabkan ada suatu keperluan keluarga yakni menghadiri pemakaman saudara yang berdomisili di Jawa Timur. Adapun pengajuan izin yang saya ajukan selama 3 hari, mulai dari tanggal 22 Maret 2018 sampai dengan 25 Maret 2018.
                <br />
                  <br />
                Demikian Surat permohonan ini saya buat berharap agar Bapak berkenan memberikan izin, atas pemberian izin Bapak, saya mengucapkan terima kasih.
                <br />
                  <br />
                Hormat Saya,
                <br />
                  <br />
                  <br />
                Anton Sanjaya
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Izin Tidak Masuk Kerja</p>
            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default Izin;
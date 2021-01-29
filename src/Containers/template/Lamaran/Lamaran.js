import React from 'react';
import Swal from 'sweetalert2';
import '../../assets/style/homepage.css';

class Lamaran extends React.Component {

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
          12 Surat Tersedia (Lamaran)
            </div>
        <div className="wrapTemplate d-flex">

          <div className="source-html-outer">
            <div className="source-html-outer2" name="source-html-outer" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <div id="1" name="source-html2">
              <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(1)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Medan, 20 November 2020
                      <br />
                  <br />
                      Kepada. Yth. :<br />
                      Pimpinan Toko Buku Nadia
                      <br />
                  <br />
                      Dengan hormat,<br />
                      Sehubungan dengan informasi lowongan pekerjaan di internet yang saya peroleh bahwa Toko Indah Jaya membutuhkan karyawan sebagai Admin.<br />
                      Yang bertandatangan di bawah ini, saya :
                      <br />
                  <br />
                      Nana Lengkap : Mia Khalifa<br />
                      Tempat/Tgl. Lahir : Wonogiri, 18 Juni1990<br />
                      Alamat : Dsn. Pagersari RT 03 RW 01 Desa Sempukerep<br />
                      Domisili : Kp. Sutogunan Jl. Pulanggeni I RT 06/IV, Kal.Tipes, Serengan Kota Surakarta<br />
                      Pendidikan Terakhir : S1<br />
                      Telepon : 0813 9125 4979
                      <br />
                  <br />
                      Mengajukan lamaran pekerjaan sebagai karyawan di perusahaan yang Bapak/Ibu pimpin.
                      <br />
                  <br />
                      Bersama ini saya lampirkan :
                      <br />
                  <br />
                      1.	Fotocopy Ijazah Terakhir<br />
                      2.	Fotocopy Identitas Diri (KTP).<br />
                      3.	Curriculum Vitae<br />
                      4.	Fotocopy Certificate TOEP<br />
                      5.	Transkrip Nilai<br />
                      6.	Pas Foto Terbaru 4 x 6<br />
                  <br />
                  <br />
                      Demikian surat lamaran permohonan pekerjaan yang saya ajukan. Besar harapan saya saya untuk dapat diterima sebagai karyawan diperusahaan yang Bapak/Ibu pimpin . Atas perhatiannya saya ucapkan terima kasih.
                      <br />
                  <br />
                      Hormat saya,
                      <br />
                  <br />
                  <br />
                      Mikhaila
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran Kerja (Admin) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="2" name="source-html" id="2">
              <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(2)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Bandar Lampung, 23 November 2019
                  <br />
                  <br />
                  Kepada Yth.<br />
                  HRD PT. Traveloka Group<br />
                  di Tempat
                  <br />
                  <br />
                  Dengan hormat,
                  Saya yang bertanda tangan dibawah ini :
                  <br />
                  <br />
                  Nama   : Udin Hermawan<br />
                  Ttl    : Medan, 10 Mei 1998<br />
                  Alamat : Tanjung Karang, RT 01 RW 03 Bandar Lampung<br />
                  No. HP : 085 768 207 239
                  <br />
                  <br />
                  Dengan ini mengajukan surat lamaran pekerjaan kepada Bapak / Ibu Pimpinan untuk diterima menjadi karyawan di perusahaan yang Bapak / Ibu Pimpin. Sebagai bahan pertimbangan bersama ini saya lampirkan :
                  <br />
                  <br />
                  •	Fotocopy Ijazah Terakhir<br />
                  •	Daftar Riwayat Hidup<br />
                  •	Fotocopy SKCK<br />
                  •	Fotocopy KTP<br />
                  •	Pas Foto 4×6
                  <br />
                  <br />
                  Demikian untuk menjadikan periksa adanya, besar harapan saya untuk dapat diterima di Perusahaan ini. Atas perhatian dan terkabulnya permohonan ini saya ucapkan Terima kasih.
                  <br />
                  <br />
                  Hormat saya,
                  <br />
                  <br />
                  <br />
                  Udin Hermawan
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran Kerja (Bank) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="3" name="source-html">
              <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(3)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Perihal : Lamaran pekerjaan
                  <br />
                  <br />
                  Kepada Yth.<br />
                  Pimpinan HRD Pabrik Tahu bundar<br />
                  Di Tempat
                  <br />
                  <br />
                  Dengan hormat,Sesuai dengan adanya informasi lowongan pekerjaan sebagai staff produksi di Pabrik Tahu Bundar. Saya tertarik dan ingin melamar posisi tersebut.
                  Berikut data singkat saya:
                  <br />
                  <br />
                  Nama          : Ahmad Rahman<br />
                  Ttl           : Sulawesi, 12 Mei 1993<br />
                  Jenis Kelamin : Laki – laki<br />
                  Agama         : Islam<br />
                  Pendidikan Terakhir : Strata satu<br />
                  Alamat        : Jl. Merah Kuning Hijau No. 65 BNo HP : 085 213 345 786
                  <br />
                  <br />
                  Berikut ini sebagai berkas pelengkap, saya melampirkan.
                  <br />
                  <br />
                  1.	Curriculum Vitae ( CV )<br />
                  2.	FC Ijazah Terakhir yang telah Dilegalisir asli<br />
                  3.	FC Transkip Nilai yang telah Dilegalisir asli<br />
                  4.	FC Kartu Keluarga<br />
                  5.	FC Sertifikat<br />
                  6.	Surat Pengalaman Pekerjaan<br />
                  7.	Pas Foto Terbaru ukuran 4X6
                  <br />
                  <br />
                  Demikian surat lamaran ini dibuat. Saya sangat berharap besar dapat bergabung di Pabrik Tahu Bundar. Atas perhatian dan kesempatannya saya ucapkan terima kasih.
                  <br />
                  <br />
                  Hormat Saya
                  <br />
                  <br />
                  <br />
                  Dewa Adi Sentosa
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran Kerja (Pabrik) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="4" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(4)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Malang, 6 Juli 2020
                  <br />
                  <br />
                  Kepada Yth<br />
                  Bapak/Ibu Pimpinan<br />
                  RSU Artha Medica<br />
                  Jl. Samanhudi No.22, Satria, Kec. Binjai, Sumatera Utara 20741
                  <br />
                  <br />
                  Dengan Hormat,<br />
                  Yang bertanda tangan dibawah ini:
                  <br />
                  <br />
                  Nama: Nabila Sari Elva<br />
                  Jenis Kelamin: Perempuan<br />
                  Agama: Islam<br />
                  Tempat dan Tanggal Lahir: Stabat, 02 Januari 1996<br />
                  Pendidikan Terakhir: Lulusan Dokter Spesialis Gigi USU<br />
                  Status: Belum Menikah<br />
                  Alamat: Jl. Perniagaan No. 87 A, Kab. Langkat<br />
                  No. HP / Email: 0812-9078-2345 / nabila.sari899@gmail.com
                  <br />
                  <br />
                  Bersama surat lamaran pekerjaan ini, izinkan saya mengajukan diri sebagai dokter spesialis gigi yang bertugas di Rumah Sakit Adam Malik Medan, sesuai dengan posisi yang dibutuhkan.
                  Sebagai bahan pertimbangan berikut ini saya lampirkan:
                  <br />
                  <br />
                  1.	Daftar Riwayat Hidup<br />
                  2.	Fotokopi Kartu Tanda Penduduk (KTP)<br />
                  3.	Fotokopi Ijasah Terakhir (dilegalisir)<br />
                  4.	Surat keterangan Berbadan Sehat dari Rumah Sakit<br />
                  5.	Fotokopi Surat Keterangan Catatan Kepolisian (SKCK)<br />
                  6.	Surat Pengalaman Kerja<br />
                  7.	Hasil Rapid Test Covid-19 (Hasil Negatif)<br />
                  8.	Pas Foto 4 x 6 sebanyak 3 Lembar
                  <br />
                  <br />
                  Saya berharap agar diberi kesempatan wawancara sehingga saya dapat menjelaskan potensi dan kemampuan saya secara mendalam. Atas perhatiannya saya ucapkan banyak terima kasih.
                  <br />
                  <br />
                  Hormat saya,
                  <br />
                  <br />
                  <br />
                  Nabila Sari Elva
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran Kerja (Dokter) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="5" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(5)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Hal : lamaran pekerjaan
                  <br />
                  <br />
                  Kepada Yth.<br />
                  Bpk / Ibu Personalia<br />
                  PT. Bintang Jaya Terus<br />
                  Jl. Pendawa Langkat No. 276<br />
                  Sumatera Barat
                  <br />
                  <br />
                  Dengan hormat,<br />
                  Seperti dengan informasi adanya lowongan pekerjaan dari PT. Bintang Jaya Terus yang saya temukan dari surat kabar Surya Darma tanggal 5 Mei 2018. Saya bermaksud untuk mengajukan lamaran pekerjaan dan ingin sekali bergabung di PT. Bintang Jaya Terus. Adapun posisi pekerjaan yang saya inginkan adalah staff pemasaran.
                  <br />
                  <br />
                  Berikut ini adalah data singkat saya :
                  <br />
                  <br />
                  Nama         : Arron Jhon Kinder Bieber<br />
                  Ttl          : Padang Panjang, 25 Oktober 1994<br />
                  Pendidikan Terakhir : S2<br />
                  Alamat       : Jl. Binjai Timur No. 78a<br />
                  Telepon      : 0876 6785 0987<br />
                  Status       : Menikah
                  <br />
                  <br />
                  Pada saat saya membuat surat ini, saya benar – benar dalam kondisi sehat, baik jasmani maupun rohani. Memiliki kemampuan bahasa asing yang unggul, berdedikasi tinggi, loyalitas tanpa batas serta mampu mengoperasikan computer dengan sangat mahir.
                  <br />
                  <br />
                  Saya lampirkan berkas untuk bahan pertimbangan :
                  <br />
                  <br />
                  1. Daftar Riwayat Hidup<br />
                  2. Foto copy ijazah S1 dilegalisir<br />
                  3. Foto copy transkrip nilai<br />
                  4. Foto copy sertifikat kursus dan pelatihan<br />
                  5. Pas photo yang terbaru<br />
                  6 Foto copy SKCK
                  <br />
                  <br />
                  Demikianlah surat permohonan pekerjaan saya buat. Besar harapan saya untuk maju pada waktu interview dan tes. Atas perhatiannya saya ucapkan terima kasih banyak.
                  <br />
                  <br />
                  Hormat saya
                  <br />
                  <br />
                  <br />
                  Arron Jhon Kinder Bieber
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran (Fresh Graduate) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Medan, 20 November 2020
                      <br />
                  <br />
                      Kepada. Yth. :<br />
                      Pimpinan Toko Buku Nadia
                      <br />
                  <br />
                      Dengan hormat,<br />
                      Sehubungan dengan informasi lowongan pekerjaan di internet yang saya peroleh bahwa Toko Indah Jaya membutuhkan karyawan sebagai Admin.<br />
                      Yang bertandatangan di bawah ini, saya :
                      <br />
                  <br />
                      Nana Lengkap : Mia Khalifa<br />
                      Tempat/Tgl. Lahir : Wonogiri, 18 Juni1990<br />
                      Alamat : Dsn. Pagersari RT 03 RW 01 Desa Sempukerep<br />
                      Domisili : Kp. Sutogunan Jl. Pulanggeni I RT 06/IV, Kal.Tipes, Serengan Kota Surakarta<br />
                      Pendidikan Terakhir : S1<br />
                      Telepon : 0813 9125 4979
                      <br />
                  <br />
                      Mengajukan lamaran pekerjaan sebagai karyawan di perusahaan yang Bapak/Ibu pimpin.
                      <br />
                  <br />
                      Bersama ini saya lampirkan :
                      <br />
                  <br />
                      1.	Fotocopy Ijazah Terakhir<br />
                      2.	Fotocopy Identitas Diri (KTP).<br />
                      3.	Curriculum Vitae<br />
                      4.	Fotocopy Certificate TOEP<br />
                      5.	Transkrip Nilai<br />
                      6.	Pas Foto Terbaru 4 x 6<br />
                  <br />
                  <br />
                      Demikian surat lamaran permohonan pekerjaan yang saya ajukan. Besar harapan saya saya untuk dapat diterima sebagai karyawan diperusahaan yang Bapak/Ibu pimpin . Atas perhatiannya saya ucapkan terima kasih.
                      <br />
                  <br />
                      Hormat saya,
                      <br />
                  <br />
                  <br />
                      Mikhaila
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran Kerja (Guru) </p>
            </div>
          </div>



          {/* 6 surat sisa */}

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Medan, 20 November 2020
                      <br />
                  <br />
                      Kepada. Yth. :<br />
                      Pimpinan Toko Buku Nadia
                      <br />
                  <br />
                      Dengan hormat,
                      <br />
                  <br />
                      Sesuai dengan iklan lowongan kerja pada situs nomis.id tanggal 15 juni 2019. Saya mengajukan diri untuk bergabung di PT. Maju Mundur Sukses sebagai Akutansi. Adapun data diri saya sebagai berikut:
                      <br />
                  <br />
                      Mengajukan lamaran pekerjaan sebagai karyawan di perusahaan yang Bapak/Ibu pimpin.
                      <br />
                  <br />
                      Berikut ini sebagai berkas pelengkap, saya melampirkan.
                      <br />
                  <br />
                      Nama       : Oky Laily Ulya, AMd<br />
                      Ttl        : Medan, 25 Desember 1986<br />
                      Umur       : 22 tahun<br />
                      Pendidikan Terakhir  : Politeknik Negeri Medan (D3)<br />
                      Alamat     : Jl. Jendral Sudirman No.45<br />
                      Telepon    : 085210556358<br />
                      E-mail     : okylaily_ulya@gmail.com
                      <br />
                  <br />
                      Saya memiliki kondisi kesehetan yang baik dari segi jasmani dan juga rohani, saya bisa berbahasa inggris secara lisan dan tulisan. Lulus dengan predikat terbaik dari jurusan akutansi di Politeknik Negeri Medan. Saya biasa bekerja dengan menggunakan komputer, seperti MS Office, Surat menyurat dalam bahasa indonesia dan inggris, dan saya juga terbiasa bekerja dengan internet.
                      <br />
                  <br />
                      Saat ini saya masih bekerja sebagai staaf akutansi di PT. Musi Mas, Saya terbiasa bekerja dengan tim dan juga saya sangat bisa diandalkan bekerja secara mandiri.
                      <br />
                  <br />
                      Sebagai bahan pertimbangan, berikut saya lampirkan :
                      <br />
                  <br />
                      1. CV.<br />
                      2. Fotocopy  Ijazah D3 dan transkrip nilai.<br />
                      3. Fotocopy sertifikat kursus/pelatihan.<br />
                      4. Pas Foto terbaru.
                      <br />
                  <br />
                      Demikian surat lamaran permohonan pekerjaan yang saya ajukan. Besar harapan saya saya untuk dapat diterima sebagai karyawan diperusahaan yang Bapak/Ibu pimpin . Atas perhatiannya saya ucapkan terima kasih.
                      <br />
                  <br />
                      Hormat saya,
                      <br />
                  <br />
                  <br />
                      Mikhaila
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran Kerja (Akuntansi) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Medan, 16 Juni 2019<br />
                  Hal             : Lamaran Pekerjaan<br />
                  Lampiran  : 8 Lembar
                  <br />
                  <br />
                  Kepada<br />
                  Yth. Bapak/Ibu HRD<br />
                  WILMAR GROUP MEDAN
                  <br />
                  <br />
                  Jl. Kapten Baru Sihombing Percut, Medan Estate, Deli Serdang<br />
                  Sumatera Utara 20371 – Indonesia
                  <br />
                  <br />
                  Dengan Hormat,<br />
                  Berdasakan informasi yang saya baca dari situs Medanloker.com pada tanggal 08 Juni 2019. Melalui email ini saya bermaksud mengajukan lamaran untuk berkerja di   PT. WILMAR GROUP MEDAN  sebagai Content Creator.
                  <br />
                  <br />
                  Berikut ini data singkat diri saya :
                  <br />
                  <br />
                  Nama        : Arron Prayoga
                  Ttl         : Karang Rejo, 20 Januari 1996
                  Pendidikan akhir   : Diploma III – Teknik Telekomunikasi
                  Alamat      : Jl. Pendawa Dusun Cikal Bakal Desa Karang Rejo Kec. Stabat
                  HP          : 08887994867
                  Email       : arronprayoga6@gmail.com
                  <br />
                  <br />
                  Saya memiliki kondisi kesehatan yang baik, berpenampilan menarik, mampu membangun komuniasi dengan baik dan mampu berkerja secara personal maupun tim. Saya mampu berbahasa inggris dengan baik secara lisan maupun tulisan. Dengan pengalaman kerja didunia telkologi selama 2 tahun saya mampu berkerja menggunakan aplikasi komputer seperti Program SAP, Microsof Visio, Microsoft Access, Microsoft Excel, Photoshop, Saya juga Memahami beberapa bidang IT seperti HTML, Blogger, WordPress dengan Hosting, Memiliki Pengalaman di Bidang SEO ( Search Engine Optimization ) & SEM ( Search Engine Marketing ), Internet Marketing dan dapat mengetik dengan cepat.<br />
                  <br />
                  Sebagai bahan pertimbangan, saya lampirkan :<br />
                  1.	    Pas Photo Berwarna<br />
                  2.	    Photo Full Body.<br />
                  3.	    Daftar Riwayat Hidup ( CV / Resume ).<br />
                  4.	    Fotocopy KTP.<br />
                  5.	    Fotocopy Ijazah.<br /><br /><br />
                  6.	    Fotocopy Transkrip Nilai.
                  7.	    Fotocopy Sertifikat Pendukung
                  8.	    Fotocopy Sertifikat Tolef<br />
                  <br />
                  Demikian surat pemohonan pekerjaan ini saya buat dengan sebenar-benarnya. Saya sangat berharap Bapak/Ibu bersedia untuk memberikan kesempatan tes dan wawancara kepada saya, sehingga saya dapat menjelaskan secara lebih rinci tentang potensi yang saya miliki. Atas perhatian Ibu saya ucapkan terimakasih.
                  <br />
                  <br />
                  Hormat Saya,
                  <br />
                  <br />
                  <br />
                  Arron Prayoga, A.Md
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran Kerja (PT) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Medan, 20 November 2020
                      <br />
                  <br />
                      Kepada. Yth. :<br />
                      Pimpinan Toko Buku Nadia
                      <br />
                  <br />
                      Dengan hormat,<br />
                      Sehubungan dengan informasi lowongan pekerjaan di internet yang saya peroleh bahwa Toko Indah Jaya membutuhkan karyawan sebagai Admin.<br />
                      Yang bertandatangan di bawah ini, saya :
                      <br />
                  <br />
                      Nana Lengkap : Mia Khalifa<br />
                      Tempat/Tgl. Lahir : Wonogiri, 18 Juni1990<br />
                      Alamat : Dsn. Pagersari RT 03 RW 01 Desa Sempukerep<br />
                      Domisili : Kp. Sutogunan Jl. Pulanggeni I RT 06/IV, Kal.Tipes, Serengan Kota Surakarta<br />
                      Pendidikan Terakhir : S1<br />
                      Telepon : 0813 9125 4979
                      <br />
                  <br />
                      Mengajukan lamaran pekerjaan sebagai karyawan di perusahaan yang Bapak/Ibu pimpin.
                      <br />
                  <br />
                      Bersama ini saya lampirkan :
                      <br />
                  <br />
                      1.	Fotocopy Ijazah Terakhir<br />
                      2.	Fotocopy Identitas Diri (KTP).<br />
                      3.	Curriculum Vitae<br />
                      4.	Fotocopy Certificate TOEP<br />
                      5.	Transkrip Nilai<br />
                      6.	Pas Foto Terbaru 4 x 6<br />
                  <br />
                  <br />
                      Demikian surat lamaran permohonan pekerjaan yang saya ajukan. Besar harapan saya saya untuk dapat diterima sebagai karyawan diperusahaan yang Bapak/Ibu pimpin . Atas perhatiannya saya ucapkan terima kasih.
                      <br />
                  <br />
                      Hormat saya,
                      <br />
                  <br />
                  <br />
                      Mikhaila
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran (via email) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Yth. Bapak Manajer<br />
                      PTP. NusantarA-II (Persero)<br />
                      PG. Kwala Madu
                      <br />
                  <br />
                      Hal : PERMOHONAN MASUK KERJA
                      <br />
                  <br />
                      Dengan hormat,<br />
                      Sehubungan dengan informasi lowongan pekerjaan di internet yang saya peroleh bahwa Toko Indah Jaya membutuhkan karyawan sebagai Admin.
                      <br />
                      Yang bertandatangan di bawah ini, saya :
                      <br />
                  <br />
                      Nana Lengkap : ARRON PRAYOGA<br />
                      Ttl : Wonogiri, 18 Juni1990<br />
                      Alamat       : Dsn. Pagersari RT 03 RW 01 Desa Sempukerep<br />
                      Domisili     : Kp. Sutogunan Jl. Pulanggeni I RT 06/IV, Kal.Tipes, Serengan Kota Surakarta<br />
                      Pendidikan Terakhir : S1<br />
                      Telepon      : 0813 9125 4979
                      <br />
                  <br />
                      Datang kehadapan Bapak memohon agar sudi kiranya/berkenan menerima saya untuk bekerja/mengabdi di PTP. Nusantara-II PG. Kwala Madu yang Bapak pimpin.
                      <br />
                  <br />
                      Sebagai pertimbangan/persyaratan yang dibutuhkan turut saya lampirkan :?                      <br />
                  <br />
                  <br />
                      1.	Foto copy izajah D3 = 1 lembar.
                      2.	Foto copy Kartu Keluarga ( KK ) = 1 lembar.
                      3.	Foto copy KTP = 2 lembar.
                      4.	Pasfoto 3×4 = 1 lembar.
                      5.	Daftar Riwayat Hidup = 1 lembar.
                      <br />
                  <br />
                      Demikian permohonan ini saya ajukan dan besar harapan saya semoga Bapak berkenan menerimanya.                      <br />
                  <br />
                      Hormat saya,
                      <br />
                  <br />
                  <br />
                        -ARRON PRAYOGA-
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran Kerja (PTPN) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Hal : Lamaran Pekerjaan
                  <br />
                  <br />
                  Kepada Yth.
                  HRD  Hotel Paladium Medan
                  Sumatera Utara – 20987
                  <br />
                  <br />
                  Dengan hormat,
                  Dengan ini saya yang bertanda tangan di bawah ini.
                  <br />
                  <br />
                  Nama                                 : Sakura Saske
                  Tempat, Tanggal Lahir    : Binjai, 24 Nomvember 1993
                  Jenis Kelamin                  : Perempuan
                  Alamat                               : Jl. Binjai Barat no. 67 a
                  Pendidikan Terakhir        : Diploma III – Parawisata
                  Telepon                             : 0852 4545 6868
                  <br />
                  <br />
                  Bermaksud untuk melamar pekerjaan sebagai staff di Hotel Paladium Medan, berdasarkan informasi yang saya dapatkan di web resmi Hotel Paladium Medan. Saya ingin melamar posisi Waiters.
                  <br />
                  <br />
                  Berikut ini berkas tambahan untuk pertimbangan :
                  <br />
                  <br />
                  1.	Pas foto 4×6 berwarna terbaru<br />
                  2.	Daftar Riwayat Hidup<br />
                  3.	Fotolopi KTP<br />
                  4.	Fotokopi Ijazah<br />
                  5.	Fotokopi sertifikat-sertifikat keahlian
                  <br />
                  <br />
                  Demikianlah surat ini saya buat dengan sebenarnya. Saya tentu sangat berharap bisa bergabung dalam tim Hotel Paladium Medan. Atas perhatiannya saya ucapkan banyak terima kasih
                  <br />
                  <br />
                  Hormat Saya,
                  <br />
                  <br />
                  <br />
                  Sakura Saske
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran Kerja (Hotel) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Medan, 13 Juni 2019
                  <br />
                  <br />
                  Kepada Yth, <br />
                  HRD PT Sumber Alfaria Trijaya. Tbk <br />
                  Jl. Industri No.99, Tj. Morawa B, Tj. Morawa
                  <br />
                  <br />
                  Dengan hormat, <br />
                  Bersama surat lamaran kerja ini saya bermaksud untuk melamar pekerjaan di PT. Sumber Alfaria Trijaya, Tbk untuk posisi sebagai Kasir (KSR).
                  <br />
                  <br />
                  Saya yang bertanda tangan dibawah ini:
                  <br />
                  <br />
                  Nama             : 23 Juli 1996 <br />
                  Umur             : 23 Tahun <br />
                  Jenis Kelamin    : Laki-Laki <br />
                  Pendidikan       : SMA Tahun 2015 <br /> <br />
                  No. Telepon      : 085210695847
                  Email            : andrealfatih99@gmail.com
                  Alamat           : Jl. Jendral Sudirman no.89
                  <br />
                  <br />
                  Sebagai bahan pertimbangan, bersama ini saya lampirkan:
                  <br />
                  <br />
                  1. Daftar Riwayat Hidup / Curriculum Vitae (CV) <br />
                  2. Fotokopi Ijazah SMK dilegalisir <br />
                  3. Fotokopi Daftar Nilai dilegalisir <br />
                  4. Fotokopi Surat Keterangan Catatan Kepolisian dilegalisir <br />
                  5. Fotokopi Kartu Kuning <br />
                  6. Fotokopi KTP <br />
                  7. Pas Photo 4×6 <br />
                  8. Surat Keterangan Sehat dari Dokter
                  <br />
                  <br />
                  Demikian surat lamaran pekerjaan ini saya buat dengan harapan saya dapat kesempatan ke tahap selanjutnya, Atas Perhatian Bapak/Ibu saya ucapat banyak terima kasih.
                  <br />
                  <br />
                  Hormat saya,
                  Ttd.
                  <br />
                  <br />
                  <br />
                  Andre altatih
              </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Lamaran Kerja (Alfamart) </p>
            </div>
          </div>



        </div>
      </div>
    )
  }
}

export default Lamaran;
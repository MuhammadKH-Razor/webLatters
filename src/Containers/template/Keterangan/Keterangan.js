import React from 'react';
import Swal from 'sweetalert2';
import '../../assets/style/homepage.css';

class Keterangan extends React.Component {

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
          10 Surat Tersedia (Keterangan)
            </div>
        <div className="wrapTemplate d-flex">

          <div className="source-html-outer">
            <div className="source-html-outer2" name="source-html-outer" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(1)}>Download</button>
              <div id="1" name="source-html2">
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  SURAT KETERANGAN
                        <br />
                  <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                    Yang bertanda tangan dibawah ini:
                        <br />
                    <br />
                        Nama Lengkap	:	Alfan Syahputra	<br />
                        Tempat, Tanggal Lahir	:	Malang, 28 Mei 1998	<br />
                        Jenis Kelamin	:	Laki-laki	<br />
                        No. KTP	:	3557500989883644	<br />
                        Alamat Lengkap	:	Jl Pattimura Desa Sungelebak
                        <br />
                    <br />
                        Dengan dibuatnya surat keterangan ini saya menyatakan dengan sungguh-sungguh bahwasannya:
                        <br />
                    <br />
                        Hingga saat ini saya belum terikat kontrak kerja dengan perusahaan atau instansi manapun.
                        Saya bersedia untuk diberikan tugas dimanapun cabang perusahaan yang tersedia di seluruh Indonesia ini.
                        Saya bersedia bertugas dan sanggup untuk bekerja sesuai dengan waktu yang sudah ditetapkan.
                        Saya berjanji tidak akan mengundurkan diri sebelum masa kontrak kerja yang saya punya berakhir.
                        Saya berjanji tidak akan mengambil libur cuti selama masih dalam waktu bekerja.
                        <br />
                    <br />
                        Demikian surat keterangan ini saya buat dengan bersungguh-sungguh tanpa adanya unsur keterpaksaan dari pihak manapun. Jika di kemudian hari saya melakukan tindakan pelanggaran yang tidak sesuai dengan surat keterangan yang saya tuliskan, saya bersedia menerima segala konsekuensi yang sesuai dengan hukuman yang berlaku.
                        <br />
                    <br />
                        Malang, 21 Juni 2018
                        <br />
                    <br />
                    <br />
                        Materai 6000
                        <br />
                    <br />
                    <br />
                        Alfan Syahputra
                    </p>
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Keterangan Biasa (Umum) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="2" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(2)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  SURAT KETERANGAN KEHILANGAN
                    <br />
                  <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                    Yang bertanda tangan dibawah ini:
                    <br />
                    <br />
                    Nama Lengkap	:	Anisa Mahmudah	<br />
                    Alamat Lengkap	:	Desa Dampit, Lubeg, Lumajang	<br />
                    Jenis Kelamin	:	Perempuan	<br />
                    Kebangsaan	:	Indonesia	<br />
                    No. KTP	:	357543344342353
                    <br />
                    <br />
                    Dengan ini saya menuliskan surat keterangan ini karena menyatakan telah kehilangan STNK bermotor tepatnya pada hari Sabtu  tanggal 6 februari 2017
                    <br />
                    <br />
                    Merk Kendaraan	:	Yamaha XX	<br />
                    No. Rangka	:	Xxx	<br />
                    No. Mesin	:	Xxxx	<br />
                    No. Polisi	:	A425SSS	<br />
                    Atas Nama	:	Anita Mahmudah	<br />
                    Alamat Lengkap	:	Desa Dampit, Lubeg, Lubeg, Lumajang
                    <br />
                    <br />
                    Dokumen tersebut telah hilang ketika saya melakukan perjalanan dari Jl. Songgoriti hingga dengan Jembatan Kalilanang.
                    <br />
                    <br />
                    Demikianlah surat keterangan kehilangan ini saya buat dengan sebenar-benarnya tanpa adanya sebuah kepalsuan, agar bisa digunakan untuk keperluan pengurusan STNK kembali. Jika ada di kemudian hari ada kesalahan dalam penulisan surat ini saya bersedia menerima konsekuensi dan resikonya.
                    <br />
                    <br />
                    Lumajang, 13 Januari 2017
                    <br />
                    <br />
                    Yang memberi keterangan
                    <br />
                    <br />
                    <br />
                    Anisa Mahmudah
                    </p>
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Keterangan Kehilangan </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="22" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(22)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  OSIS SMA Negeri 1 Cimahi<br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jl. Alun-alun Raya No. 12 Cimahi
                    <br />
                    Telp. (022) 7270231
                    </p>
                </p>
                <p>
                  Nomor : 700/ 181 /BKDD/ IX – 2013
                    <br />
                  <br />
                    Yang bertanda tangan dibawah ini:
                    <br />
                  <br />
                    Nama    : Dr. Mulyadi, M. Si.<br />
                    NIP     : 16970413 19330 2 044<br />
                    Pangkat Gol. Ruang  : Pembina Tkt. I/ IX a<br />
                    Jabatan : sekretaris BKDD kab. Jombang
                    <br />
                  <br />
                    Dengan ini menerangkan dengan sebenar-benarnya kepada:
                    <br />
                  <br />
                    Nama    : Bambang Hermawan<br />
                    NIM     : 20182011321<br />
                    Fakultas: Information Communication and Technology<br />
                    Jurusan : Tekhnologi dan informasi
                    <br />
                  <br />
                    Bahwa nama tersebut atau yang bersangkutan merupakan mahasiswa Universitas Multimedia Nusantara yang sedang melakukan magang di kantor BKDD Kab. Jombang pada bagian perencanaan dan pengembangan yang di mulaipada tanggal 5 Mei 2013 hingga saat ini.
                    <br />
                  <br />
                    Demikian surat keterangan ini dibuat untuk digunakan sebagaimana mestinya.
                    <br />
                  <br />
                    Jombang, 15 Juni 2013
                    <br />
                  <br />
                    a.n. KEPALA BADAN KEPENGURUSAN dan DIKLAT DAERAH KABUPATEN JOMBANG
                    <br />
                  <br />
                    SEKRETARIS,
                    <br />
                  <br />
                  <br />
                    (Dr. Mulyadi, M. Si.)
                    <br />
                  <br />
                    Pembina Tkt. I
                    <br />
                  <br />
                  <br />
                    NIP : 16970413 19330 2 044
                    </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Keterangan Magang Kerja </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="4" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(4)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PT. Gudang Gula Indonesia
                    <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jl. Woltermongisidi No. 78 Surabaya, Indonesia
                    </p>
                </p>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Surabaya, 01 Mei 2018
                    <br />
                  <br />
                    Perihal: Surat Keterangan Gaji<br />
                    No.: 204/Juli/HRD/2018
                    <br />
                  <br />
                    Saya yang bertanda tangan di bawah ini:
                    <br />
                  <br />
                    Nama: Briana Ramadhan<br />
                    Jabatan: Manajer Personalia
                    <br />
                  <br />
                    Menerangkan dengan sebenarnya bahwa:
                    <br />
                  <br />
                    Nama: Indra Adikusuma<br />
                    Jabatan: Staff Promosi
                    <br />
                  <br />
                    Hingga saat ini tanggal 01 Mei 2018 masih aktif bekerja dan perusahaan memberikan penghasilan dengan rincian sebagai berikut:
                    <br />
                  <br />
                    Gaji Pokok: Rp. 3.000.000<br />
                    Tunjangan Makan: Rp. 500.000<br />
                    Tunjangan Perumahan: Rp. 500.000<br />
                    Tunjangan Transportasi: Rp. 200.000
                    <br />
                  <br />
                    Sehingga total gaji yang diperolehnya ialah sebesar Rp. 4.200.000,- (empat juta dua ratus ribu rupiah).
                    <br />
                  <br />
                    Demikian surat keterangan penghasilan ini sebagai konfirmasi penghasilan staf kami.
                    <br />
                  <br />
                    Hormat Kami,
                    <br />
                  <br />
                  <br />
                    Briana Ramadhan
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Keterangan Penghasilan </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="5" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(5)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Pemerintah Provinsi Khusus Ibukota Jakarta<br />
                    Pengurus Rukun Tetangga 000/00<br />
                    Kelurahan Tegal Alur, Kecamatan Kali Deres<br />
                    Kota Administrasi Jakarta Barat
                    <br />
                  <br />
                    Surat Keterangan Domisili<br />
                    Nomor : 213/SKD/VIII/2018
                    </p>
                <p style={{ position: 'relative', fontWeight: 'normal', textAlign: 'left' }}>
                  Yang bertanda tangan dibawah ini:
                    <br />
                  <br />
                    Nama: Chandra Hamid<br />
                    Jabatan: Ketua RT 000/00<br />
                    Alamat: Jalan Menceng Raya RT 03/11
                    <br />
                  <br />
                    menerangkan bahwa:
                    <br />
                  <br />
                    Nama: Anita Nasution<br />
                    Tempat, Tanggal Lahir: Bandung, 6 Juli 1982<br />
                    Jenis Kelamin: Perempuan<br />
                    Pekerjaan: Wiraswasta<br />
                    Agama: Islam<br />
                    Status Perkawinan: Janda<br />
                    Kewarganagaraan: Indonesia<br />
                    Alamat: Jalan Menceng Raya RT 03/12
                    <br />
                  <br />
                    benar tinggal berdomisili di Tegal Alur, Kalideres, Jakarta Barat.
                    <br />
                  <br />
                    Demikian surat keterangan domisili ini dibuat sebagai konfirmasi atas domisili Ibu Anita Nasution di tempat yang telah disebutkan.
                    <br />
                  <br />
                    Jakarta, 21 Agustus 2018<br />
                    Ketua RT 009/07
                    <br />
                  <br />
                  <br />
                    Chandra Hamid

                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Keterangan Domisili </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p>
                  Jakarta, 1 April 2018
                    <br />
                  <br />
                    Kepada Yth.<br />
                    Bapak/Ibu Pimpinan PT Pejuang Aksara<br />
                    di Tempat
                    <br />
                  <br />
                    Dengan Hormat,
                    <br />
                  <br />
                    Saya yang bertanda tangan di bawah ini:
                    <br />
                  <br />
                    Nama: Citra Lestari<br />
                    Alamat: Jalan Menceng Raya RT 03/13<br />
                    Jabatan: Staff Kreatif
                    <br />
                  <br />
                    Melalui surat ini, saya meminta izin kepada Bapak Adrian Darmawan selaku Direktur Utama, bahwa saya tidak masuk kerja hari ini karena sedang sakit.
                    <br />
                  <br />
                    Sebagai bukti tambahan, saya telah melampirkan surat keterangan dokter.
                    <br />
                  <br />
                    Demikian surat izin ini saya buat dengan sadar dan benar. Atas perhatian dari Bapak, saya mengucapkan banyak terimkasih.
                    <br />
                  <br />
                    Hormat Saya
                    <br />
                  <br />
                  <br />
                    Citra Lestari
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Keterangan Sakit </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="7" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(7)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  RS. Keluar Bugar<br />
                    Jl. Raya Kebugaran Km. 7 Bangeran, Bumirejo, Lendah, Kulon Progo<br />
                    Telp : (0274) 62398298, Faks : (0274) 872352007
                    <br />
                  <br />
                    Surat Keterangan Sehat<br />
                    No: 22/RS-SS/XI/2018
                  </p>
                <p>
                  Yang bertanda tangan dibawah ini, Dokter Rumah Sakit Keluar Bugar menerangkan dengan sesungguhnya bahwa:
                    <br />
                  <br />
                    Nama: Indah Mayangsari<br />
                    Jenis Kelamin: Perempuan<br />
                    Umur: 23<br />
                    Alamat: Jogahan RT. 30 RW. 14, Bumirejo, Lendah, Kulon Progo<br />
                    Pekerjaan: Mahasiswa<br />
                    Hasil Pemeriksaan:<br />
                    Tinggi/Berat Badan: 160 cm / 50 kg<br />
                    Tekanan Darah: 120/80 mmHg<br />
                    Golongan Darah: B<br />
                    Buta Warna: Tidak
                    <br />
                  <br />
                    telah diperiksa dengan teliti dan dinyatakan dalam keadaan sehat.
                    <br />
                  <br />
                    Surat Keterangan Sehat ini dibuat guna keperluan perpanjangan SIM C.
                    Lendah, 21 Maret 2018
                    <br />
                  <br />
                    Dokter Pemeriksa,
                    <br />
                  <br />
                  <br />
                    dr. Jamilah Naulia
                  </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Keterangan Sehat  </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="8" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(8)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Surat Keterangan Ahli Waris
                  </p>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Kami yang bertanda tangan di bawah ini
                    <br />
                  <br />
                    ahli waris dari almarhun Bapak Kamal dengan disaksikan oleh:
                    <br />
                  <br />
                    Nama: Linda, Usia 48 Tahun<br />
                    Pekerjaan: PNS<br />
                    Alamat: Jl. Sentosa Indah Km. 12 Bantul Yogyakarta
                    <br />
                  <br />
                    Nama: Mamat, Usia 50 Tahun<br />
                    Pekerjaan: Wiraswasta<br />
                    Alamat: Jl. Sentosa Indah Km. 12 Bantul Yogyakarta
                    <br />
                  <br />
                    Dengan ini menerangkan bahwa sesungguhnya dengan sanggup telah diangkat sumpah oleh Bapak Kamal yang bertempat terakhir tinggal di Jl. Sengkuni Km. 11 Samas Kab. Bantul dan pada tanggal 2 Agustus 2017 telah meninggal duni di RS. Sehat Sentosa Bantul.
                    <br />
                  <br />
                    Dari pernikahan almarhum Bapak Kamal bin Nasrullah telah lahir dan kini masih hidup dua orang anak dan satu orang istri yang menjadi ahli waris, dengan rincian sebagai berikut:
                    <br />
                  <br />
                    Prita Sasmita (perempuan), 41 tahun (istri)<br />
                    Odi Samara (laki-laki), 29 tahun (anak)<br />
                    Rara Samira (perempuan), 26 tahun (anak)<br />
                    Demikian kami para ahli waris yang sah dari mendiang Almarhum Bapak Kamal bin Nasrullah.
                    <br />
                  <br />
                    Apabila kelak keterangan kami ini sebagai ahli waris tidak sesuai, sehingga terjadi gugatan dari pihak lain, maka kesalahan sepenuhnya menjadi tanggung jawab dari kami para ahli waris.
                    <br />
                  <br />
                    Sedangkan untuk aparat dan saksi yang turut menandatangai Surat Keterangan Ahli Waris ini dibebaskan dari segala bentuk tuntukan hukum yang terjadi.
                    <br />
                  <br />
                    Bantul, 11 Agustus 2018
                    <br />
                  <br />
                    Para Ahli Waris Tersebut:
                    <br />
                  <br />
                    Prita Sasmita (……….)<br />
                    Odi Samara (………)<br />
                    Rara Samira (………)<br />
                  <br />
                  <br />
                    Saksi-Saksi :
                    <br />
                  <br />
                    Linda (………………)<br />
                    Mamat (………………)
                    <br />
                  <br />
                    Tercatat: Kantor Kecamatan Srandakan Kabupaten Bantul<br />
                    Nomor: 873/ERU/UIO/IX/2018
                    <br />
                  <br />
                    Lurah Srikandi
                    <br />
                  <br />
                  <br />
                    Angoda Indah
                    NIP. 6709550967879
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Keterangan Ahli Waris</p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="9" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(9)}>Download</button>
                <p>
                  <p style={{ fontWeight: 'bold' }}>
                    PT. Gas Silver<br />
                    Jl. Gatot Subroto No. 50
                    Jakarta Pusat<br />
                    Mail: gassilverofficial@oilgas.com<br />
                    Telp/Fax: (021) 6768000/ (021) 575700
                    </p>
                  <br />
                    Jakarta, January 10th, 2020
                    <br />
                  <br />
                    The Embassy of Malaysia
                    Visa Section
                    Jl. H. R. Rasuna Said Kav.X/6 No.1-3, Kuningan
                    Jakarta
                    <br />
                  <br />
                    Subject: Recommendation Letter for Visitor Visa Application
                    <br />
                  <br />
                    To whom it may concern,
                    Herewith to certify that:
                    <br />
                  <br />
                    Name: Agus Salim
                    Date of Birth: June, 9th 1985
                    Address: Jl. Kalibaru Timur VI no. 27 Rt.6/Rw.9, Kemayoran, Jakarta Pusat
                    No. Passport: A 8500906
                    He is a permanent employee of PT. GAS SILVER since 3th Mei 2018 as Administration & Accounting Staff with an employee no: 400050. He will be going to Malaysia for work exchange from Friday, August 30th, 2020, will be returned back to Indonesia and start work again on Monday, October 3th 2022.
                    It would be very appreciated if you could grant her the necessary visa to enter your country at your earliest convenience.
                    <br />
                  <br />
                    Thank you for your kind attention and corporation.
                    <br />
                  <br />
                    Yours sincerely,
                    PT. GAS SILVER
                    <br />
                  <br />
                  <br />
                    Michael Stuart
                    Branch Manager
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Keterangan Kerja (Visa) </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="10" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(10)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  DEPARTEMEN PENDIDIKAN NASIONAL<br />
                    UNIVERSITAS NEGERI SURAKARTA<br />
                    PUSAT ARSIP
                    <br />
                  <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jalan Ir Sutami No. 36 A Surakarta, 57197<br />
                    Telepon (0271) 797889,797123<br />
                  </p>
                    --------------------------------------------
                    <br />
                  <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    SURAT KETERANGAN<br />
                    Nomor : 021/ PAP/ IV/ 15
                    </p>
                </p>
                <p style={{ textAlign: 'left', fontWeight: 'normal', left: 100 }}>
                  Dengan ini kami menyatakan bahwa
                    <br />
                  <br />
                    Nama     : Alexantria<br />
                    NIM      : K7557111<br />
                    Prodi    : Pendidikan Ekonomi BKK PAP<br />
                    Jurusan  : P. IPS
                    <br />
                  <br />
                    Adalah mahasiswa Fakultas Keguruan dan Ilmu Pendidikan UNS yang hendak menjalankan penelitian ilmiah guna penyusunan skripsi yang berjudul ”Efektivitas Fungsi Arsiparis: Studi Kasus di Pusat Arsip UNS Tahun 2014” di Pusat Arsip UNS mulai Bulan Juni 2015 dengan narasumber Ibu Widiati, S.Sos dan Bapak Drs. Badrusan.
                    <br />
                  <br />
                    30 April 2015<br />
                    Kepala Pusat Arsip UNS
                    <br />
                  <br />
                  <br />
                    Drs. Samiawan, M.Si
                    <br />
                    NIP 11611111 198911 3 002
                    </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Keterangan Dinas </p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Keterangan;
import React from 'react';
import Swal from 'sweetalert2';
import '../../assets/style/homepage.css';

class Undangan extends React.Component {

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
          9 Surat Tersedia (Undangan)
        </div>

        <div className="wrapTemplate d-flex">

          <div className="source-html-outer">
            <div className="source-html-outer2" name="source-html-outer" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <div id="1" name="source-html2">
              <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(1)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Undangan Pernikahan
                      <br />
                  <br />
                </p>
                <p>
                  Assalamu alaikum Wr. Wb.
                      <br />
                  <br />
                      Dengan memohon atas rahmat dan ridho Allah SWT, kami bermaksud melaksanakan acara Walimatul Ursy / Tasyakuran Pernikahan anak-anak kami, yang Insya Allah akan diselenggarakan pada,
                      <br />
                  <br />
                      Hari / Tanggal : Sabtu, 25 November 2018<br />
                      Waktu : 11.00 WIB – Selesai<br />
                      Tempat : Jl. Indramayu No. 14, Antapani, Bandung<br />
                  <br />
                  <br />
                      Merupakan suatu kebahagiaan apabila Bapak / Ibu / Saudara / Saudari berkenan untuk hadir dan memberikan do’a restu kepada kedua mempelai.
                      Atas kehadiran dan do’a restu dari Bapak / Ibu / Saudara / Saudari, kami mengucapkan terima kasih.
                      <br />
                  <br />
                      Wassalamu’ alaikum Warahmatullahi Wabarakatuh
                      <br />
                  <br />
                      Kami yang berbahagia,
                      <br />
                  <br />
                      Bp. Sutisna – Ibu Mariyam<br />
                      Aprilia Kartika Dewi – Sultan Zainuddin

                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Undangan Acara Pernikahan </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="2" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(2)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ
                    <br />
                  <br />
                </p>
                <p>
                  Dengan berharap ridha dan rahmat Allah SWT, kami berniat melaksanakan acara pertunangan putra-putri kami,
                    <br />
                  <br />
                    Egi Melgiansyah, SH
                    Putra pertama dari Bapak Bambang Wicaksana, SH dan Ibu Susi Sulastri, S.Pd
                    <br />
                  <br />
                    Siti Jamilah, SH
                    Putri kedua dari Bapak Surya Adiwijaya dan Ibu Suci Handayani
                    <br />
                  <br />
                    Yang insya Allah akan dilaksanakan pada,
                    <br />
                  <br />
                    Hari   : Sabtu, 17 September 2019Pukul : 19.00 WIB<br />
                    Tempat : Rumah Keluarga Bapak Surya Adiwijaya<br />
                    Alamat : Jalan Ahmad Dahlan No. 201, Kuningan – Jawa Barat<br />
                  <br />
                  <br />
                    Kami merasa terhormat dan sangat berbahagia apabila Bapak / Ibu / Saudara / i dapat meluangkan waktunya untuk hadir dan turut memberikan doa restu kepada putra-putri kami.
                    <br />
                  <br />
                    Wassalamu alaikum wr. wb
                    <br />
                  <br />
                    Keluarga Bapak Bambang Wicaksana    <br />
                    Ibu Susi Sulastri
                    <br />
                  <br />
                    Keluarga Bapak Surya Adiwijaya<br />
                    Ibu Suci Handayani
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Undangan Acara Tunangan </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="3" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(3)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  OSIS SMA Negeri 1 Cimahi<br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jl. Alun-alun Raya No. 12 Cimahi
                    <br />
                    Telp. (022) 7270231
                    </p>
                </p>
                <p>
                  <br />
                  <p style={{ position: 'relative', fontWeight: 'normal', left: 100 }}>
                    Bandung , 5 Januari 2019
                    </p>
                    Lamp : –
                    No : 01 / OSIS / UND-EX / III / 19
                    Hal : Undangan PORSENI (Pekan Olahraga dan Seni)
                    <br />
                    Kepada<br />
                    Yth. Pengurus OSIS<br />
                    SMA Negeri 1 Cimahi<br />
                    Jl. Alun-alun Raya No. 1 Cimahi
                    <br />
                  <br />
                    Dengan hormat,<br />
                    Sehubungan dengan akan berakhirnya tahun ajaran 2018 / 2019, kami selaku pengurus OSIS SMA Negeri 1 Cimahi memohon kehadiran perwakilan sekolah untuk mengikuti berbagai perlombaan yang akan diselenggarakan pada,
                    <br />
                  <br />
                    	hari : Senin, 21 Maret 2019 – Kamis, 24 Maret 2019<br />
                    	waktu : Pukul 08.30 WIB s/d selesai<br />
                    	tempat : Lapangan SMA Negeri 1 Cimahi<br />
                    	acara : PORSENI (Pekan Olahraga dan Seni)<br />
                    Karena dirasa cukup pentingnya acara tersebut, maka kami mengharapkan kedatangan para perwakilan sekolah dan untuk dapat hadir tepat waktu.
                    <br />
                  <br />
                    Hormat Kami,
                    <br />
                  <br />
                  <br />
                    Dwi Lestari
                    </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Undangan Pekan Olahraga </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="4" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(4)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Sumedang , 5 Januari 2019
                    </p>
                  <br />
                  Kepada,
                  Yth. Bpk / Ibu / Sdr / i Muhammad Ridwan
                  di tempat
                  <br />
                  <br />
                  Assalamu alaikum Wr. Wb.
                  Untuk mengenang empat puluh hari meninggalnya kakak kami (Rizki Alrafidzi), maka kami bermaksud mengadakan tahlilan yang Insya Allah akan dilaksanakan pada,
                  <br />
                  <br />
                  Hari / Tanggal : Sabtu, 16 Oktober 2018
                  Jam : 12.00 WIB – Selesai
                  Tempat : Jl. Beruang V No.12, Jababeka, Cikarang
                  <br />
                  <br />
                  Merupakan suatu kehormatan bagi kami, jika Bapak / Ibu / Saudara / i dapat hadir pada acara ini. Demikian surat ini kami tulis. Kami mengucapkan terima kasih atas perhatian dan kehadirannya. Wassalamu alaikum wr. wb.
                  <br />
                  <br />
                  Hormat kami,
                  <br />
                  <br />
                  Adik / Paman / atas nama keluarga yang mewakili
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Undangan Tahlilan </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="5" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(5)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PEMERINTAH KABUPATEN BANDUNG BARAT<br />
                  DINAS LINGKUNGAN HIDUP
                  <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jl. Kamarung No. 113, Citeureup 43511, <br />
                  Telp. (022) 7611106, 7651111
                  </p>
                </p>
                <p>
                  <p style={{ position: 'relative', fontWeight: 'normal', left: 100 }}>
                    Sumedang , 5 Januari 2019
                    </p>
                    Nomor : 001 / 71 / V / DLH / KBB / 19<br />
                    Lampiran : –<br />
                    Perihal : Undangan Rapat<br />
                  <br />
                    Kepada
                    Yth. Bapak / Ibu / Saudara / i
                    di tempat
                    <br />
                  <br />
                    Assalamu alaikum. wr. wb.
                    <br />
                  <br />
                    Kami bermaksud untuk mengadakan rapat terkait acara peringatan hari lingkungan hidup sedunia yang jatuh pada tanggal 5 Juni 2019 yang akan dilaksanakan pada,
                    <br />
                  <br />
                    Hari / Tanggal : Kamis, 20 Mei 2019<br /><br />
                    Jam : 09.00 WIB – selesai<br />
                    Tempat : Ruang Rapat Dinas Lingkungan Hidup Bandung Barat
                    <br />
                  <br />
                    Diharapkan Bapak / Ibu dapat hadir tepat waktu mengingat pentingnya pertemuan ini. Demikian pemberitahuan ini kami sampaikan. Kami ucapkan terima kasih atas perhatian dan partisipasinya.
                    <br />
                  <br />
                    Wassalamu alaikum wr. wb.
                    <br />
                  <br />
                    Kepala Dinas Lingkungan Hidup<br />
                    Kabupaten Bandung Barat<br />
                  <br />
                  <br />
                  <br />
                    Ir. H. Ilyas Atmawinata, MM

                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Undangan Dinas </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PEMERINTAH KABUPATEN SUMEDANG<br />
                  DINAS PENDIDIKAN<br />
                  SMP 2 NURUL ILMI SUMEDANG
                  <br />
                  <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Jl. Mawar No.24 Perum Mekar Jaya <br />
                  Telp. (022) 7401203 Sumedang 40228
                  </p>
                </p>
                <br />
                <p>
                  <p style={{ position: 'relative', fontWeight: 'normal', left: 100 }}>
                    Sumedang , 5 Januari 2019
                    </p>
                    Nomor : 05 / I / SMP.02 / 2019<br />
                    Lampiran : –<br />
                    Perihal : Pembagian Raport Kenaikan Kelas
                    <br />
                  <br />
                    Kepada<br />
                    Yth. Orang tua / Wali siswa SMP 2 Nurul Ilmi Sumedang<br />
                    Di Sumedang
                    <br />
                  <br />
                    Dengan hormat,<br />
                    Setelah selesai pelaksanakan kegiatan ulangan akhir semester pada semester genap, pada tahun ajaran 2012 / 2013, seperti biasanya pihak sekolah akan segera melaksanakan acara pembagian raport untuk kelas VII dan VII. Oleh sebab itu, kami mengundang bapak / ibu agar dapat menghadiri acara tersebut yang akan dilaksanakan pada,
                    	Hari / Tanggal : Sabtu, 23 Januari 2019<br />
                    	Waktu : Pukul 09.00 s/d 11.00 WIB<br />
                    	Tempat : Ruang kelas masing-masing<br />
                    	Acara : Pembagian Raport Kenaikan Kelas
                    Sekian surat undangan ini kami sampaikan. Semoga surat ini dapat menjadi perhatian dari para Orang tua / Wali siswa dan dapat digunakan sebagaimana mestinya.
                    <br />
                  <br />
                    Hormat Kami,
                    <br />
                  <br />
                    Kepala Sekolah
                    <br />
                  <br />
                    Dian Purnama, M.Pd.
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Undangan Pembagian Raport </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="7" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(7)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PENGURUS KARANG TARUNA
                  BINA PEMUDA
                    <br />
                  <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Desa Karang Layung, Kecamatan Bojongsoang, Kabupaten Bandung
                    Karang Layung,
                    </p>
                </p>
                <br />
                <p style={{ position: 'relative', fontWeight: 'normal', left: 100 }}>
                  Bandung , 5 Januari 2020
                  </p>
                <p>
                  Nomor : 15 / KTBP / VI / 2019
                  Lampiran : –
                  Perihal : Undangan
                  <br />
                  <br />
                  Kepada
                  Yth. Bapak / Ibu / Sdr / i
                  Di Tempat
                  <br />
                  <br />
                  Dengan hormat,
                  Pemuda Karang Taruna BINA PEMUDA bermaksud mengadakan berbagai macam lomba bagi kalangan dewasa dan anak-anak untuk memperingati hari kemerdekaan Republik Indonesia yang ke-74.
                  Dalam mempersiapkan kegiatan tersebut, kami selaku pengurus bermaksud mengundang Bapak / Ibu / Sdr / i untuk hadir dalam rapat yang akan diadakan pada,
                  <br />
                  <br />
                  Hari / Tanggal : Senin, 2 Juli 2019
                  Pukul : 19.00 WIB – Selesai
                  Tempat : Balai Desa Karang Layung
                  Acara : Merancang susunan acara memperingati HUT RI ke-74
                  <br />
                  <br />
                  Demikian surat undangan ini kami sampaikan. Demi kelancaran acara, diharapkan kehadiran Bapak / Ibu tepat waktu dalam rapat ini. Kami ucapkan terima kasih atas perhatian dan partisipasinya.
                  <br />
                  <br />
                  Ketua Karang Taruna
                  <br />
                  <br />
                  <br />
                  Budiman Wicaksana
                  </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Undangan Rapat  </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="8" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(8)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  KOLAM RENANG DAN PEMANDIAN<br />
                    TIRTA DUTA FAMILY
                    <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Komplek Perumahan DUTA FAMILY<br />
                    Jl. Raya Cicalengka – Rancaekek, Kabupaten Bandung<br />
                    Telp. (022) 72385174
                    </p>
                  <p style={{ position: 'relative', fontWeight: 'normal', left: 100 }}>
                    Bandung, 16 April 2019
                    </p>
                </p>
                <p>
                  Nomor : Man-TDF / 01 / 16 / IV / 2019<br />
                    Lampiran : 1 (satu) lembar<br />
                    Perihal : Undangan
                    <br />
                  <br />
                    Assalamu’alaikum warahmatullahi wabarakatuh
                    <br />
                  <br />
                    Kami haturkan salam ukhuwah islamiyah, semoga kita selalu dalam lindungan Allah Yang Maha Esa, Amin Yaa Robbal Alamin.
                    Kami selaku pihak pengelola kolam renang dan pemandian TIRTA DUTA FAMILY mengundang Bapak / Ibu / Saudara / Saudari pada,
                    <br />
                  <br />
                    	Hari / Tanggal : Minggu, 17 April 2019<br />
                    	Tempat : Komplek Perumahan DUTA FAMILY<br />
                    	Jl. Raya Cicalengka – Rancaekek, Kabupaten Bandung<br />
                    	Waktu : Pukul 09.00 WIB s/d Selesai<br />
                    	Keperluan : Peresmian Kolam Renang dan Pemandian TIRTA DUTA FAMILY
                    <br />
                  <br />
                    Demikian surat undangan ini kami buat dengan sebenar-benarnya. Atas perhatian dan kehadirannya, kami mengucapkan banyak terima kasih.
                    <br />
                  <br />
                    Wassalamu’ alaikum Warahmatullahi Wabarakatuh
                    <br />
                  <br />
                    Manager TIRTA DUTA FAMILY
                    <br />
                  <br />
                    Rahardja Adi Walaka
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Undangan Acara Peresmian </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="9" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(9)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  PERUMAHAN BUMI ADIPURA<br />
                    CLUSTER TULIP RT 03 RW 04
                    <br />
                  <br />
                  <p style={{ textAlign: 'center', fontWeight: 'normal' }}>
                    Kelurahan Rancabolang, Kecamatan Gedebage, Kota Bandung
                    </p>
                </p>
                <p style={{ textAlign: 'left', fontWeight: 'normal', left: 100 }}>
                  Bandung, 14 Februari 2019<br />
                    Nomor : 001 / CT-B / 43 / II / 2019<br />
                    Lampiran : –
                    <br />
                  <br />
                    Kepada
                    Yth. Bapak-bapak Warga RT 04
                    Di Tempat
                    <br />
                  <br />
                    Perihal : Undangan Rapat Warga RT 04
                    <br />
                  <br />
                    Assalamu’ alaikum Wr. Wb.
                    <br />
                  <br />
                    Alhamdulillah, puji syukur, kita panjatkan kehadirat Allah SWT, atas rahmat dan nikmatnya yang telah dilimpahkan kepada kita semua. Shalawat serta salam semoga tetap tercurah dan terlimpahkan kepada Nabi Muhammad SAW beserta keluarganya dan sahabatnya yang telah berjuang di jalan Allah SWT sampai kepada kita semua sebagai umatnya.
                    Dalam rangka meningkatkan tali silaturahmi dan tali persaudaraan antar sesama warga. Serta pentingnya informasi tentang perkembangan lingkungan dan Rukun Tetangga Cluster Tulip. Kami selaku pengurus RT 04 mengundang bapak-bapak untuk hadir pada,
                    <br />
                  <br />
                    	Hari / Tanggal : Sabtu, 16 Februari 2019<br />
                    	Waktu : Pukul 19.30 s/d 21.00 WIB<br />
                    	Tempat : Aula RW Cluster Tulip<br />
                    Keperluan : Penyampaian Susunan pengurus RT yang baru
                    <br />
                  <br />
                    Dikarenakan pentingnya acara tersebut, kami selaku pengurus RT 04 sangat berharap agar bapak-bapak dapat hadir tepat waktu. Demikian surat undangan ini kami sampaikan. Semoga dapat menjadi perhatian Bapak-bapak sekalian. Atas perhatiannya, kami ucapkan terima kasih.
                    <br />
                  <br />
                    Wassalamu’ alaikum Wr. Wb.
                    <br />
                  <br />
                    Ketua RT 04
                    <br />
                  <br />
                  <br />
                    Djuarsa Karya
                    </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Undangan Rapat RT/RW </p>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Undangan;
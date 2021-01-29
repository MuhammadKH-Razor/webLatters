import React from 'react';
import Swal from 'sweetalert2';
import '../../assets/style/homepage.css';

class Pesan extends React.Component {

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
          12 Surat Tersedia (Pribadi)
            </div>
        <div className="wrapTemplate d-flex">

          <div className="source-html-outer">
            <div className="source-html-outer2" name="source-html-outer" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <div id="1" name="source-html2">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(1)}>Download</button>
                <p style={{ position: 'relative', fontWeight: 'normal' }}>
                  Untuk Kawan Terbaikku, Batu, 12 April 2019
                      <br />
                  <br />
                      Merry Lilian B. T.
                      Di Medan, Sumatera Utara
                      <br />
                  <br />
                      Salam Hangat,
                      <br />
                  <br />
                        Hallo Merry, bagaimana keadaanmu saat ini? Aku di sini tetap yakin semoga
                      Kamu sehat dan masih ceria seperti dulu. Sudah tiga tahun lamanya kita
                      tidak berjumpa, hampir saja aku lupa dengan wajahmu itu, Mer. Beruntung
                      Aku masih sering memandangi foto kita di masa SMA, dan kuharap beberapa
                      waktu lagi kita bisa bertemu dan bermain bersama.
                      <br />
                  <br />
                        Kawanku Merry, ada sedikit cerita yang ingin kubagikan denganmu. Cerita
                      ini tentang tempat kenangan yang sering kita kunjungi di masa lalu, serta
                      entang beberapa orang yang dulu pernah berkesan untuk kita, kuharap Kamu
                      mau dengan antusias menyimaknya.
                      <br />
                  <br />
                        Contoh Surat Pengunduran Diri
                      Kamu ingat dengan taman di sebelah bangunan sekolah kita dulu? Yang sering
                      kita gunakan untuk nongkrong saat jam istirahat dan pulang sekolah, bahkan
                      saat kita terlambat dan terpaksa bolos sekolah? Tempat itu sudah tidak ada
                      lagi Mer.
                      <br />
                  <br />
                        Hampir semua tempat indah yang biasa kita jadikan sebagai area nongkrong
                      semuanya berubah menjadi bangunan gedung. Kini ada sedikit area yang sudah
                      dibangun menjadi taman kota, tetapi lokasinya cukup jauh dari sekolah kita
                      dulu. Padahal setiap kali Aku merasa ingin bercerita dan mengobrol seru
                      denganmu.
                      <br />
                  <br />
                        Aku selalu mengunjungi tempat-tempat itu, terutama taman Bungan yang berada
                      di sebelah SMA kita dulu. Meskipun Aku sudah memiliki banyak teman saat ini,
                      entu tidak senyaman seperti saat berkawan denganmu dulu, Mer. Sekarang, kalua
                      Aku merasa rindu, dan ingin bercerita denganmu, Aku hanya berdiam diri di kamar,
                      emandangi foto kita, serta menulis surat-surat ini padamu.
                      <br />
                  <br />
                        Lalu Kamu tahu tentang kabar kawan-kawan kita yang lainnya? Hampir semuanya kini
                      telah menikah dan meempunyai anak lho, seperti Dewi, Tiwi, Rika, Mimi. Aku masih
                      ingin bercerita lebih banyak lagi tentang hal lainnya lho, Mer, termasuk tentang
                      Aku.
                      <br />
                  <br />
                        Oh ya, saat nomor ponselmu masih bisa dihubungi dua hari yang lalu aku sudah
                      membaca pesanmu kalau ingin berkunjung ke Kota Batu saat libur semester ini,
                      sementara saat itu juga aku hendak membalasmu tetapi nomormu sudah tidak aktif.
                      Semoga surat ini bisa sampai padamu ya, Mer, jika Kamu membutuhkanku hubungi
                      saja nomor ponselku ini 081223114322.
                      <br />
                  <br />
                        Demikian cerita singkat dariku, Mer, jika berkenan dan tidak bisa menghubungiku
                      lewat ponsel, kirim balasan suratku ini ya, Mer. Jangan lupa! Kedatanganmu di
                      sini juga kutunggu, orang tuaku pun akan menyambutmu dengan baik, jadi jangan
                      lupa menghubungiku sebelum ke sini, ya! Sekian dulu!
                      <br />
                  <br />
                      Kawan Terbaikmu,
                      <br />
                  <br />
                      Keysha Wiranata Pradipta
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Pribadi Untuk Kawan  </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="2" name="source-html" id="2">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(2)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Untuk Calon Istri Tercinta, Tangerang 20 April 2019
                  <br />
                  <br />
                  Maya Anggun Lestari
                  Di Malang
                  <br />
                  <br />
                  Assalamualaikum, Wr.Wb
                  <br />
                  <br />
                  Hai Maya, bagaimana keadaanmu di sana sekarang? Semoga tuhan memberikan berkat
                  kesehatan kepada engkau selalu. Aku menulis surat ini agar engkau tidak
                  mengkhawatirkanku di sana. Tenang saja, aku baik-baik saja di sini. Maafkan
                  aku karena hanya bisa berkomunikasi melalui surat ini.
                  <br />
                  <br />
                  Maya kekasihku, sejauh ini pekerjaanku di sini baik-baik saja, tidak ada
                  masalah maupun konflik yang serius. Aku juga menjaga kesehatanku dengan baik,
                  seperti perhatianmu biasanya, aku makan tiga kali sehari, mandi pun rutin.
                  Semoga engkau bisa menjaga kesehatan dengan baik, jangan sakit lagi. Jangan
                  bersedih jika tak bertemu denganku dalam waktu yang lama, karena yang
                  sebenarnya terpisah hanya jarak kita, tetapi hati dan pikiranku masih bisa
                  merasakanmu dalam kedekatan.
                  <br />
                  <br />
                  Aku di sini selalu mendoakan dan mendukungmu, Maya. Tunggulah aku beberapa
                  bulan lagi, seperti janjiku waktu itu. Ingatlah bahwa aku selalu ada di
                  pikiranmu, dan jangan lupa! Jaga baik-baik cincin pertunangan kita sebagai
                  symbol lingkar janji kita. Jika engkau rindu padaku, maka kukirimkan beberapa
                  foto bersama surat ini di dalam amplop, lihat dan simpanlah dengan baik.
                  Atau kau juga bisa bepergian ke tempat-tempat di sekitar rumahmu yang bisa
                  kita kunjungi bersama waktu itu.
                  <br />
                  <br />
                  Pesan yang selalu kukatakan padamu tetap sama, jaga kesehatan, hati dan
                  pikiran, ya! Insyaa Allah usaha kita tidak akan sia-sia. Suatu saat kita
                  akan memperoleh keindahan dari benih yang kita tanam dan perjuangkan.
                  Semangat selalu calon istriku! Jangan pernah menyerah hanya karena kita
                  memiliki hubungan yang dijalin dari jarak jauh. Kau masih bisa melakukan
                  dan mencapai impianmu yang kau nyatakan padaku dulu, kejarlah impianmu
                  walaupun hari pernikahan kita nanti tiba.
                  <br />
                  <br />
                  Aku harap pesanku ini sampai padamu, dan kau baca dengan penuh rasa kasih dan
                  ayang. Jika engkau bisa meluangkan waktu sedikit saja, tulislah beberapa
                  kalimat surat untuk dikirimkan padaku. Berilah kabar tentang keadaanmu di
                  sana, aku akan menunggunya. Semoga hubungan kita terjaga dan bahagia.
                  <br />
                  <br />
                  Wassalamu’alaikum, Wr. Wb
                  <br />
                  <br />
                  Calon Suamimu,
                  <br />
                  <br />
                  Rio Ananda Dewantoro
                        </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Pribadi Untuk Kekasih </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="3" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(3)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Untuk Bundaku Tercinta Malang, 15 April 2019
                    <br />
                  <br />
                    Di Serang, Banten
                    <br />
                  <br />
                    Assalamualaikum, Wr. Wb
                    <br />
                  <br />
                    Hai Bunda, ini Vella. Bunda bagaimana kabarnya? Semoga sehat selalu, ya!
                    Vella di sini juga baik-baik saja. Oh ya, sebelum itu terima kasih atas
                    kiriman uang sakunya, akan Vella gunakan sebaik mungkin, kok! Jangan
                    khawatir ya!
                    <br />
                  <br />
                    Sejauh ini, kuliah Vella baik-baik saja, Vella juga tergolong sebagai
                    mahasiswa yang rajin dan aktif, lho. Semester ini Vella mendapatkan IPK
                    yang sangat memuaskan, ini sekaligus Vella kirimkan di dalam amplop.
                    Jangan lupa dibuka ya, bunda? Oh ya, bagaimana kabar si abang, bun?
                    Pekerjaannya sudah beres, kah? Lalu bunda di rumah tidak kesepian, kan?
                    Semoga si Komeng bisa nemenin dan jaga bunda tiap saat, ya.
                    <br />
                  <br />
                    Vella rindu sekali sama bunda, sayangnya minggu ini Vella belum bisa pulang
                    ke Banten, masih banyak tugas yang harus diselesaikan, doakan Vella ya,
                    bun? Lain kali Vella bakal pulang saat libur lebaran nanti. Tenang saja,
                    pasti akan Vella bawaim banyak oleh oleh kok, buat bunda? Tentunya yang
                    bermanfaat sesuai kesukaan bunda.
                    <br />
                  <br />
                    Contoh Surat Undangan
                    Kebetulan Vella saat ini sedang sangat sibuk, serta mencuri peluang dan
                    kesempatan untuk menulis surat ini kepada Bunda. jangan lupa membalasnya
                    ya! Maafkan Vella jika ada salah dan kurang disengaja maupun tidak disengaja
                    a, bun.
                    <br />
                  <br />
                    Wassalamu’alaikum, Wr. Wb
                    <br />
                  <br />
                    Putrimu Tercinta,
                    <br />
                  <br />
                    Vella Tri Hastari
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Pribadi Untuk Orang Tua </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="4" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(4)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Blitar, 14 Juni 2019
                      <br />
                  <br />
                      Untuk Mahesa, adikku tercinta
                      <br />
                  <br />
                      Di Surabaya
                      <br />
                  <br />
                      Asslamu’alaikum
                      <br />
                  <br />
                      Halo Mahesa, apa kabar? Semoga kamu di sana baik-baik saja dan kebetulan aku di sini juga senantiasa sehat dan baik. Sudah lama ya kita tidak bertemu. Tentunya kamu sudah semakin pintar dan cantik sekarang. Aku benar-benar sudah nggak sabar ingin bertemu denganmu. Di sini aku sangat betah karena nuansanya yang sangat sejuk dan indah. Teman-teman baruku juga sangat ramah dan baik. Namun aku sangat rindu kebersamaan kita bersama dengan teman-teman. Karena saking rindunya, aku sering memimpikan kalian. Doakan aku selalu betah di sini dan bisa meraih cita-citaku.
                      <br />
                  <br />
                      Ada kabar baik untukmu, aku baru saja menjadi juara umum di ujian akhir sekolah. Akhirnya cita-cita dan keinginanku untuk mengukir prestasi menjadi terkabul.
                      <br />
                  <br />
                      Usahaku selama ini untuk membahagiakan orang tuaku juga tidak sia-sia. Sebenarnya, ada banyak cerita dan pengalaman yang ingin aku ceritakan. Tapi nanti saja saat kita ada kesempatan bertemu. Semoga kamu disana bisa sukses dan berhasil mengukir prestasi dan keberhasilanmu. Jangan lupa sampaikan salamku kepada teman-teman yang lain. Salam hangat dari Blitar untuk mereka.
                      <br />
                  <br />
                      Aku kira cukup sekian dulu kabar dan sapaan dariku. Semoga kita semua senantiasa dalam lindunganNya.
                      <br />
                  <br />
                      Wassalamu’alaikum
                      <br />
                  <br />
                      Kakakmu Tercinta
                      <br />
                  <br />
                      Landri S
                      </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Pribadi Untuk Saudara </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="5" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(5)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Jakarta, 4 Januari 2018
                      <br />
                  <br />
                      Untuk sahabatku Santi Lolie tersayang
                      <br />
                  <br />
                      di Jogja
                      <br />
                  <br />
                      Assalamualaikum…
                      <br />
                  <br />
                      Hay Santi yang manis, Alhamdulillah aku dan keluargaku baik-baik saja di sini. Akupun bersyukur kabarmu juga dalam keadaan baik di sana. Kamu benar sudah lama kita tidak bertemu. Aku bukan saja sudah besar. Kini aku tumbuh menjadi gadis remaja dan semakin cantik tentunya hehe. Sama seperti dirimu, aku sekarang sudah kelas VI. Aku yakin kalau kamu juga semakin manis. Memang benar San, sekarang aku jadi artis cilik. Jadi artis itu ada enak dan tidaknya. Sebelumnya aku tidak pernah berpikir menjadi artis. Itu terjadi karena kebetulan. Kini hari-hariku disibukkan dengan jadwal syuting yang padat. Benar-benar sangat melelahkan. Aku hampir tidak memiliki waktu bermain sekarang.
                      <br />
                  <br />
                      Santi, mungkin kamu tidak tahu, disini aku juga merindukanmu. Aku selalu merindukan masa-masa kebersamaan denganmu seperti dulu. Aku kangen suasana di desa dan teman-teman semua. Trima kasih ya ternyata kado dariku masih kau simpan. Ketika membacanya, aku tertawa geli. Segitunya kau menyayangi si Jodi. Teganya kau samakan diriku dengan si Jodi hihihi.
                      <br />
                  <br />
                      Santi, kapan ke Jakarta ? Sekali-kali main dong kesini. Aku pasti mengajakmu jalan-jalan keliling Jakarta. Oh ya, aku punya kabar baik untukmu. Liburan semester tahun ini, InsyaAllah aku ke Kediri. Kamu tahu kan, Tante Hana, yang dulu sering mengantarkan aku les. Tante Hana ini akan menikah dengan orang Jogja. Aku bahagia banget. Karena kini aku punya keluarga di Jogja.
                      <br />
                  <br />
                      Aku rasa cukup sampai disini dulu ya San. Jangan khawatir, aku masih Gemala yang dulu. Sahabat karibmu. Jarak dan waktulah yang memisahkan kita. Belajar yang rajin ya. Aku selalu mendoakanmu disini. Mama dan papa titip salam kepadamu. Jaga diri kamu baik-baik ya. Tunggu kedatanganku ! Sampai jumpa.
                      <br />
                  <br />
                      Wassalamualaikum…
                      <br />
                  <br />
                      Sahabatmu,
                      <br />
                  <br />
                  <br />
                      ttd
                      Gemala Suriah
                  </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Pribadi Untuk Teman Lama </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="6" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(6)}>Download</button>
                <p style={{ position: 'relative', fontWeight: 'normal', textAlign: 'left' }}>
                  Marina<br />
                    Jln. Melati, 20<br />
                    Makassar
                    <br />
                  <br />
                    Hi my companion, how are you there? I trust you are great. I miss you on
                    the grounds that we have not met in quite a while. Do you miss me as well?
                    On the off chance that you are out of town, I trust you can visit Lampung.
                    I’m certain you will love it in light of the fact that it is an excellent
                    city.
                    <br />
                  <br />
                    I will take you to numerous spots like Kiluan inlet and to the most
                    delightful places in Indonesia. I realize that you cherish surfing and
                    I have such a variety of mystery spots for you to surf, so I prescribe
                    you to visit here a few weeks.
                    <br />
                  <br />
                    Ideally we can meet soon, my closest companion.
                    <br />
                  <br />
                    Your companion,
                    <br />
                  <br />
                    Meriska
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Pribadi Dalam Bahasa Inggris </p>
            </div>
          </div>



          {/* 6 surat sisa */}

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="7" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(7)}>Download</button>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Makassar, 6 Mei 2019
                  <br />
                  <br />
                  Teruntuk Guruku Tercinta, Ibu Jumreini
                  <br />
                  Di Manado
                  <br />
                  <br />
                  Assalamualaikum Wr. Wb.
                  <br />
                  <br />
                  Bagaimana kabar Ibu Jum? Saya berharap Ibu selalu diberikan kesehatan dan berada dalam lindungan Allah SWT. Aamiin.
                  <br />
                  <br />
                  Bu Jumreini, surat ini saya sampaikan untuk memberikan kabar gembira kepada Ibu. Alhamdulillah Bu, kemarin saya lolos dalam Olimpiade Matematika Nasional dan sekarang saya menjadi wakil Indonesia untuk mengikuti Olimpiade Metematika di Amerika. Akhirnya ya Bu, impian kita berdua bisa terwujud juga.
                  <br />
                  <br />
                  Bu, saya ingin mengucapkan terimakasih yang sebanyak-banyaknya kepada Ibu. Ibu telah bekerja keras selama ini untuk membimbing saya, sehingga saya bisa sampai di tahap ini. Saya minta maaf Bu jika selama perjalanan bimbingan, saya banyak nakalnya dan susah untuk di kasih tahu.
                  <br />
                  <br />
                  Saat ini, saya masih belum bisa membalas kebaikan Ibu. Sebagai gantinya, saya akan selalu mendoakan kebaikan untuk Ibu. Semoga Bu Ani sehat selalu, lancar rezekinya, dan dihindarkan dari segala marah bahaya.
                  <br />
                  <br />
                  Contoh Surat Jalan
                  Oh iya Bu, saya punya sedikit hadiah untuk Ibu. Mungkin tidak terlalu mahal. Tetapi, saya rasa Ibu akan sangat menyukainya. Saya membelikan Bu Ani mukena dan sajadah yang dikirim bersamaan dengan datangnya surat ini. Semoga Bu Ani suka dengan hadiah yang saya beri.
                  <br />
                  <br />
                  Hadiah ini adalah wujud kecil dari terimakasih saya kepada Ibu. Saya juga ingin meminta doa dan restu dari Ibu supaya saya bisa diberikan kelancaran dan kemudahan untuk mengikuti Olimpiade Matematika di Amerika.
                  <br />
                  <br />
                  Mungkin cukup sekian surat saya kepada Ibu. Apabila saya memiliki beberapa kekurangan dan kelemahan, saya mohon maaf yang sebesar-besarnya.
                  <br />
                  <br />
                  Wassalamualaikum Wr. Wb
                  <br />
                  <br />
                  Salam Dari Murid Bimbingan Matematika,
                  <br />
                  <br />
                  Suri
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Pribadi Untuk Guru </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="8" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(8)}>Download</button>
                <p style={{ position: 'relative', fontWeight: 'normal' }}>
                  Untuk temanku,
                  <br />
                  <br />
                  Agung
                  <br />
                  Di Bandung
                  <br />
                  <br />
                  Assalamu’alaikum
                  <br />
                  <br />
                  Hai gung, bagaimana kabarmur? Aku berharap kamu selalu dalam keadaan baik dan
                  dalam lindungan Tuhan.
                  <br />
                  <br />
                  Aku di sini juga baik-baik saja. Ngomong-ngomong, bagaimana kabar teman-teman
                  sekelas semua? Semoga mereka semua tetap semangat dan kompak seperti dulu.
                  Jujur saja, aku sangat merindukan kalian semua. Merindukan suasana kebersamaan
                  kita karena rasanya berat untuk ku meninggalkan kalian. Terutama kamu,
                  aku sangat merindukan kamu gung. Kita berdua selalu menghabiskan waktu
                  bersama sejak kecil. Semoga di kesempatan mendatang kita bisa bertemu lagi.
                  <br />
                  <br />
                  Rencananya, liburan aku akan main ke Bandung dan berharap kita bisa bermain
                  bersama dengan teman-teman sekelas. Sekian dulu surat dariku. Aku sangat
                  <br />
                  <br />
                  Salam teman baikmu,
                  <br />
                  <br />
                  Dono
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Pribadi Untuk Teman Kelas </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="9" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(9)}>Download</button>
                <p style={{ position: 'relative', fontWeight: 'normal', left: 140 }}>
                  Medan, 20 Januari 2020
                <br />
                  <br />
                Kepada Intan Sahabatku
                di Tempat
                <br />
                  <br />
                Hai Intan,
                Apa Kabar?, Aku harap kamu selalu dalam keadaan sehat dan tidak kekurangan satu apapun juga yah.
                <br />
                  <br />
                Oh ya Intan, melalui surat ini aku bermaksud untuk meminta maaf samamu, atas kejadian tadi siang di sekolah. Sama sekali aku tidak bermaksud merusak persahabatan kita hanya karena masalah seperti ini, dan aku tidak ingin masalah kita berlarut – larut dan mengancam persahabatan kita berdua.
                <br />
                  <br />
                Jika boleh jujur, sebenarnya aku hanya bermaksud untuk menjahili kamu saja dan tidak bermaksud menghina kamu. Semua itu kulakukan hanya sebatas bercanda sebagai seorang teman, namun aku sadar jika candaanku sudah kelewatan dan membuat kamu marah.
                <br />
                  <br />
                Kita sudah bersahabat sejak kecil dan kamu sudah kuanggap seperti saudara dan keluargaku sendiri. Aku sama sekali tidak mau jika persahabatan kita harus berakhir disini saja, makanya aku ingin meminta maaf samamu. Kamu mau maafin aku kan Intan?.
                <br />
                  <br />
                Sekian dulu suratku ini ya Intan, aku harap kamu sudah kembali tertawa besok di sekolah dan kita berdua melupakan masalah ini. Biarlah masalah ini menjadi pelajaran bagi saya dan menjadi pelajaran demi kelanggengan persahabatan kita.
                <br />
                  <br />
                Sahabatmu,
                <br />
                  <br />
                Dewi Cahaya.
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt.  Pribadi Berisi Pemintaan Maaf </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="10" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(10)}>Download</button>
                <p>
                  Samarinda, 6 april 2019
                <br />
                  <br />
                Nenek / Kakek Tercinta
                di Kampung
                <br />
                  <br />
                Assalamualaikum Wr.Wb
                <br />
                  <br />
                Nek atau kakek, apa kabar? sehat-sehat saja kan? Anto selalu berdoa semoga kakek dan nenek dikampung dalam keadaan sehat selalu, begitu juga dengan keadaan cucumu Faris disini.
                <br />
                  <br />
                Nenek dan kakek tercinta, Faris kangen banget sama nenek dan kakek, apalagi kalau Faris ingat masakan nenek yang enak, jadi pengen cepet-cepet Anto ke sana. Oh ya, Faris juga pengen mancing ama kakek. Entar kalau Anto udah disana temenin Faris mancing ya kek. Minggu depan Anto libur sekolah, jadi Anto bisa berlibur sekaligus melepas kangen disana.
                <br />
                  <br />
                Contoh Surat Kuasa
                Udah dulu ya Nek / Kakek,
                <br />
                  <br />
                Salam Kangen,
                <br />
                  <br />
                13. Contoh Surat Pribadi Dalam Bahasa Jawa
                Salam Kanggo Joko Sampurno
                Kelas VI MI Nurul Huda Semarum
                Trenggalek
                <br />
                  <br />
                Kanthi lumantaran layang iki, aku aweh kabar kanggo awakmu yen kahananku alhamdulillah apik lan sehat, semono ugo mugo-mugo kahananmu tansah sehat lan rahayu wilujeng.Oh iyo, apa dik acaramu pas dino libur 1 Muharom wingi?
                <br />
                  <br />
                Acaraku wingi mlaku-mlaku menyang alun-alun karo ayah lam ibu. Neng kono akeh papan mainan anak-anak sing iso atiku seneng. Enek bandulan, enek jungkitan, enek air mancur, enek dolanan pasir puteh lan sak panunggalane. Kabeh iku biso mau gratis lho dik.
                <br />
                  <br />
                Dak kiro cukup semono wae surat soko aku, liyo wektu disambung maneh. Tak enteni balesan suratmu yo dik.
                <br />
                  <br />
                Semarum, 4 Juni 2019
                <br />
                Mitramu
                <br />
                  <br />
                Prabowo
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt.  Pribadi Untuk Kakek Dan Nenek </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="11" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(11)}>Download</button>
                <p style={{ textAlign: 'left', fontWeight: 'normal' }}>
                  Bogor, 24 Maret 2017

                  Salam deudeuh, Assalamualaikum wr. wb.

                  Naon wartos ibu? Ayu ajeng ibu sae-sae wae ditu. Kumaha kalawan pagawean ibu ayeuna? Ayu ajeng ibu henteu palay teuing waktos didamel nya. Ayu sering kalintang rempan kalawan kasehatan ibu.

                  Teuing parantos sabaraha lami Ayu henteu ngadatangan ibu di kampung halaman, Ayu leres-leres kangen sami ibu. Ibu, hapunten nya Ayu teu acan iasa mulih liburan minggu ieu, margi pancen sarta tanggel waler Ayu teu acan parantos. Ayu jangji waktos sadaya parantos parantos Ayu bade geura-giru mulih sagancangna. Janten, ibu teu kenging rempan nya. Doakan Ayu nya bu, mugi-mugi iasa ngabereskeun pancen Ayu kalawan sae. Ayu parantos henteu sabar palay memeluk ibu sarta ngarasakeun masakan ibu di bumi.

                  Geus tiheula nya bu serat ti Ayu. Menggah ibu sempet bales serat Ayu ieu nya Bu. hatur nuhun ibu. Kuring deudeuh ibu.

                  Wassalamualaikum wr. wb.

                  Salam ti putra anjeun tersayang,
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Pribadi Bahasa Sunda </p>
            </div>
          </div>

          <div className="source-html-outer">
            <div className="source-html-outer2">
              <div id="12" name="source-html">
                <button className="btn btn-info text-white text-center mb-3" onClick={() => exportWord(12)}>Download</button>
                <p style={{ position: 'relative', fontWeight: 'normal' }}>
                  Semarang, 17 Maret 2019
                <br />
                  <br />
                Sahabatku,
                Septiono
                Di Solo
                <br />
                  <br />
                Assalamu’alaikum.
                <br />
                  <br />
                Hai no, apa kabar? Apa kamu sehat-sehat saja Jang? Semoga kamu dan keluarga senantiasa diberikan kesehatan dan kebahagiaan oleh Allah SWT. Aamiiin.
                <br />
                  <br />
                Sudah lama rasanya kita tidak berjumpa, sudah hampir tiga tahun yang lalu no, tepatnya saat aku dan keluarga memutuskan untuk pindah ke semarang. Sejak saat itu aku tidak pernah lagi mendengar kabar tentangmu. Aku berharap kamu senantiasa berada dalam lindungan dan kasih sayang Allah SWT di manapun berada.
                <br />
                  <br />
                Akhir bulan ini aku sama keluarga berencana pulang ke Solo untuk menjenguk nenek. Aku berharap pada hari itu bisa ikut rombongan untuk menjenguk kampung halaman sekalian bersilaturahmi dan bernostalgia dengan kalian wahai para sahabat kecilku yang sangat ku rindu.
                <br />
                  <br />
                Namun apa boleh buat, Allah berkehendak lain tentang rencana ini. Hari itu ternyata aku ada ujian semester dan juga presentasi di kampus. Dengan berat hati nampaknya perjumpaan kita harus diundur, dan aku belum tahu kapan.
                <br />
                  <br />
                Semoga secepatnya kita bisa bertemu ya no.
                <br />
                  <br />
                Oh iya, sekian dulu ya, sampaikan salam sekaligus permintaan maafku kepada sahabat-sahabat yang lain. Katakan pada mereka kalau aku sangat merindukan kebersamaan kita dulu saat masa kecil.
                <br />
                  <br />
                Sahabatmu,
                <br />
                  <br />
                Nuralim
                </p>
              </div>
            </div>
            <div className="judul-surat">
              <p> Srt. Pribadi untuk kawan Kecil </p>
            </div>
          </div>


        </div>
      </div>  
    )
  }
}

export default Pesan;
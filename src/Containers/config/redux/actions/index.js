import firebase, { database, firestore } from '../../firebase/fire';

export const register = (data) => (dispatch) => {
    return new Promise((resolve) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(response => {
            const dataUser1 = {
                email: response.user.email,
                uid: response.user.uid,
                emailVerified: response.user.emailVerified,
                nama: data.dataUser.nama,
                alamat: data.dataUser.alamat,
                nomer: data.dataUser.nomer,
                status: response.user.metadata.a
            }
            console.log(response)
            resolve(dataUser1);
            localStorage.setItem('registerData', JSON.stringify(dataUser1));
        })
    })
}


export const login = (data) => (dispatch) => {
    return new Promise((resolve) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(response => {
            console.log(response);
        setTimeout(() => {
            const dataUser2 = {
                email: response.user.email,
                uid: response.user.uid,
                status: response.user.metadata.a,
                emailVerified: response.user.emailVerified,
                refreshToken: response.user.refreshToken,
                tokenLogin: true
            }
            localStorage.setItem('loginData', JSON.stringify(dataUser2));
            resolve(true);
        }, 2000)
        })
    })
}


export const addData = (data) => (dispatch) => {
    return new Promise((resolve) => {
        const dataz = JSON.parse(localStorage.getItem('loginData'));
        database.ref('komentar/' + 'H8DPq08zoyOHCiTSvcKOviTj8Eo2')
        .push({
            komentator: data.komentator,
            isi: data.isikomentar,
            email: data.emailkomentator,
            kategori: data.kategori,
        })
        .then(res =>{
            console.log('data ini:' ,res.path.pieces_[2]);
            resolve(true);
        }) 
    })
}

export const getData = (data) => (dispatch) => {
    const getData = database.ref('sell/' + data);
    return new Promise((resolve) => {
        getData.on('value', (snapshot) => {
            const array = [];
            Object.keys(snapshot.val()).map(key => {
                array.push({
                    id: key,
                    data: snapshot.val()[key]
                })
            })
            dispatch({type: 'ORDER_GRAB', value: array})
            console.log('firebaseGetData: ', snapshot.val());
        })
    })
}

// export const masukToko = (data) => (dispatch) => {
//     const array = [];
//     array.push({
//         status: data.status,
//         nama: data.nama,
//         background: data.background,
//         unggulan: data.unggulan,
//         kategori: data.kategori
//     })
//     console.log('array saya :',array[0].nama)
//     dispatch({type: 'STATUS_GRAB_USER', value: array});
//     console.log(data)
// }
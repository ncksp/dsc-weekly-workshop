// es6

getRegional = (id) => {
    //get data to database
    return new Promise((resolve, reject) => {
        if (id !== 1)
            return reject({
                message: "Salah id"
            }) //early return -> berusaha ngambil kemungkinan yang gagal dulu

        setTimeout(() => {
            resolve({
                id: 1,
                name: "Indonesia"
            })
        }, 1000);
    })
}

getProvince = (id, callbackFunc) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "DKI Jakarta"
            })
        }, 1000);
    })
}

getDataCovid = (id, callbackFunc) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                positif: 0,
                sembuh: 10000,
                meninggal: 2
            })
        }, 1000);
    })
}

getRegional(1)
    .then(region => getProvince(region.id))
    .then(province => getDataCovid(province.id))
    .then(data => console.log(data))
    .catch(err => console.log(err))



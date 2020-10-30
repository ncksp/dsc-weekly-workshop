
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

getProvince = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "DKI Jakarta"
            })
        }, 1000);
    })
}

getDataCovid = (id) => {
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

async function showData() {
    try {
        let region = await getRegional(1)
        let province = await getProvince(region.id)
        let data = await getDataCovid(province.id)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
showData()
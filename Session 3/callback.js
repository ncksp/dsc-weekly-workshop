// 1. get data negara
// 2. get data provinsi dari negara
// 3. get data covid dari tiap provinsi

//es5
getRegional = (id, callbackFunc) => {
    //get data to database
    setTimeout(() => {
        callbackFunc({
            id: 1,
            name: "Indonesia"
        })
    }, 1000);
}

getProvince = (id, callbackFunc) => {
    setTimeout(() => {
        callbackFunc({
            id: 1,
            name: "DKI Jakarta"
        })
    }, 1000);
}

getDataCovid = (id, callbackFunc) => {
    setTimeout(() => {
        callbackFunc({
            positif: 0,
            sembuh: 10000,
            meninggal: 2
        })
    }, 1000);
}

getRegional(1, region => {
    getProvince(region.id, province => {
        getDataCovid(province.id, data => {
            console.log(data)
        })
    })
})

// console.log(getRegional().id)


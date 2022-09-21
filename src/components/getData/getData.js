const getData = (Data, time) => {
    return new Promise((resolve, reject) => {
        let condition = true
        setTimeout(() => {
            if (condition) {
                resolve(Data)
            }
            else { reject("400 ERROR") }
        }, time)
    })
}

export default getData;
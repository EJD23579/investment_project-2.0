const balanceData2021 = document.querySelector("#balanceData2021")
const balanceData2020 = document.querySelector("#balanceData2020")
const balanceData2019 = document.querySelector("#balanceData2019")
const balanceData2018 = document.querySelector("#balanceData2018")

const cashflowData2021 = document.querySelector("#cashflowData2021")
const cashflowData2020 = document.querySelector("#cashflowData2020")
const cashflowData2019 = document.querySelector("#cashflowData2019")
const cashflowData2018 = document.querySelector("#cashflowData2018")

const incomeData2021 = document.querySelector("#incomeData2021")
const incomeData2020 = document.querySelector("#incomeData2020")
const incomeData2019 = document.querySelector("#incomeData2019")
const incomeData2018 = document.querySelector("#incomeData2018")

var valCon;

fetch('http://localhost:3000/balanceSheetHistory2021')

        .then(response => response.json())
        .then(data =>{
                data.forEach(thing =>{
                        const valCon = 
                        `<td>` + thing + `</td>` 
                        balanceData2021.insertAdjacentHTML("beforeend",valCon)
                })
        })
        .catch(err => console.log(err))

fetch('http://localhost:3000/balanceSheetHistory2020')

        .then(response => response.json())
        .then(data =>{
                data.forEach(thing =>{
                        const valCon = 
                        `<td>` + thing + `</td>` 
                        balanceData2020.insertAdjacentHTML("beforeend",valCon)
                })
        })
        .catch(err => console.log(err))



fetch('http://localhost:3000/balanceSheetHistory2019')

        .then(response => response.json())
        .then(data =>{
                data.forEach(thing =>{
                        const valCon = 
                        `<td>` + thing + `</td>` 
                        balanceData2019.insertAdjacentHTML("beforeend",valCon)
                })
        })
        .catch(err => console.log(err))


fetch('http://localhost:3000/balanceSheetHistory2018')

        .then(response => response.json())
        .then(data =>{
                data.forEach(thing =>{
                        const valCon = 
                        `<td>` + thing + `</td>` 
                        balanceData2018.insertAdjacentHTML("beforeend",valCon)
                })
        })
        .catch(err => console.log(err))

        


fetch('http://localhost:3000/cashflowStatement2021')

        .then(response => response.json())
        .then(data =>{
                data.forEach(thing =>{
                        const valCon = 
                        `<td>` + thing + `</td>` 
                        cashflowData2021.insertAdjacentHTML("beforeend",valCon)
                })
        })
        .catch(err => console.log(err))




fetch('http://localhost:3000/cashflowStatement2020')

        .then(response => response.json())
        .then(data =>{
                data.forEach(thing =>{
                        const valCon = 
                        `<td>` + thing + `</td>` 
                        cashflowData2020.insertAdjacentHTML("beforeend",valCon)
                })
        })
        .catch(err => console.log(err))





fetch('http://localhost:3000/cashflowStatement2019')

        .then(response => response.json())
        .then(data =>{
                data.forEach(thing =>{
                        const valCon = 
                        `<td>` + thing + `</td>` 
                        cashflowData2019.insertAdjacentHTML("beforeend",valCon)
                })
        })
        .catch(err => console.log(err))



fetch('http://localhost:3000/cashflowStatement2018')

.then(response => response.json())
.then(data =>{
        data.forEach(thing =>{
                const valCon = 
                `<td>` + thing + `</td>` 
                cashflowData2018.insertAdjacentHTML("beforeend",valCon)
        })
})
.catch(err => console.log(err))



fetch('http://localhost:3000/incomeStatement2021')

.then(response => response.json())
.then(data =>{
        data.forEach(thing =>{
                const valCon = 
                `<td>` + thing + `</td>` 
                incomeData2021.insertAdjacentHTML("beforeend",valCon)
        })
})
.catch(err => console.log(err))



fetch('http://localhost:3000/incomeStatement2020')

.then(response => response.json())
.then(data =>{
        data.forEach(thing =>{
                const valCon = 
                `<td>` + thing + `</td>` 
                incomeData2020.insertAdjacentHTML("beforeend",valCon)
        })
})
.catch(err => console.log(err))

fetch('http://localhost:3000/incomeStatement2019')

.then(response => response.json())
.then(data =>{
        data.forEach(thing =>{
                const valCon = 
                `<td>` + thing + `</td>` 
                incomeData2019.insertAdjacentHTML("beforeend",valCon)
        })
})
.catch(err => console.log(err))


fetch('http://localhost:3000/incomeStatement2018')

.then(response => response.json())
.then(data =>{
        data.forEach(thing =>{
                const valCon = 
                `<td>` + thing + `</td>` 
                incomeData2018.insertAdjacentHTML("beforeend",valCon)
        })
})
.catch(err => console.log(err))
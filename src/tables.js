


const netBorrow2021 = document.querySelector("#netBorrow2021")




fetch("http://localhost:3000/cashflowStatement")
.then((response) => {
    return response.json();
})
.then((myJson) => {
    console.log(myJson)
});
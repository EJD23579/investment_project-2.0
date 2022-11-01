const testVal = document.querySelector("#idNetBorrow2021")


fetch('http://localhost:3000/cashflowStatement')
        .then(response => response.json())
        .then (data => alert(data))
        .catch(err => console.log(err))

fetch('http://localhost:3000/cashflowStatement')
        .then(response => response.json())
        .then((todos) => {
            
        })
        .catch(console.error)
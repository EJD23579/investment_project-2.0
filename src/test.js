const testRun  = document.querySelector("#test")


fetch('http://localhost:3000/cashflowStatement')
.then(response => response.json())
.then(data => console.log(data))
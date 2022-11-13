const testVal = document.querySelector("#testValue")

fetch('http://localhost:3000/')

        .then(response => response.json())
        .then(data =>{
                
                        const valCon = 
                        `<p1>` + thing + `</p1>` 
                        testVal.insertAdjacentHTML("beforeend",valCon)
        
        })
        .catch(err => console.log(err))
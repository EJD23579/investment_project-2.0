const { json } = require('express');
const express = require('express');
const { rows } = require('pg/lib/defaults');
const app = express()
const port = 3000

const yahooFinance = require('yahoo-finance2').default
let result;

async function details(req,res){
  let symbol = 'AAPL';
  result = await yahooFinance.quoteSummary(symbol,{modules:["balanceSheetHistory"]});
 
  result2021 = result.balanceSheetHistory.balanceSheetStatements.at(0)
  
  cash2021 = result2021.cash

 
 
  Object.keys(result).forEach(function (key){
    console.log(result[key])

    
  })

console.log("------START--------")
// BELOW
console.log(result2021)
// ABOVE
console.log(cash2021)
console.log("------END--------")




  }
  
  
  
  
  details();





app.get('/',(req, res) => {
    // middleware, because it is happening between request and response
  res.write('Hello World!')
 
 //res.send 
   
   
   


  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
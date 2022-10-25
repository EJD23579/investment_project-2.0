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
  resultString = JSON.stringify(result)
  //Object.entries or Object.key
  outerArray = Object.entries(result)
  
  
  
  Object.keys(result).forEach(function (key){
    console.log(result[key])
  })


console.log(outerArray)





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
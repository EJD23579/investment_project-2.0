const express = require('express')
const app = express()
const port = 3000

const yahooFinance = require('yahoo-finance2').default
let result;

async function details(req,res){
let symbol = 'AAPL';
result = await yahooFinance.quoteSummary(symbol,{modules:["balanceSheetHistory"]});
resultString = JSON.stringify(result)
for(var i = 0; i < resultString.length; i++){
  console.log(result[i]+ "\n");
}



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
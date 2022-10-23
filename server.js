const express = require('express')
const app = express()
const port = 3000

const yahooFinance = require('yahoo-finance2').default
let result;
async function details(req,res){
let symbol = 'AAPL';
let queryOptions = {modules: ['price', 'summaryDetail']};
result = await yahooFinance.quoteSummary(symbol,{modules:["balanceSheetHistory"]});
console.log(JSON.stringify(result))

}

details();





app.get('/',(req, res) => {
    // middleware, because it is happening between request and response
  res.write('Hello World!')
 //res.send 
   res.write(JSON.stringify(result))

  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
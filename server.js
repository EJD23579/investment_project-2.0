
//------- Requirements START ----------------

const { json } = require('express');
const express = require('express');
const { rows } = require('pg/lib/defaults');
const app = express()
const port = 3000
const yahooFinance = require('yahoo-finance2').default

//------- Requirements END ----------------

let balanceSheet;
let cashflow;

// ---------- Retrieving values from API START --------------
async function retrieveBalanceSheet(req,res){
  let symbol = 'AAPL';
  balanceSheet = await yahooFinance.quoteSummary(symbol,{modules:["balanceSheetHistory"]});
  //Storing the annual balance sheet values
  balanceSheet2021 = balanceSheet.balanceSheetHistory.balanceSheetStatements.at(0)
  balanceSheet2020 = balanceSheet.balanceSheetHistory.balanceSheetStatements.at(1)
  balanceSheet2019 = balanceSheet.balanceSheetHistory.balanceSheetStatements.at(2)
  balanceSheet2018 = balanceSheet.balanceSheetHistory.balanceSheetStatements.at(3)

//Buffett Logic and scoring to be included

  cash2021 = balanceSheet2021.cash
  shortTermInv2021 = balanceSheet2021.shortTermInvestments
  netRecievables2021 = balanceSheet2021.netReceivables
  inv2021 = balanceSheet2021.inventory
  otherCurrentAssests2021 = balanceSheet2021.
  totalCurrentAssets2021 = balanceSheet2021.
  longTermInvestments2021 = balanceSheet2021.
  propertyPlantEquipment2021 = balanceSheet2021.
  otherAssets2021 = balanceSheet2021.
  totalAssets2021 = balanceSheet2021.
  accountsPayable2021 = balanceSheet2021.
  shortLongTermDebt2021 = balanceSheet2021.
  otherCurrentLiab2021 = balanceSheet2021.
  longTermDebt2021 = balanceSheet2021.
  otherLiab2021 = balanceSheet2021.
  totalCurrentLiabilities2021 = balanceSheet2021.
  totalLiab2021 = balanceSheet2021.
  commonStock2021 = balanceSheet2021.
  retainedEarnings2021 = balanceSheet2021.
  treasuryStock2021 = balanceSheet2021.
  otherStockholderEquity2021 = balanceSheet2021.
  totalStockholderEquity2021 = balanceSheet2021.
  netTangibleAssets2021 = balanceSheet2021.


console.log("------START--------")
console.log("cash: " + cash2021)
console.log("short term investments: " + shortTermInv2021)
console.log("------END--------")

  }

  async function retrieveCashFlowStatement(req,res){
    let symbol = 'AAPL';
    cashflow = await yahooFinance.quoteSummary(symbol,{modules:["cashflowStatementHistory"]});
      
    //Storing the annual cashflow statements
    cashflow.cashflowStatementHistory.cashflowStatements.at(0)
    cashflow.cashflowStatementHistory.cashflowStatements.at(1)
    cashflow.cashflowStatementHistory.cashflowStatements.at(2)
    cashflow.cashflowStatementHistory.cashflowStatements.at(3)
  
    
  
    
  
  console.log("------START--------")
  
  console.log("------END--------")
  
    }

    async function retrieveIncomeStatement(req,res){
      let symbol = 'AAPL';
      incomeStatement = await yahooFinance.quoteSummary(symbol,{modules:["incomeStatementHistory"]});
      
      //Storing the annual income statements
     
      
    
      
    
    console.log("------START--------")
    console.log(incomeStatement)
    console.log("------END--------")
    
      }

// ---------- Retrieving values from API END --------------

 

  retrieveBalanceSheet();
  retrieveCashFlowStatement();
  retrieveIncomeStatement();





app.get('/',(req, res) => {
    // middleware, because it is happening between request and response
  res.write('Hello World!')
 
 //res.send 
   
   
   


  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
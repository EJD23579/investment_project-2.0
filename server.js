
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
let incomeStatement;

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


// -------------- Most recent statement variables ----------------
  cash2021 = balanceSheet2021.cash
  shortTermInv2021 = balanceSheet2021.shortTermInvestments
  netRecievables2021 = balanceSheet2021.netReceivables
  inv2021 = balanceSheet2021.inventory
  otherCurrentAssests2021 = balanceSheet2021.otherCurrentAssets
  totalCurrentAssets2021 = balanceSheet2021.totalCurrentAssets
  longTermInvestments2021 = balanceSheet2021.longTermInvestments
  propertyPlantEquipment2021 = balanceSheet2021.propertyPlantEquipment
  otherAssets2021 = balanceSheet2021.otherAssets
  totalAssets2021 = balanceSheet2021.totalAssets
  accountsPayable2021 = balanceSheet2021.accountsPayable
  shortLongTermDebt2021 = balanceSheet2021.shortLongTermDebt
  otherCurrentLiab2021 = balanceSheet2021.otherCurrentLiab
  longTermDebt2021 = balanceSheet2021.longTermDebt
  otherLiab2021 = balanceSheet2021.otherLiab
  totalCurrentLiabilities2021 = balanceSheet2021.totalCurrentLiabilities
  totalLiab2021 = balanceSheet2021.totalLiab
  commonStock2021 = balanceSheet2021.commonStock
  retainedEarnings2021 = balanceSheet2021.retainedEarnings
  treasuryStock2021 = balanceSheet2021.treasuryStock
  otherStockholderEquity2021 = balanceSheet2021.otherStockholderEquity
  totalStockholderEquity2021 = balanceSheet2021.totalStockholderEquity
  netTangibleAssets2021 = balanceSheet2021.netTangibleAssets
//------------- Variables +1 year -----------------------------
  cash2020 = balanceSheet2020.cash
  shortTermInv2020 = balanceSheet2020.shortTermInvestments
  netRecievables2020 = balanceSheet2020.netReceivables
  inv2021 = balanceSheet2020.inventory
  otherCurrentAssests2020 = balanceSheet2020.otherCurrentAssets
  totalCurrentAssets2020 = balanceSheet2020.totalCurrentAssets
  longTermInvestments2020 = balanceSheet2020.longTermInvestments
  propertyPlantEquipment2020 = balanceSheet2020.propertyPlantEquipment
  otherAssets2020 = balanceSheet2020.otherAssets
  totalAssets2020 = balanceSheet2020.totalAssets
  accountsPayable2020 = balanceSheet2020.accountsPayable
  shortLongTermDebt2020 = balanceSheet2020.shortLongTermDebt
  otherCurrentLiab2020 = balanceSheet2020.otherCurrentLiab
  longTermDebt2020 = balanceSheet2020.longTermDebt
  otherLiab2020 = balanceSheet2020.otherLiab
  totalCurrentLiabilities2020 = balanceSheet2020.totalCurrentLiabilities
  totalLiab2020 = balanceSheet2020.totalLiab
  commonStock2020 = balanceSheet2020.commonStock
  retainedEarnings2020 = balanceSheet2020.retainedEarnings
  treasuryStock2020 = balanceSheet2020.treasuryStock
  otherStockholderEquity2020 = balanceSheet2020.otherStockholderEquity
  totalStockholderEquity2020 = balanceSheet2020.totalStockholderEquity
  netTangibleAssets2020 = balanceSheet2020.netTangibleAssets
//------------- Variables +2 year -----------------------------
cash2019 = balanceSheet2019.cash
shortTermInv2019 = balanceSheet2019.shortTermInvestments
netRecievables2019 = balanceSheet2019.netReceivables
inv2019 = balanceSheet2019.inventory
otherCurrentAssests2019 = balanceSheet2019.otherCurrentAssets
totalCurrentAssets2019 = balanceSheet2019.totalCurrentAssets
longTermInvestments2019 = balanceSheet2019.longTermInvestments
propertyPlantEquipment2019 = balanceSheet2019.propertyPlantEquipment
otherAssets2019 = balanceSheet2019.otherAssets
totalAssets2019 = balanceSheet2019.totalAssets
accountsPayable2019 = balanceSheet2019.accountsPayable
shortLongTermDebt2019 = balanceSheet2019.shortLongTermDebt
otherCurrentLiab2019 = balanceSheet2019.otherCurrentLiab
longTermDebt2019 = balanceSheet2019.longTermDebt
otherLiab2019 = balanceSheet2019.otherLiab
totalCurrentLiabilities2019 = balanceSheet2019.totalCurrentLiabilities
totalLiab2019 = balanceSheet2019.totalLiab
commonStock2019 = balanceSheet2019.commonStock
retainedEarnings2019 = balanceSheet2019.retainedEarnings
treasuryStock2019 = balanceSheet2019.treasuryStock
otherStockholderEquity2019 = balanceSheet2019.otherStockholderEquity
totalStockholderEquity2019 = balanceSheet2019.totalStockholderEquity
netTangibleAssets2019 = balanceSheet2019.netTangibleAssets
//------------- Variables +3 year -----------------------------
cash2018 = balanceSheet2018.cash
shortTermInv2018 = balanceSheet2018.shortTermInvestments
netRecievables2018 = balanceSheet2018.netReceivables
inv2018 = balanceSheet2018.inventory
otherCurrentAssests2018 = balanceSheet2018.otherCurrentAssets
totalCurrentAssets2018 = balanceSheet2018.totalCurrentAssets
longTermInvestments2018 = balanceSheet2018.longTermInvestments
propertyPlantEquipment2018 = balanceSheet2018.propertyPlantEquipment
otherAssets2018 = balanceSheet2018.otherAssets
totalAssets2018 = balanceSheet2018.totalAssets
accountsPayable2018 = balanceSheet2018.accountsPayable
shortLongTermDebt2018 = balanceSheet2018.shortLongTermDebt
otherCurrentLiab2018 = balanceSheet2018.otherCurrentLiab
longTermDebt2018 = balanceSheet2018.longTermDebt
otherLiab2018 = balanceSheet2018.otherLiab
totalCurrentLiabilities2018 = balanceSheet2018.totalCurrentLiabilities
totalLiab2018 = balanceSheet2018.totalLiab
commonStock2018 = balanceSheet2018.commonStock
retainedEarnings2018 = balanceSheet2018.retainedEarnings
treasuryStock2018 = balanceSheet2018.treasuryStock
otherStockholderEquity2018 = balanceSheet2018.otherStockholderEquity
totalStockholderEquity2018 = balanceSheet2018.totalStockholderEquity
netTangibleAssets2018 = balanceSheet2018.netTangibleAssets

console.log("------START--------")
console.log("cash: " + cash2021)
console.log("short term investments: " + shortTermInv2021)
console.log("------END--------")

  }

  async function retrieveCashFlowStatement(req,res){
    let symbol = 'AAPL';
    cashflow = await yahooFinance.quoteSummary(symbol,{modules:["cashflowStatementHistory"]});
      
    //Storing the annual cashflow statements
    cashflow2021 = cashflow.cashflowStatementHistory.cashflowStatements.at(0)
    cashflow2020 = cashflow.cashflowStatementHistory.cashflowStatements.at(1)
    cashflow2019 = cashflow.cashflowStatementHistory.cashflowStatements.at(2)
    cashflow2018 = cashflow.cashflowStatementHistory.cashflowStatements.at(3)
  
    //Buffett Logic and scoring to be included


// -------------- Most recent statement variables ----------------
    netIncome2021 = cashflow2021.netIncome
    depreciation2021 = cashflow2021.depreciation
    changeToNetIncome2021 = cashflow2021.changeToNetIncome
    changeToAccountReceivables2021 = cashflow2021.changeToAccountReceivables
    changeToLiabilities2021 = cashflow2021.changeToLiabilities
    changeToInventory2021 = cashflow2021.changeToInventory
    changeToOperatingActivities2021 = cashflow2021.changeToOperatingActivities
    totalCashFromOperatingActivities2021 = cashflow2021.totalCashFromOperatingActivities
    capitalExpenditures2021 = cashflow2021.capitalExpenditures
    investments2021 = cashflow2021.investments
    otherCashflowsFromInvestingActivities2021 = cashflow2021.otherCashflowsFromInvestingActivities
    totalCashflowsFromInvestingActivities2021 = cashflow2021.totalCashflowsFromInvestingActivities
    dividendsPaid2021 = cashflow2021.dividendsPaid
    netBorrowings2021 = cashflow2021.netBorrowings
    otherCashflowsFromFinancingActivities2021 = cashflow2021.otherCashflowsFromFinancingActivities
    totalCashFromFinancingActivities2021 = cashflow2021.totalCashFromFinancingActivities
    changeInCash2021 = cashflow2021.changeInCash
    repurchaseOfStock2021 = cashflow2021.repurchaseOfStock
    issuanceOfStock2021 = cashflow2021.issuanceOfStock
//------------- Variables +1 year -----------------------------
    netIncome2020 = cashflow2020.netIncome
    depreciation2020 = cashflow2020.depreciation
    changeToNetIncome2020 = cashflow2020.changeToNetIncome
    changeToAccountReceivables2020 = cashflow2020.changeToAccountReceivables
    changeToLiabilities2020 = cashflow2020.changeToLiabilities
    changeToInventory2020 = cashflow2020.changeToInventory
    changeToOperatingActivities2020 = cashflow2020.changeToOperatingActivities
    totalCashFromOperatingActivities2020 = cashflow2020.totalCashFromOperatingActivities
    capitalExpenditures2020 = cashflow2020.capitalExpenditures
    investments2020 = cashflow2020.investments
    otherCashflowsFromInvestingActivities2020 = cashflow2020.otherCashflowsFromInvestingActivities
    totalCashflowsFromInvestingActivities2020 = cashflow2020.totalCashflowsFromInvestingActivities
    dividendsPaid2020 = cashflow2020.dividendsPaid
    netBorrowings2020 = cashflow2020.netBorrowings
    otherCashflowsFromFinancingActivities2020 = cashflow2020.otherCashflowsFromFinancingActivities
    totalCashFromFinancingActivities2020 = cashflow2020.totalCashFromFinancingActivities
    changeInCash2020 = cashflow2020.changeInCash
    repurchaseOfStock2020 = cashflow2020.repurchaseOfStock
    issuanceOfStock2020 = cashflow2020.issuanceOfStock
//------------- Variables +2 year -----------------------------
    netIncome2019 = cashflow2019.netIncome
    depreciation2019 = cashflow2019.depreciation
    changeToNetIncome2019 = cashflow2019.changeToNetIncome
    changeToAccountReceivables2019 = cashflow2019.changeToAccountReceivables
    changeToLiabilities2019 = cashflow2019.changeToLiabilities
    changeToInventory2019 = cashflow2019.changeToInventory
    changeToOperatingActivities2019 = cashflow2019.changeToOperatingActivities
    totalCashFromOperatingActivities2019 = cashflow2019.totalCashFromOperatingActivities
    capitalExpenditures2019 = cashflow2019.capitalExpenditures
    investments2019 = cashflow2019.investments
    otherCashflowsFromInvestingActivities2019 = cashflow2019.otherCashflowsFromInvestingActivities
    totalCashflowsFromInvestingActivities2019 = cashflow2019.totalCashflowsFromInvestingActivities
    dividendsPaid2019 = cashflow2019.dividendsPaid
    netBorrowings2019 = cashflow2019.netBorrowings
    otherCashflowsFromFinancingActivities2019 = cashflow2019.otherCashflowsFromFinancingActivities
    totalCashFromFinancingActivities2019 = cashflow2019.totalCashFromFinancingActivities
    changeInCash2019 = cashflow2019.changeInCash
    repurchaseOfStock2019 = cashflow2019.repurchaseOfStock
    issuanceOfStock2019 = cashflow2019.issuanceOfStock
//------------- Variables +3 year -----------------------------
    netIncome2018 = cashflow2018.netIncome
    depreciation2018 = cashflow2018.depreciation
    changeToNetIncome2018 = cashflow2018.changeToNetIncome
    changeToAccountReceivables2018 = cashflow2018.changeToAccountReceivables
    changeToLiabilities2018 = cashflow2018.changeToLiabilities
    changeToInventory2018 = cashflow2018.changeToInventory
    changeToOperatingActivities2018 = cashflow2018.changeToOperatingActivities
    totalCashFromOperatingActivities2018 = cashflow2018.totalCashFromOperatingActivities
    capitalExpenditures2018 = cashflow2018.capitalExpenditures
    investments2018 = cashflow2018.investments
    otherCashflowsFromInvestingActivities2018 = cashflow2018.otherCashflowsFromInvestingActivities
    totalCashflowsFromInvestingActivities2018 = cashflow2018.totalCashflowsFromInvestingActivities
    dividendsPaid2018 = cashflow2018.dividendsPaid
    netBorrowings2018 = cashflow2018.netBorrowings
    otherCashflowsFromFinancingActivities2018 = cashflow2018.otherCashflowsFromFinancingActivities
    totalCashFromFinancingActivities2018 = cashflow2018.totalCashFromFinancingActivities
    changeInCash2018 = cashflow2018.changeInCash
    repurchaseOfStock2021 = cashflow2018.repurchaseOfStock
    issuanceOfStock2018 = cashflow2018.issuanceOfStock
    
  
   
  
  console.log("------START--------")
  
  console.log("------END--------")
  
    }

    async function retrieveIncomeStatement(req,res){
      let symbol = 'AAPL';
      incomeStatement = await yahooFinance.quoteSummary(symbol,{modules:["incomeStatementHistory"]});
        
      //Storing the annual cashflow statements
       incomeStatement2021 =  incomeStatement.incomeStatementHistory.incomeStatementHistory.at(0)
       incomeStatement2020 =  incomeStatement.incomeStatementHistory.incomeStatementHistory.at(1)
       incomeStatement2019 =  incomeStatement.incomeStatementHistory.incomeStatementHistory.at(2)
       incomeStatement2018 =  incomeStatement.incomeStatementHistory.incomeStatementHistory.at(3)


      //Buffett Logic and scoring to be included


  // -------------- Most recent statement variables ----------------
      netIncome2021 = cashflow2021.netIncome
      depreciation2021 = cashflow2021.depreciation
      changeToNetIncome2021 = cashflow2021.changeToNetIncome
      changeToAccountReceivables2021 = cashflow2021.changeToAccountReceivables
      changeToLiabilities2021 = cashflow2021.changeToLiabilities
      changeToInventory2021 = cashflow2021.changeToInventory
      changeToOperatingActivities2021 = cashflow2021.changeToOperatingActivities
      totalCashFromOperatingActivities2021 = cashflow2021.totalCashFromOperatingActivities
      capitalExpenditures2021 = cashflow2021.capitalExpenditures
      investments2021 = cashflow2021.investments
      otherCashflowsFromInvestingActivities2021 = cashflow2021.otherCashflowsFromInvestingActivities
      totalCashflowsFromInvestingActivities2021 = cashflow2021.totalCashflowsFromInvestingActivities
      dividendsPaid2021 = cashflow2021.dividendsPaid
      netBorrowings2021 = cashflow2021.netBorrowings
      otherCashflowsFromFinancingActivities2021 = cashflow2021.otherCashflowsFromFinancingActivities
      totalCashFromFinancingActivities2021 = cashflow2021.totalCashFromFinancingActivities
      changeInCash2021 = cashflow2021.changeInCash
      repurchaseOfStock2021 = cashflow2021.repurchaseOfStock
      issuanceOfStock2021 = cashflow2021.issuanceOfStock
      //------------- Variables +1 year -----------------------------
      netIncome2020 = cashflow2020.netIncome
      depreciation2020 = cashflow2020.depreciation
      changeToNetIncome2020 = cashflow2020.changeToNetIncome
      changeToAccountReceivables2020 = cashflow2020.changeToAccountReceivables
      changeToLiabilities2020 = cashflow2020.changeToLiabilities
      changeToInventory2020 = cashflow2020.changeToInventory
      changeToOperatingActivities2020 = cashflow2020.changeToOperatingActivities
      totalCashFromOperatingActivities2020 = cashflow2020.totalCashFromOperatingActivities
      capitalExpenditures2020 = cashflow2020.capitalExpenditures
      investments2020 = cashflow2020.investments
      otherCashflowsFromInvestingActivities2020 = cashflow2020.otherCashflowsFromInvestingActivities
      totalCashflowsFromInvestingActivities2020 = cashflow2020.totalCashflowsFromInvestingActivities
      dividendsPaid2020 = cashflow2020.dividendsPaid
      netBorrowings2020 = cashflow2020.netBorrowings
      otherCashflowsFromFinancingActivities2020 = cashflow2020.otherCashflowsFromFinancingActivities
      totalCashFromFinancingActivities2020 = cashflow2020.totalCashFromFinancingActivities
      changeInCash2020 = cashflow2020.changeInCash
      repurchaseOfStock2020 = cashflow2020.repurchaseOfStock
      issuanceOfStock2020 = cashflow2020.issuanceOfStock
      //------------- Variables +2 year -----------------------------
      netIncome2019 = cashflow2019.netIncome
      depreciation2019 = cashflow2019.depreciation
      changeToNetIncome2019 = cashflow2019.changeToNetIncome
      changeToAccountReceivables2019 = cashflow219.changeToAccountReceivables
      changeToLiabilities2019 = cashflow2019.changeToLiabilities
      changeToInventory2019 = cashflow2019.changeToInventory
      changeToOperatingActivities2019 = cashflow2019.changeToOperatingActivities
      totalCashFromOperatingActivities2019 = cashflow2019.totalCashFromOperatingActivities
      capitalExpenditures2019 = cashflow2019.capitalExpenditures
      investments2019 = cashflow2019.investments
      otherCashflowsFromInvestingActivities2019 = cashflow2019.otherCashflowsFromInvestingActivities
      totalCashflowsFromInvestingActivities2019 = cashflow2019.totalCashflowsFromInvestingActivities
      dividendsPaid2019 = cashflow2019.dividendsPaid
      netBorrowings2019 = cashflow2019.netBorrowings
      otherCashflowsFromFinancingActivities2019 = cashflow2019.otherCashflowsFromFinancingActivities
      totalCashFromFinancingActivities2019 = cashflow2019.totalCashFromFinancingActivities
      changeInCash2019= cashflow2019.changeInCash
      repurchaseOfStock2019 = cashflow2019.repurchaseOfStock
      issuanceOfStock2019 = cashflow2019.issuanceOfStock
      //------------- Variables +3 year -----------------------------
      netIncome2018 = cashflow2018.netIncome
      depreciation2018 = cashflow2018.depreciation
      changeToNetIncome2018 = cashflow2018.changeToNetIncome
      changeToAccountReceivables2018 = cashflow2018.changeToAccountReceivables
      changeToLiabilities2018 = cashflow2018.changeToLiabilities
      changeToInventory2018 = cashflow2018.changeToInventory
      changeToOperatingActivities2018 = cashflow2018.changeToOperatingActivities
      totalCashFromOperatingActivities2018 = cashflow2018.totalCashFromOperatingActivities
      capitalExpenditures2018 = cashflow218.capitalExpenditures
      investments2018 = cashflow2018.investments
      otherCashflowsFromInvestingActivities2018 = cashflow2018.otherCashflowsFromInvestingActivities
      totalCashflowsFromInvestingActivities2018 = cashflow2018.totalCashflowsFromInvestingActivities
      dividendsPaid2018 = cashflow2018.dividendsPaid
      netBorrowings2018 = cashflow2018.netBorrowings
      otherCashflowsFromFinancingActivities2018 = cashflow2018.otherCashflowsFromFinancingActivities
      totalCashFromFinancingActivities2018 = cashflow2018.totalCashFromFinancingActivities
      changeInCash2018 = cashflow2018.changeInCash
      repurchaseOfStock2018 = cashflow2018.repurchaseOfStock
      issuanceOfStock2018 = cashflow2018.issuanceOfStock
      
    
     
    
    console.log("------START--------")
    console.log(incomeStatement2021)
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
// let bankBalances1 = document.getElementById('bank_balance1').value


// let bankBalances1 = Number(prompt('Enter the first bank balance'))
// let bankBalances2 = Number(prompt('Enter the second bank balance'))
// let bankBalances3 = Number(prompt('Enter the third bank balance'))
// let bankBalances4 = Number(prompt('Enter the fourth bank balance'))
// let bankBalances5 = Number(prompt('Enter the fifth bank balance'))

// let bankBalances = prompt("Enter all the balances seperated by a ','").split(',')

//..................................................................................
function calculateInterest()
{
    let bankBalance1 = Number(document.getElementById('bank_balance1').value)
    let bankBalance2 = Number(document.getElementById('bank_balance2').value)
    let bankBalance3 = Number(document.getElementById('bank_balance3').value)
    let bankBalance4 = Number(document.getElementById('bank_balance4').value)
    let bankBalance5 = Number(document.getElementById('bank_balance5').value)
    
    let updatedBankBalance1 = document.getElementById("updated_bank_balance1")
    let updatedBankBalance2 = document.getElementById("updated_bank_balance2")
    let updatedBankBalance3 = document.getElementById("updated_bank_balance3")
    let updatedBankBalance4 = document.getElementById("updated_bank_balance4")
    let updatedBankBalance5 = document.getElementById("updated_bank_balance5")

    let bankBalances = [bankBalance1,bankBalance2,bankBalance3,bankBalance4,bankBalance5]
    

    for(let i = 0; i < bankBalances.length; i++){
            bankBalances[i] = Number(bankBalances[i])
            if(bankBalances[i] > 200000){
              bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
              bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002
            } else if (bankBalances[i] > 100000 ) {
              bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
              bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
            } else {
              bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
            }
          }
        
          updatedBankBalance1.value = bankBalances[0]
          updatedBankBalance2.value = bankBalances[1]
          updatedBankBalance3.value = bankBalances[2]
          updatedBankBalance4.value = bankBalances[3]
          updatedBankBalance5.value = bankBalances[4]
        }
//.................................................................................................



// function calInterest()
// {
//     let inputBalancesNodes = document.getElementsByClassName("input_balances")
    
//     for(let i=0;i<inputBalancesNodes.length;i++)
//     {

//     }
//     let displayUpdatedBalances = document.getElementsByClassName('display-updated-balance')
//     for(let i=0;i<inputBalancesNodes.length;i++)
//     {

//     }
// }
const costPrice = document.querySelector("#cost-price")
const quantity = document.querySelector("#quantity")
const currentPrice = document.querySelector("#current-price")
const output = document.querySelector("#output")
const button = document.querySelector("#check-btn")

button.addEventListener("click",submitHandler)

function submitHandler(){
    const cp = Number(costPrice.value)   //Cost Price
    const quant = Number(quantity.value) //Quantity
    const sp = Number(currentPrice.value) //Selling Price
    if(cp && sp && quant){
        calculateProfitAndLoss(cp,quant,sp)
    }
    else{
        output.innerText = "Please enter all the fields correctly"
    }
    

}






function calculateProfitAndLoss(cp,quant,sp){ //CP = Cost Price and SP = Selling Prie
    if(sp > cp){
        const profit = sp - cp
        const absoluteProfit = profit * quant
        const profitPercent = (profit/cp) * 100
        displayOutput(`Profit is ${profit} and absolute profit is ${absoluteProfit} and profit% is ${profitPercent.toFixed(2)}`)
    }
    else if(cp > sp){
        const loss = cp - sp
        const absoluteLoss = loss * quant
        const lossPercent = (loss/cp) * 100
        displayOutput(`Loss is ${loss} and absolute loss is ${absoluteLoss} and loss% is ${lossPercent.toFixed(2)}`)
    }
    else{
        displayOutput(`You made neither a loss nor any gain`)
    }
}

function displayOutput(msg){
    output.innerText = msg
}


// Calculate Button calculation****************************
const incomeInput = document.getElementById("input-income");
const foodInput = document.getElementById("input-food");
const rentInput = document.getElementById("input-rent");
const clothesInput = document.getElementById("input-clothes");
const displayExpense = document.getElementById("total-expense");
let balanceTotal = document.getElementById("balance-Total");

function calculateButton() {
  /* if (foodInput.value >= 0 && rentInput.value >= 0 && clothesInput.value >= 0 && foodInput.value<incomeInput.value && rentInput.value<incomeInput.value && clothesInput.value<incomeInput.value) { */
    const totalExpenses =
      Number(foodInput.value) +
      Number(rentInput.value) +
      Number(clothesInput.value);
    displayExpense.innerText = totalExpenses;
    balanceTotal.innerText = Number(incomeInput.value) - totalExpenses;
//   } else {
//     const errorMsg = document.createElement("span");
//     errorMsg.innerText = "<Invalid input>";
//     document.getElementById("total-expense").appendChild(errorMsg);
//   }
}

//Save Button calculation ****************************************
const saveInput = document.getElementById("input-save");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

function saveButton() {
  savingAmount.innerText = (Number(saveInput.value) / 100) * incomeInput.value;
  remainingBalance.innerText = balanceTotal.innerText - savingAmount.innerText;
}

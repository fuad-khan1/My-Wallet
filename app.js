// Calculate Button calculation****************************
const incomeInput = document.getElementById("input-income");
const foodInput = document.getElementById("input-food");
const rentInput = document.getElementById("input-rent");
const clothesInput = document.getElementById("input-clothes");
const displayExpense = document.getElementById("total-expense");
let balanceTotal = document.getElementById("balance-Total");

function calculateButton() {
  const totalExpenses =
    Number(foodInput.value) +
    Number(rentInput.value) +
    Number(clothesInput.value);
  if (totalExpenses < parseInt(incomeInput.value)) {
    displayExpense.innerText = totalExpenses;
    balanceTotal.innerText = Number(incomeInput.value) - totalExpenses;
  } else {
    const error1 = document.createElement("p");
    error1.innerText = "Invalid input!!!!!";
    document.getElementById("total-expense").appendChild(error1);
  }
}

//Save Button calculation ****************************************
const saveInput = document.getElementById("input-save");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

function saveButton() {
    savingAmount.innerText =
      (Number(saveInput.value) / 100) * incomeInput.value;
    remainingBalance.innerText =
      balanceTotal.innerText - savingAmount.innerText;
    const error2 = document.createElement("p");
    error2.innerText = "Invalid input!";
    document.body.appendChild(error2);
  }


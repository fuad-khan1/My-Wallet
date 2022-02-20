// Calculate Button
const foodInput = document.getElementById("input-food");
  const rentInput = document.getElementById("input-rent");
  const clothesInput = document.getElementById("input-clothes");
  const displayExpense = document.getElementById("total-expense");

  const incomeInput = document.getElementById("input-income");
  let balanceTotal = document.getElementById("balance-Total");
function calculateButton() {
//   const foodInput = document.getElementById("input-food");
//   const rentInput = document.getElementById("input-rent");
//   const clothesInput = document.getElementById("input-clothes");
//   const displayExpense = document.getElementById("total-expense");

  const totalExpenses =
    Number(foodInput.value) +
    Number(rentInput.value) +
    Number(clothesInput.value);
  displayExpense.innerText = totalExpenses;
//   const incomeInput = document.getElementById("input-income");
//   let balanceTotal = document.getElementById("balance-Total");
  balanceTotal.innerText = Number(incomeInput.value) - totalExpenses;
}

//Save Button
function saveButton() {
  const saveInput = document.getElementById("input-save");
  const savingAmount = document.getElementById("saving-amount");
  const remainingBalance = document.getElementById("remaining-balance");
  savingAmount.innerText =
    (Number(saveInput.value) / 100) * balanceTotal.innerText;
}
// document.getElementById('btn-save').addEventListener('click',function(){
//     calculateButton()
// })

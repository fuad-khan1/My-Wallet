function calculateButton() {
  const foodInput = document.getElementById("input-food");
  const rentInput = document.getElementById("input-rent");
  const clothesInput = document.getElementById("input-clothes");
  const displayExpense = document.getElementById("total-expense");

  const totalExpenses =
    Number(foodInput.value) +
    Number(rentInput.value) +
    Number(clothesInput.value);
  displayExpense.innerText = totalExpenses;
  const incomeInput = document.getElementById("input-income");
  let balanceTotal = document.getElementById("balance-Total");
  balanceTotal.innerText = Number(incomeInput.value) - totalExpenses;
}

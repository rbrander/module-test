// app.mjs (Module JavaScript)
console.log('app.mjs');
import { sum } from './test-module.mjs';

const txtFirstNumber = document.getElementById('txtFirstNumber');
const txtSecondNumber = document.getElementById('txtSecondNumber');
const txtResult = document.getElementById('txtResult');

window.calculate = () => {
  const firstNumber = Number(txtFirstNumber.value);
  const secondNumber = Number(txtSecondNumber.value);
  txtResult.value = sum(firstNumber, secondNumber);
  return false;
};

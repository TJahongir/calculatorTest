// Selecting DOM Elements
const numbersBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operator]');
const clear = document.querySelector('[data-clear]');
const numDeleteBtn = document.querySelector('[data-delete]');
const percent = document.querySelector('[data-percent]');
const equal = document.querySelector('[data-equal]');
// Board
const upperValue = document.getElementById('upperValue');
const lowerValue = document.getElementById('lowerValue');

// Variable
let countHolder;
let result;
let first;
let second;
let operator;

// Functions
const clearAll = () => {
  upperValue.textContent = '';
  lowerValue.textContent = '';
};

const numAppend = num => {
  lowerValue.textContent = lowerValue.textContent + num;
};

const numDelete = () => {
  if (lowerValue.textContent != '') {
    lowerValue.textContent = lowerValue.textContent.slice(0, -1);
  } else {
    upperValue.textContent = '';
  }
};

const equals = operator => {
  switch (operator) {
    case '+':
      result = first + second;
      clearAll();
      lowerValue.textContent = result;
      break;
    case '-':
      result = first - second;
      clearAll();
      lowerValue.textContent = result;
      break;
    case 'x':
      result = first * second;
      clearAll();
      lowerValue.textContent = result;
      break;
    case '/':
      result = first / second;
      clearAll();
      lowerValue.textContent = result;
      break;
  }

  return result;
};

// Event Listeners
numbersBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (lowerValue.textContent.includes('.') && btn.textContent == '.') return;

    numAppend(btn.textContent);
    if (upperValue.textContent.includes('.')) {
      first = parseFloat(upperValue.textContent);
    } else {
      first = parseInt(upperValue.textContent, 10);
    }

    if (lowerValue.textContent.includes('.')) {
      second = parseFloat(lowerValue.textContent);
    } else {
      second = parseInt(lowerValue.textContent);
    }
  });
});

operationBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    operator = btn.textContent;
    if (upperValue.textContent != '') {
      equals(operator);
      upperValue.textContent = lowerValue.textContent + ' ' + operator;
      lowerValue.textContent = '';
    } else {
      upperValue.textContent = `${lowerValue.textContent} ${btn.textContent}`;
      lowerValue.textContent = '';
    }
  });
});

clear.addEventListener('click', () => {
  clearAll();
});

numDeleteBtn.addEventListener('click', () => {
  numDelete();
});

percent.addEventListener('click', () => {
  lowerValue.textContent = lowerValue.textContent / 100;
});

equal.addEventListener('click', () => {
  equals(operator);
});

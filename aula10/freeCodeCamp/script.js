const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

const getKeyType = key => {
  const action = key.dataset.action;
  if (!action) return 'number';
  if (['add', 'subtract', 'multiply', 'divide'].includes(action)) return 'operator';
  return action;
};

const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent;
  const action = key.dataset.action;
  const firstValue = state.firstValue;
  const modValue = state.modValue;
  const operator = state.operator;
  const previousKeyType = state.previousKeyType;

  const calculate = (n1, operator, n2) => {
    const a = parseFloat(n1);
    const b = parseFloat(n2);
    if (operator === 'add') return a + b;
    if (operator === 'subtract') return a - b;
    if (operator === 'multiply') return a * b;
    if (operator === 'divide') return a / b;
  };

  const keyType = getKeyType(key);

  if (keyType === 'number') {
    return displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate'
      ? keyContent
      : displayedNum + keyContent;
  }

  if (keyType === 'decimal') {
    if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.';
    return !displayedNum.includes('.') ? displayedNum + '.' : displayedNum;
  }

  if (keyType === 'operator') {
    return firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, displayedNum)
      : displayedNum;
  }

  if (keyType === 'clear') return '0';

  if (keyType === 'calculate') {
    if (firstValue) {
      return previousKeyType === 'calculate'
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum);
    } else {
      return displayedNum;
    }
  }
};

const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
  const keyType = getKeyType(key);
  const { firstValue, operator, modValue, previousKeyType } = calculator.dataset;

  calculator.dataset.previousKeyType = keyType;

  if (keyType === 'operator') {
    calculator.dataset.operator = key.dataset.action;
    calculator.dataset.firstValue =
      firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
        ? calculatedValue
        : displayedNum;
  }

  if (keyType === 'calculate') {
    calculator.dataset.modValue =
      firstValue && previousKeyType === 'calculate' ? modValue : displayedNum;
  }

  if (keyType === 'clear') {
    if (key.textContent === 'AC') {
      calculator.dataset.firstValue = '';
      calculator.dataset.modValue = '';
      calculator.dataset.operator = '';
      calculator.dataset.previousKeyType = '';
    }
  }
};

const updateVisualState = (key, calculator) => {
  const keyType = getKeyType(key);
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

  if (keyType === 'operator') {
    key.classList.add('is-depressed');
  }

  if (keyType === 'clear' && key.textContent !== 'AC') {
    key.textContent = 'AC';
  }

  if (keyType !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]');
    clearButton.textContent = 'CE';
  }
};

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return;

  const key = e.target;
  const displayedNum = display.textContent;
  const resultString = createResultString(key, displayedNum, calculator.dataset);

  display.textContent = resultString;
  updateCalculatorState(key, calculator, resultString, displayedNum);
  updateVisualState(key, calculator);
});

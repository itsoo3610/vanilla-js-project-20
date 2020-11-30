const currencyEl_one = document.getElementById
('currency-one');
const amountEl_one = document.getElementById
('amount-one');
const currencyEl_two = document.getElementById
('currency-two');
const amountEl_two = document.getElementById
('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the Dom
function caclulate() {
  const currencyEl_one = currencyEl_one.value;
  const currencyEl_two = currencyEl_two.value;
  fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/${currency_one}`);
} .then(res => res.json())
  .then(data => {
    const rate = data.rates[currency_two];

    rateEl.innerText = `1${currency_one} = ${rate} ${currency_two}`;

    amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });

//Event listeners
currencyEl_one.addEventListener('change',caclulate);
amountEl_one.addEventListener('input',caclulate);
currencyEl_two.addEventListener('change',caclulate);
amountEl_two.addEventListener('input',caclulate);

swap.addEventListener('click', () =>{
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currency_two.value = temp;
  caclulate();
})

caclulate();
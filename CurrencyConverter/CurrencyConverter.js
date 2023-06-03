var myHeaders = new Headers();
myHeaders.append("apikey", "XFSEtF5294zWj5Axu465qFvjGCNLk96B");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


 currecyapi = {
  key: 'XFSEtF5294zWj5Axu465qFvjGCNLk96B',

  convert: function (from, to, amount) {

  return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}&key=${currecyapi.key}`, requestOptions)
  .then(response => response.json())
  .then(data => data.result)  
  .then(result => result)
  .catch(error => console.log('error', error));


  }

}
function convertCurrency() {
  const from = document.getElementById('from_currency').value;
  const to = document.getElementById('to_currency').value;
  const amount = document.getElementById('amount').value;
  const resultElement = document.getElementById('result');

  currecyapi.convert(to, from, amount)
  .then(result => {
    const formattedResult = result.toFixed(2) + ' ' + to;
    resultElement.textContent = formattedResult;
  });
}




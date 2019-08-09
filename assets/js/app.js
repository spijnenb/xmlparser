// dom elements
const input       = document.querySelector('#input');
const parsebutton = document.querySelector('#parsebutton');
const result      = document.querySelector('#result');

// functions
const parseToString = (str) => {
  let htmldoc = new DOMParser().parseFromString(str, "text/xml")
  return new XMLSerializer().serializeToString(htmldoc);
}

const printResult = () => input.value !== "" ? result.innerHTML = parseToString(input.value) : null;

// events
parsebutton.addEventListener('click', printResult);
  
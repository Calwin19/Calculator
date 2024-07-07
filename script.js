const dis = document.getElementById("display");

function append(input) {
  if (input == '') dis.value = '';
  dis.value += input;
}
function calculate() {
  try {
    dis.value = eval(dis.value);
  }
  catch (e) {
    dis.value = 'Error';
  }
}
import './style.css'
// nota se necesita tener el npm run dev para probar la app, sino
//el import ./style.css no funciona y la pagina colapsa.

const contador_h1 = document.getElementById("account");

const buttons = document.getElementsByClassName("btn");

buttons[0].addEventListener('click',function decrease() {
  let valor = parseInt(contador_h1.textContent);
  contador_h1.textContent = valor -1;
})

buttons[1].addEventListener('click',function reset() {
  contador_h1.textContent = 0;
})

buttons[2].addEventListener('click',function Increase(params) {
  let valor = parseInt(contador_h1.textContent);
  contador_h1.textContent = valor + 1;
})


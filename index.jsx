const Root = document.getElementById("root");

let isCurrentMath = false;

let Choose = <div id="ChooseRoot">
  <button className="ButtonClass" onClick={() => { load(2, 1) }}>2 Digit x 1 Digit</button>
  <button className="ButtonClass" onClick={() => { load(2, 2) }}>2 Digit x 2 Digit</button>
  <button className="ButtonClass" onClick={() => { load(2, 3) }}>2 Digit x 3 Digit</button>
  <button className="ButtonClass" onClick={() => { load(3, 3) }}>3 Digit x 3 Digit</button>
</div>

window.addEventListener("keydown", (e) =>
{
  if (e.key == "Enter" && isCurrentMath)
  {
    checkAnswer();
  } else if (e.key == "Escape")
  {
    ReactDOM.render(Choose, Root);
  }
  console.log(e.key)
})

let currentNumbers = {
  mp1: 0,
  mp2: 0,
  num1: 0,
  num2: 0
}

function checkAnswer()
{
  if (currentNumbers.mp1 * currentNumbers.mp2 == parseInt(document.getElementById("numinput").value))
  {
    alert("Sucess!");
    load(currentNumbers.num1, currentNumbers.num2);
  } else
  {
    alert("Wrong, it was " + currentNumbers.mp1 * currentNumbers.mp2);
    load(currentNumbers.num1, currentNumbers.num2);
  }
}

function mathThing(num1, num2)
{
  console.log(num2)
  let multiplynum1 = Math.floor(Math.random() * parseInt("1" + (new Array(num1 + 1).join("0"))));
  let multiplynum2 = Math.floor(Math.random() * parseInt("1" + (new Array(num2 + 1).join("0"))));

  currentNumbers = {
    mp1: multiplynum1,
    mp2: multiplynum2,
    num1: num1,
    num2: num2
  }

  return <div id="Multiply">
    <div>{multiplynum1} x {multiplynum2} = </div>
    <input id="numinput" type="number"></input>
  </div>
}

function load(num1, num2)
{
  if (document.getElementById("numinput"))
  {
    document.getElementById("numinput").value = ""
  }
  isCurrentMath = true;
  ReactDOM.render(mathThing(num1, num2), Root);
}

function home()
{
  isCurrentMath = false;
  ReactDOM.render(Choose, Root)
}

home();
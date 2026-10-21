/* FUNCTIONING OF THE CALCULATOR */
(function () {
  const screen  = document.getElementById("screen");
  const history = document.getElementById("history");
  const keys    = document.querySelector(".keys");

  let current  = "0";      // value shown on screen
  let previous = null;     // first operand
  let operator = null;     // + - * /
  let typing   = true;     // false right after pressing an operator (next digit starts a new number)
  let justEvaluated = false;
  let expression = "";     // text shown after "="

  const symbols = { "+": "+", "-": "−", "*": "×", "/": "÷" };

  function format(str) {
    if (str === "Error") return str;
    const [int, dec] = str.split(".");
    const sign = int.startsWith("-") ? "-" : "";
    const grouped = Number(int.replace("-", "")).toLocaleString("en-IN");
    return sign + grouped + (dec !== undefined ? "." + dec : "");
  }

  function update() {
    screen.textContent = format(current);
    if (operator) history.textContent = `${format(previous)} ${symbols[operator]}`;
    else history.textContent = expression;
    document.querySelectorAll(".key-op").forEach(b =>
      b.classList.toggle("active", b.dataset.value === operator && !typing));
  }

  function startFresh() {
    if (justEvaluated || current === "Error") { current = "0"; justEvaluated = false; expression = ""; }
    if (!typing) { current = "0"; typing = true; }
  }

  function inputNumber(n) {
    startFresh();
    if (current.replace("-", "").replace(".", "").length >= 14) return;
    current = current === "0" ? n : current + n;
  }

  function inputDecimal() {
    startFresh();
    if (!current.includes(".")) current += ".";
  }

  function calculate(a, b, op) {
    a = parseFloat(a); b = parseFloat(b);
    let r;
    switch (op) {
      case "+": r = a + b; break;
      case "-": r = a - b; break;
      case "*": r = a * b; break;
      case "/": if (b === 0) return "Error"; r = a / b; break;
      default:  return String(b);
    }
    return String(parseFloat(r.toPrecision(12)));   // avoids 0.1 + 0.2 issues
  }

  function chooseOperator(op) {
    if (current === "Error") return;
    if (operator && typing) {                       // chaining: 2 + 3 + ...
      previous = calculate(previous, current, operator);
      if (previous === "Error") { current = "Error"; previous = null; operator = null; typing = true; return; }
      current = previous;
    } else if (!operator) {
      previous = current;
    }
    operator = op;
    typing = false;
    justEvaluated = false;
    expression = "";
  }

  function equals() {
    if (!operator || current === "Error") return;
    expression = `${format(previous)} ${symbols[operator]} ${format(current)} =`;
    current = calculate(previous, current, operator);
    previous = null; operator = null;
    typing = true; justEvaluated = true;
  }

  function clearAll() {
    current = "0"; previous = null; operator = null;
    typing = true; justEvaluated = false; expression = "";
  }

  function del() {
    if (justEvaluated || current === "Error") { clearAll(); return; }
    if (!typing) return;
    current = current.length > 1 && !(current.length === 2 && current.startsWith("-"))
      ? current.slice(0, -1) : "0";
  }

  function percent() {
    if (current === "Error") return;
    current = String(parseFloat((parseFloat(current) / 100).toPrecision(12)));
  }

  function handle(action, value) {
    switch (action) {
      case "number":   inputNumber(value); break;
      case "decimal":  inputDecimal(); break;
      case "operator": chooseOperator(value); break;
      case "equals":   equals(); break;
      case "clear":    clearAll(); break;
      case "delete":   del(); break;
      case "percent":  percent(); break;
    }
    update();
  }

  // Mouse / touch
  keys.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (btn) handle(btn.dataset.action, btn.dataset.value);
  });

  // Keyboard support
  document.addEventListener("keydown", e => {
    if (/^[0-9]$/.test(e.key))        handle("number", e.key);
    else if (e.key === ".")           handle("decimal");
    else if ("+-*/".includes(e.key))  handle("operator", e.key);
    else if (e.key === "Enter" || e.key === "=") { e.preventDefault(); handle("equals"); }
    else if (e.key === "Backspace")   handle("delete");
    else if (e.key === "Escape")      handle("clear");
    else if (e.key === "%")           handle("percent");
  });

  update();
})();

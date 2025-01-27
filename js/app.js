
const title = document.getElementById('title')

const params = new URLSearchParams(window.location.search);
const param1 = params.get("param1"); // Получаем значение параметра "param1"
const param2 = params.get("param2"); // Получаем значение параметра "param2"

// Когда пользователь нажимает где-то вне модального окна, оно также закрывается
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const GetSymbol = (symbol) => {
    //logo.textContent = symbol
    updateSymbol(`BINANCE:${symbol}.P`)
}



console.log('qqqqqqqqqqqqqqq', param1)
if (param1) {
    GetSymbol(param1)
    title.textContent = param1
}
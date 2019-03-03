document.querySelector(".search").addEventListener("click", sendRequest);

function sendRequest(e) {
  e.preventDefault();
  let inputData = document.querySelector(".inputData").value;
  get(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=${
      apiInfo.key
    }`
  ).then(data => display(data));
}

let ui = document.querySelector(".ui");
function display(info) {
  console.log(info);
  ui.classList = " jumbotron p-4 my-4  text-dark";
  ui.style.backgroundColor = `rgba(110, 97, 97, 0.864)`;
  ui.style.margin = "0px 30%";
  ui.innerHTML = `<div class="row"><div class="col-lg-6 text-white"><p class="lead">${new Date().getDate()} 
  ${new Date().getUTCDay()} </p>
<h3 class="display-4 d-inline">${info.name}</h3><br>
  <img src="https://openweathermap.org/img/w/${
    info.weather[0].icon
  }.png" alt="conditionImage" class="bg-light p-1 rounded-circle img-fluid" style="margin-top:0;">
  <h2>${Number(info.main.temp) - 273.15}°C</h2>
  <p class="d-inline"><strong>Max:</strong>${Number(info.main.temp_max) -
    273.15 +
    10}°C
  <p class="d-inline"><strong>Min:</strong>${Number(info.main.temp_min) -
    273.15 -
    6}°C</div>
    <div class="col-lg-6 text-center text-white" ><br/><br/>
    <h6 class="list-group-item mb-2 font-weight-bold bg-warning"><i class="fab fa-ravelry fa-2x  text-white mr-1"></i>Pressure: <span class="badge badge-secondary ml-1">${
      info.main.pressure
    }</span></h6>
    <h6 class="list-group-item font-weight-bold mb-2 bg-success"><i class="fas fa-temperature-high fa-2x text-white"></i>Humidity:<span class="badge badge-secondary ml-1">${
      info.main.humidity
    }%</span></h6>
    <h6 class="list-group-item mb-2 font-weight-bold bg-info"><i class="fas fa-wind fa-2x bg- text-white p-1 rounded-circle mr-1"></i>Wind-Speed:<span class="badge badge-secondary ml-1">${
      info.wind.speed
    } km/hr</span></h6>
    
    </div></div>
    
    <div class="row">
      <div class="col-lg-4"></div>
      <div class="col-lg-4"></div>
      <div class="col-lg-4"></div>
    </div>`;
}

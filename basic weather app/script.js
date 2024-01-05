const apikey = "43a566e22a5fe5831ee0561a4a580887";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weathericn");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  let data = await response.json();

  console.log(data);

  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "      km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle" ) {
      weathericon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist" || "Haze") {
      weathericon.src = "images/mist.png";
    } else {
      weathericon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});

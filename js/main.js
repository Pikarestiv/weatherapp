// axios = require("axios");
apiKey = "b03296b4cd13cee124eefb895fcebf4f";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  let lat = crd.latitude;
  let lon = crd.longitude;


  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;

  axios.get(url)
    .then(
      (res) => {
        var currTemp = res.data.current.temp;
        document.querySelector("#currTemp").innerHTML = currTemp;
        console.log(res.data);
      }
    )
    .catch(
      (err) =>{
        console.log(err);
      }
    )
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
function displayresult(){
    var city = document.getElementById("city").value;
    var apikey = '3dc8d82e068c8ab76a152f949f67ce98';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
     + city + '&appid=' +apikey+'&units=metric')
        .then(Response => Response.json())
        .then(data => {
            var t = data ['main']['temp']
            document.getElementById("output").innerHTML = t;
        })
} 
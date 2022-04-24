const url = "https://api.openweathermap.org/data/2.5/"
const key = "a397dcad7898906f9274fc634fc5af4b"
const searchBar=document.getElementById("searchBar");
function getSelectValue()
{
    let selectedValue=searchBar.value;
    // document.querySelector(".temp").innerHTML=
    if (selectedValue === "Şehir Seçin"){
        document.querySelector(".city").innerText="";
        document.querySelector(".desc").innerText="";
        document.querySelector(".temp").innerHTML="";
        document.querySelector(".img-1").innerHTML=``;
        document.querySelector(".img-2").innerHTML=``;
        document.querySelector(".img-3").innerHTML=``;
    }
    else{
        // document.querySelector(".city").innerText=selectedValue;
        document.querySelector(".img-1").innerHTML=`<img src='./img/${selectedValue}.jpg' width="350px" height="300px">`;
        document.querySelector(".img-2").innerHTML=`<img src='./img/${selectedValue}2.jpg' width="350px" height="300px">`;
        document.querySelector(".img-3").innerHTML=`<img src='./img/${selectedValue}3.jpg' width="350px" height="300px">`;
        let query = `${url}weather?q=${selectedValue}&appid=${key}&units=metric&lang=tr`
        fetch(query)
        .then(weather =>{
          return weather.json()
        })
        .then(displayResult)       
    }
    
}
const displayResult=(result) =>{
    document.querySelector(".temp").innerHTML=`${Math.round(result.main.temp)}°C`;
    document.querySelector(".desc").innerText=`Bugün ${result.name.toUpperCase()} İçin Hava "${result.weather[0].description.toUpperCase()}"`;
    if (result.weather[0].description === "açık"){
        document.querySelector(".temp").style.color = "#fbb034"
    }
    else if(result.weather[0].description === "parçalı az bulutlu"){
        document.querySelector(".temp").style.color = "white"
    }
    else if(result.weather[0].description === "parçalı bulutlu"){
        document.querySelector(".temp").style.color = "#24e3f4"
    }
    else if(result.weather[0].description === "az bulutlu"){
        document.querySelector(".temp").style.color = "#1442e8"
    }
    else{
        document.querySelector(".temp").style.color = "red"

    }
    console.log(result)
}


getSelectValue();
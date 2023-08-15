//init
const init = () => {
    const apiKey = "0ee6c1db7e356740c01f8648f5605c25";
    const country = "3674962"; //MEDELLIN
    const data = "http://api.openweathermap.org/geo/1.0/reverse?lat=6.2661496&lon=-75.5810686&limit=5&appid="+apiKey;
    const data2 = "https://api.openweathermap.org/data/2.5/forecast?id="+country+"&appid="+apiKey;
    const data3 = "http://api.openweathermap.org/data/2.5/find?q=CO&units=imperial&type=accurate&mode=json&appid=0ee6c1db7e356740c01f8648f5605c25";

    const render = document.getElementById("render");
    const renderDia = document.getElementById("render-dia");

    // Hacer una petición para un usuario con ID especifico
    axios.get(data2)
    .then(function (response) {
        const ciudad = response.data.city;
        const datos = response.data.list;

        console.log(ciudad);

        // Cantidad de milisegundos
        var luna = ciudad.sunset; // Cambia este valor a la cantidad que desees
        var sol = ciudad.sunrise; // Cambia este valor a la cantidad que desees


        render.innerHTML += `
            <div class="contenedor-datos">
                Ciudad Actual <br>${ciudad.name}
            </div>
        `;

        if(sol < luna){
            renderDia.innerHTML += `🌞`;
            document.title = "🌞 Hola mundo";
        }else{
            renderDia.innerHTML += `🌚`;
            document.title = "🌚 Hola mundo";
        }

        datos.map((item) => {
            const temperatura = item.main.temp;
            const humedad = item.main.humidity;

            const temperaturaReal = temperatura - 32 / 1.8;
            const datosFinal = Math.round(temperaturaReal);

            console.log(`humedad real: ${humedad}`);
        })
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // siempre sera executado
    });

}

init();
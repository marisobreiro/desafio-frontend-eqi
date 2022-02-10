var cdi = document.querySelector('#cdi');
var ipca = document.querySelector('#ipca');

fetch("http://localhost:3000/indicadores")
    .then(response => response.json())
     .then(data => {
         // CDI
        cdi.innerHTML = (data[0].valor + ` %`);

        // IPCA
        ipca.innerHTML = (data[1].valor + ` %`);
    })
    .catch(function(error) {
        console.log(error);
    });

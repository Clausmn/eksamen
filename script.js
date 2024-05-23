// Garnomregner 
function calculate() {
    // Henter inputværdier fra HTML
    const originaleMeter = parseFloat(document.getElementById('originaleMeter').value);
    const originaleGram = parseFloat(document.getElementById('originaleGram').value);
    const opskriftGram = parseFloat(document.getElementById('opskriftGram').value);
    const nyeMeter = parseFloat(document.getElementById('nyeMeter').value);
    const nyeGram = parseFloat(document.getElementById('nyeGram').value);

    // Beregner total meter der skal bruges
    const totaleMeterBehov = (opskriftGram / originaleGram) * originaleMeter;

    // Beregner total gram der skal bruges
    const totaleGramBehov = (totaleMeterBehov / nyeMeter) * nyeGram;

    // Beregner nyt garn behov
    const nyeGarnNøgler = totaleMeterBehov / nyeMeter;

    // Runder op til nærmeste hele tal
    const afrundedeNyeGarnNøgler = Math.ceil(nyeGarnNøgler);

    // Viser resultater
    const resultater = `
        <p>Du skal bruge i alt ${totaleMeterBehov.toFixed(2)} meter garn til din opskrift<br><br></p>
        <p>Af det nye garn skal du bruge<br><br> ${totaleGramBehov.toFixed(2)} gram / ${afrundedeNyeGarnNøgler} nøgler</p>
    `;

    document.getElementById('resultater').innerHTML = resultater;
}

// filtrering garn.html
  document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.header-container h1');
    const wrappers = document.querySelectorAll('.wrapper');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const id = header.id.replace('Header', 'Wrapper');
            wrappers.forEach(wrapper => {
                if (wrapper.id === id) {
                    wrapper.classList.remove('hidden');
                } else {
                    wrapper.classList.add('hidden');
                }
            });
        });
    });
}); 


// Popup beskrivelse 
// Når brugeren klikker på diven, åbner min popup
function myFunction(element) {
    var popup = element.querySelector('.popuptext'); 
    if (popup.classList.contains('show')) {
        popup.classList.remove('show');
    } else {
        popup.classList.add('show');
        setTimeout(function() {
            popup.classList.remove('show');
        }, 60000); // Popup vil være til stede i 1 minut (60000 milliseconds)
    }
}

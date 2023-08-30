let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra() {
    console.log(myExtrasInput.value);
    const push = myExtras.push(myExtrasInput.value);
    console.table(myExtras);
    updateExtras();
}




function updateExtras() {
    // Brug map til at generere teksten for hvert ekstraudstyr
    const extrasText = myExtras.map(extra => `<li>${extra}</li>`).join('');
    
    // Opdater innerHTML i listen
    myExtrasListElement.innerHTML = extrasText;

}

// I updateExtras-funktionen bruger vi map-metoden til at gennemgå hver værdi i myExtras-arrayen og generere en liste med <li>-elementer, der indeholder ekstraudstyret. Derefter bruger vi .join('') for at konvertere det genererede HTML til en enkelt tekststreng.

// Endelig opdaterer vi innerHTML i myExtrasListElement ved at tildele den genererede tekst til det. Dette vil opdatere HTML-elementet med den nye liste over ekstraudstyr, hver gang en ny ekstraudstyr tilføjes.

// Bemærk: Sørg for, at dine HTML-elementer med id'erne "extraUdstyr" og "extraList" er tilgængelige i din HTML-fil.







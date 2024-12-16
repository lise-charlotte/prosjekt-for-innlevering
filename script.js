setTimeout(
    function () {
        console.log("Noe har skjedd");
    },
    5000
)

function delay(ms) {
    return new Promise(function (resolve){
        setTimeout(resolve, ms);
    });
}

async function getApiData () {
    const response = await fetch ("https://catfact.ninja/facts");
    console.log(response);

    const data = await response.json();
    console.log(data);
    console.log(data.data);
    console.log(data.data[4]);
    console.log(data.data[4].fact);

    const catFact = data.data;
    const factContainer = document.querySelector("#displayResult");


    for (let index = 0; index < catFact.length; index++) {
        console.log(catFact[index].fact);

        const displayResult = document.createElement("displayResult");

        const section = document.createElement("section");
        section.appendChild("displayResult");

    };

    function generateFact() {
        const randomIndex = Math.floor(Math.random() * catFact.length);
        const randomFact = catFact[randomIndex];
        document.querySelector("#displayResult") = randomFact

    },
};

getApiData();
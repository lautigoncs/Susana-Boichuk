
const obras = [{
        name: "Obra 1",
        technique: "oleo",
        size: "10x20",
        image: "../assets/paintings/practica.jpg"
    } ,
    {
        name: "Obra 2",
        technique: "oleo",
        size: "15x20",
        image: "../assets/paintings/Luna llena.jpeg"
    } ,
    {
        name: "Obra 3",
        technique: "oleo2",
        size: "12x20",
        image: "../assets/paintings/Serenidad.jpg"
    } ,
    {
        name: "Obra 4",
        technique: "tempera",
        size: "10x20",
        image: "../assets/paintings/Alegoria de las cenizas.jpg"
    } ,
    {
        name: "Obra 5",
        technique: "tempera",
        size: "15x20",
        image: "../assets/paintings/practica.jpg"
    }
]

const filters = document.querySelector("#filters");
filters.oninput = () => {
    const technique = filters.querySelector("#technique").value,
    sizes = [...filters.querySelectorAll("#size input:checked")].map(
        (n) => n.value
    )
    outputPaintings(
        obras.filter(
        (n) =>
            (!technique || n.technique === technique) &&
            (!sizes.length || sizes.includes(n.size))
        )
    );
};

function outputPaintings(painting) {
    document.getElementById("paintingsSection").innerHTML = painting
    .map((element) => `
    <a href="${element.image}" data-lightbox="paintings" data-title="${element.name}." class="fetaturedImageContainer">
        <img src="${element.image}" class="featuredImg">
        <p>${element.name}</p>
        <p>${element.technique}</p>
        <p>${element.size}</p>
    </a>
    `
    )
    .join("");
}

outputPaintings(obras);      
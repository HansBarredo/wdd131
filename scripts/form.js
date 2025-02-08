const modified = document.querySelector("#modified");

let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;



let product = [
    "Smartwatch",
    "Wireless earbuds",
    "Smart glasses",
    "Smart home security camera",
    "Smart speaker",
    "Mechanical keyboard",
    "Gaming mouse",
    "High-refresh-rate monitor",
    "External SSD",
    "Multi-port USB-C hub",
    "Foldable smartphone",
    "Portable power bank",
    "Wireless charging pad",
    "VR headset",
    "Smart ring",
    "Noise-canceling headphones",
    "Bluetooth soundbar",
    "4K streaming device",
    "Portable mini projector",
    "Retro gaming console"
];

let list = document.getElementById("product");

product.forEach(item => {
    let option = document.createElement("option");
        option.textContent=item;
        option.value = item;
        list.appendChild(option);
});


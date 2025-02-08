document.addEventListener("DOMContentLoaded", () => {
    let list = document.getElementById("product");
    if (!list) {
        console.error("Element with ID 'product' not found.");
        return;
    }

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

    product.forEach(item => {
        let option = document.createElement("option");
        option.textContent = item;
        option.value = item;
        list.appendChild(option);
    });
});

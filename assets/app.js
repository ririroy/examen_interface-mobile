class Speaker {
    constructor(
    name,
    description,
    price,
    brand,
    hasFreeDelivery,
    isInStock,
    rating,
    colour
    ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.hasFreeDelivery = hasFreeDelivery;
    this.isInStock = isInStock;
    this.rating = rating;
    this.colour = colour;
    }

    toHtml() {
        const div = document.createElement('div');

        const speakerName = document.createElement('p');
        speakerName.textContent = 'Name: ' + this.name;
        div.appendChild(speakerName);

        const speakerDescription = document.createElement('p');
        speakerDescription.textContent = 'Description ' + this.description;
        div.appendChild(speakerDescription);

        const speakerPrice = document.createElement('p');
        speakerPrice.textContent = 'Price: ' + this.price;
        div.appendChild(speakerPrice);

        const speakerBrand = document.createElement('p');
        speakerBrand.textContent = 'Brand: ' + this.brand;
        div.appendChild(speakerBrand);

        const freeDelivery = document.createElement('p');
        freeDelivery.textContent = 'Free delivery: ' + this.hasFreeDelivery;
        div.appendChild(freeDelivery);

        const inStock = document.createElement('p');
        inStock.textContent = 'In stock: ' + this.isInStock;
        div.appendChild(inStock);

        const speakerRating = document.createElement('p');
        speakerRating.textContent = 'Rating: ' + this.rating;
        div.appendChild(speakerRating);

        const speakerColor = document.createElement('p');
        speakerColor.textContent = 'Color: ' + this.colour;
        div.appendChild(speakerColor);

        return div;
    }
}
const speakers = [
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
];

speakers.forEach(speaker => {
    document.body.appendChild(speaker.toHtml());
})
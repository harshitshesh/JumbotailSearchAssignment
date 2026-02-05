const { products } = require("../data/products")




const keywordDictionary = {

    brand: [
        "iphone", "ifone", "apple", "samsung", "realme", "mi", "redmi",
        "oneplus", "oppo", "vivo", "nokia", "motorola", "pixel",
        "google phone", "lava", "infinix", "tecno"
    ],

    category: [
        "phone", "mobile", "smartphone", "laptop", "headphone",
        "earbuds", "earphone", "charger", "adapter", "cover",
        "case", "screen guard", "tempered", "watch", "smartwatch",
        "tablet", "speaker", "bluetooth speaker", "tv", "monitor"
    ],


    priceIntent: [
        "cheap", "sasta", "budget", "low price", "kam price",
        "under", "below", "affordable", "best price",
        "deal", "offer", "discount", "sale", "value for money",
        "premium", "mehenga", "expensive", "high price"
    ],

    specs: [
        "ram", "storage", "battery", "camera", "display",
        "screen", "refresh rate", "processor", "chip",
        "fast charging", "wireless charging",
        "amoled", "oled", "lcd", "5g", "4g", "wifi",
        "bluetooth", "type c", "fingerprint", "face unlock"
    ],

    storage: [
        "32gb", "64gb", "128gb", "256gb", "512gb", "1tb"
    ],


    ram: [
        "2gb", "3gb", "4gb", "6gb", "8gb", "12gb", "16gb", "24gb"
    ],

    color: [
        "black", "white", "red", "blue", "green", "gold",
        "silver", "purple", "pink", "grey", "yellow"
    ],

    quality: [
        "best", "top", "latest", "new", "old",
        "refurbished", "second hand", "strong",
        "durable", "lightweight", "heavy"
    ],


    accessory: [
        "cover", "case", "charger", "cable",
        "screen guard", "tempered glass",
        "earbuds", "headset", "powerbank"
    ],


    hinglish: [
        "mujhe phone chahiye",
        "koi acha phone",
        "best mobile do",
        "latest phone",
        "sasta phone dikhao",
        "iphone chahiye",
        "budget mobile",
        "accha camera phone",
        "gaming phone",
        "battery acha wala"
    ]

}


function searchdata(req, res) {

    let query = req.query.q

    if (!query) res.json(products)





    const words = query.toLowerCase().split(" ")



    const result = products.map(p => {
        let score = 0

        words.forEach(word => {

            if (p.brand?.toLowerCase().includes(word)) {
                score += 50
            }
            if (p.model?.toLowerCase().includes(word)) {
                score += 30
            }
            if (p.category?.toLowerCase().includes(word)) {
                score += 20
            }

            if (keywordDictionary.brand.includes(word)) {
                score += 50;
            }

            if (keywordDictionary.category.includes(word)) {
                score += 30;
            }

            if (keywordDictionary.priceIntent.includes(word)) {
                score += 40;
            }





            if (p.description?.toLowerCase().includes(word)) {
                score += 10
            }

            if (word === "Iphone" )
                score += 35;

            if ( p.model == word )
                score += 35;
            if ( p.brand==word )
                score += 35;

            if (word === "cheap" && p.price < 20000)
                score += 45;

            if (word === "expensive" && p.price > 40000)
                score += 45;


            if (word === "best" && p.rating >= 4)
                score += 20;

          

            if (word === "camera phone" && p.rating >= 4)
                score += 15;

            if (word === "best phone under 20000" && p.rating >= 4)
                score += 15;

          

            if (word.includes("mujhe sastha sasta iphone chaiye") && p.rating >= 4)
                score += 20;


            score += Number(p.rating) || 0
        });




        return { ...p, score }

    })



    const filtered = result.filter(p => p.score > 0)

    filtered.sort((a, b) => b.score - a.score)
    const allproducts = filtered.slice(0, 20)
    res.status(201).json(allproducts)

}
module.exports = { searchdata }


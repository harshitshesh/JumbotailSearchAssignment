
const products = []


const brands = ["Iphone", "Samsung", "Oneplus", "Realme"];

const colors = ["Silver", "Gold", "White", "Black", "Pink"];

const rams = [4, 6, 8, 12, 16];
const storages = [32, 64, 128, 256];


for (let i = 1; i <= 1000; i++) {

  const brand = brands[Math.floor(Math.random() * brands.length)]

  const ram = rams[Math.floor(Math.random() * rams.length)]
  const color = colors[Math.floor(Math.random() * colors.length)]

  const storage = storages[Math.floor(Math.random() * storages.length)]

  const category= i % 5 == 0 ? "charger" : i % 7==0 ? "cover" : "phone"

  products.push({

    id: i,
    brand: brand,
    model: `${brand}-${String.fromCharCode(Math.floor(Math.random() * 4) + 65)}${Math.floor(Math.random() * (20 - 10) + 10)}`,
 category,
    price: category=="phone" ?Math.floor(Math.random() * 50000) + 10000:Math.floor(Math.random() * 500) + 100,
    stock: Math.floor(Math.random() * (20 - 0) + 0),
rating: (Math.random()* 2 + 3).toFixed(1),

 ...(category=="phone" &&{description:`Latest ${brand} phone with ${ram}GB RAM, ${storage}GB storage, ${color} color variant. Good camera and battery backup.`}  ),

 ram: category=="phone"?`${ram}GB`:"",
 storage: category=="phone"?`${storage}GB`:"",
 battery: category=="phone"? `${4000 + Math.floor(Math.random()** 2000)}mAh`:"",
 color:color,
 camera: category=="phone"? `${12 + Math.floor(Math.random() *60)}MP`:"",
 discount:Math.floor(Math.random()* 40)




  })
}


module.exports = { products }
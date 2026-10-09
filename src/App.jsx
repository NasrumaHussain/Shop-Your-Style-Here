import NavBar from "./HomePage/NavBar";
import Description from "./HomePage/Description";
import ProductCard from "./HomePage/ProductCard";
import {useState} from "react"
import Shoe1 from "./HomePage/ShoeImages/Shoe1.png"
import Shoe2 from "./HomePage/ShoeImages/Shoe2.png"
import Shoe3 from "./HomePage/ShoeImages/Shoe3.png"
import Shoe4 from "./HomePage/ShoeImages/Shoe4.png"
import Shoe5 from "./HomePage/ShoeImages/Shoe5.png"
import Shoe6 from "./HomePage/ShoeImages/Shoe6.png"
import Shoe7 from "./HomePage/ShoeImages/Shoe7.png"
import HairPin1 from "./HomePage/HairpinsImages/HairPin1.png"
import HairPin2 from "./HomePage/HairpinsImages/HairPin2.png"
import HairPin3 from "./HomePage/HairpinsImages/HairPin3.png"
import HairPin4 from "./HomePage/HairpinsImages/HairPin4.png"
import HairPin5 from "./HomePage/HairpinsImages/HairPin5.png"
import HairPin6 from "./HomePage/HairpinsImages/HairPin6.png"


const products = [
  {id: 1, image: Shoe1,
   name: "Caradise Womens High Chunky Heeled Boot",
   description: "Caradise Womens High Chunky Heeled Boots Zip Up Square Toe Ankle Booties",
   price: "1900 Tk",
   category: "Shoes"},
   {id: 2, image: Shoe2,
   name: "Classic Black Patent Ankle Strap Heels ",
   description: "You can never go wrong with classic black pumps! These patent ankle strap stilettos are perfect for office, dates, and formal events. Sleek, shiny, and goes with literally everything. Wardrobe essential!",
   price: "2000 Tk",
   category: "Shoes"},
   {id: 3, image: Shoe3,
   name: "Mahogany Double Buckle Pointed Toe Flat",
   description:"Mahogany double buckle pointed toe flat mules - brown textured fabric with glossy patent toe cap and elegant gold buckles, soft and comfy for everyday wear. Perfect for slow mornings, journaling, and coffee at home.",
   price: "1900 Tk",
   category: "Shoes"},
   {id: 4, image: Shoe4,
   name: "Round Toe Sheepskin Lace-Up Oxford Shoe ",
   description: "Designed for daily commutes, these Oxford shoes combine classic style with practicality. Featuring a round toe and crafted from premium sheepskin, they offer a soft, comfortable fit.",
   price: "2000 Tk",
   category: "Shoes"},
   {id: 5, image: Shoe5,
   name: "Glossy Dark Cherry Brown Mary Jane Block Heels",
   description: "Elevate your wardrobe with these glossy dark cherry brown Mary Jane heels featuring a chunky block heel, platform sole, and adjustable buckle strap.",
   price: "1900 Tk",
   category: "Shoes"},
   {id: 6, image: Shoe6,
   name: "Cherry Red Block Heel Pumps",
   description: "Cherry red is the new neutral These block heel pumps with bow detail, square toe are giving full Old Money vibes. Comfy, classy, and perfect for office to dinner.",
   price: "1900 Tk",
   category: "Shoes"},
   {id: 7, image: Shoe7,
   name: "Work Ballet Flats Mules",
   description: "Work ballet flats: non-slip Mary Janes for business casual days that actually keep you comfortable",
   price: "1900 Tk",
   category: "Shoes"},

  //HairPins
   {id: 8, image: HairPin1,
   name: "Floral hairpin With Ink-Colored tassel",
   description: "Elegant Retro Chinese-Style Floral Hairpin With Ink-Colored Tassel – Stylish Ponytail Holder ",
   price: "1900 Tk",
   category: "Hair Pins"},
   {id: 9, image: HairPin2,
   name: "Ancient Style hairpin",
   description: " Perfect for elegant buns, Korean-inspired hairstyles, coquette fashion, and aesthetic everyday looks. ",
   price: "1900 Tk",
   category: "Hair Pins"},
   {id: 10, image: HairPin3,
   name: "Tortoise hairpin",
   description: "Perfect for elegant buns, coquette fashion, and aesthetic everyday looks. ",
   price: "1900 Tk",
   category: "Hair Pins"},
   {id: 11, image: HairPin4,
   name: "french hairpin",
   description: "Perfect for elegant buns, coquette fashion, and aesthetic everyday looks. ",
   price: "1900 Tk",
   category: "Hair Pins"},
   {id: 12, image: HairPin5,
   name: "Silver Sakura Hair Stick",
   description: "Celebrate natural beauty with this Sakura-inspired hair stick. Featuring delicate flower accents and a sleek silver-tone finish.",
   price: "1900 Tk",
   category: "Hair Pins"},
   {id: 13, image: HairPin6,
   name: "Silver Hair Stick with pearl luster",
   description: "Exquisite silver hair stick with pearl luster and swaying charm, curved branch design, elegant hair.",
   price: "1900 Tk",
   category: "Hair Pins"},
   ]

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts = products.filter((product) =>
    selectedCategory === "All" || product.category === selectedCategory);
  
  return(
    <>
   <NavBar onCategorySelect={setSelectedCategory}></NavBar>
   <Description></Description>

   <div className="product_container">
   {filteredProducts.map((product) => (
    <ProductCard
    key={product.id}
    image={product.image}
    name={product.name}
    description={product.description}
    price={product.price}
    />
   ))}
   </div>
   
   
   </>
  );
}

export default App

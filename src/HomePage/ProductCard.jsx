import "./ProductCard.css"

function ProductCard({image, name, description, price, category}) {

  return(
    <div className="shoe">
      <img src={image} alt={name}></img>
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <p className="price">{price}</p>
      <button onClick={() => alert(description)}>View Product</button>
    </div>

  );
}

export default ProductCard
// ToyDetail.jsx
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import axios from "axios";
import "./ToyDetail.css";
import { useCartStore } from "../../store/cartStore.jsx"

export const ToyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [toy, setToy] = useState({});

  useEffect(() => {
    const fetchToy = async () => {
      try {
        const json = await axios(
          `https://rayuela.onrender.com/api/products/${id}`
        );
        setToy(json.data);
      } catch (error) {
        console.error("Error fetching toy details:", error);
      }
    };
    fetchToy()
  }, [id])

  const addToCart = useCartStore(state => state.addToCart)
  const toyUnitsQ = useCartStore(state => state.toyUnitsQ)

  return (
    <>
      <div className="the-header-container">
        <div className="detail-title-icon">
          <h1 className="detail-title">
            Rayuela Shopping Cart
            <Link to="/cart">
              <CiShoppingCart className="detail-icon" />
            </Link>
          </h1>
          <div className="red-box-detail">{toyUnitsQ}</div>
        </div>

        <button className="btn home-btn" onClick={() => navigate("/")}>
          Volver al Inicio
          <CiHome className="home-icon" />
        </button>
      </div>

      <div className="detail-container">
        <h2>{toy.name}</h2>
        <img className="img" src={toy.img} alt={toy.name} />
        <p>{toy.description}</p>
        <p>Precio: ${toy.price}</p>
        <p>Categoría: {toy.category}</p>
        <p>Edades Recomendadas: {toy.age}</p>
        <button 
        id={toy.id} 
        className="btn toy-detail-btn"
        onClick={() => addToCart(toy.id)}
        >
          Agregar al Carrito
          <CiShoppingCart className="toy-detail-cart-icon" />
        </button>
      </div>
    </>
  );
};

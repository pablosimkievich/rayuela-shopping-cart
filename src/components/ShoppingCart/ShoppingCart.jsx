import { Item } from "./Item.jsx"
import "./ShoppingCart.css"
import { Link, useNavigate } from 'react-router-dom'
import { CiHome } from "react-icons/ci"
import { CiShoppingCart } from "react-icons/ci"
import { useCartStore } from "../../store/cartStore.jsx"

export const ShoppingCart = () => {

  const navigate = useNavigate()

  const toyUnitsQ = useCartStore(state => state.toyUnitsQ)

  return (
    <div>
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

      

      <Item />


    </div>
  );
};

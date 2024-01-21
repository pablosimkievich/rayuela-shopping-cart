import { Item } from "./Item.jsx";
import "./ShoppingCart.css";
import { Link, useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { useCartStore } from "../../store/cartStore.jsx";

export const ShoppingCart = () => {
  const navigate = useNavigate();

  const toyUnitsQ = useCartStore((state) => state.toyUnitsQ);
  const totalAmount = useCartStore((state) => state.totalAmount);

  return (
    <div className="shopping-cart-container" >
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

        <button className="btn home-btn" 
        onClick={() => navigate("/")}>
          Volver al Inicio
          <CiHome className="home-icon" />
        </button>
      </div>

      <div className="amount-container">
        <h2 className="amount-title">Monto Total: $ {totalAmount} </h2>
        <button 
        className="btn checkout-btn"
        onClick={() => navigate("/checkout")}
        >
          Checkout
          <CiMoneyCheck1 className="checkout-icon" />
        </button>
      </div>

      <Item />
    </div>
  );
};

import "./ShoppingCart.css";
import { Link, useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { useCartStore } from "../../store/cartStore.jsx";

export const ShoppingCart = ({ cartItem }) => {
  const navigate = useNavigate();

  const toyUnitsQ = useCartStore((state) => state.toyUnitsQ);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore(state => state.addToCart)

  return (
    <div className="shopping-cart-container">
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
      {totalAmount > 0 ? (
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
      ) : (
        <h2>El Carro de Compras está vacío</h2>
      )}

      {cart?.map((cartItem, i) => {
        return (
          <div className="cart-item-container">
            <table>
              <tbody>
                <tr className="table table-row">
                  <img className="item-img" src={cartItem.img} alt="" />
                  <p className="item-name">{cartItem.name}</p>
                  <p className="item-price">$ {cartItem.price}</p>
                  <div className="input-button-container">
                    <input
                      className="item-input"
                      type="number"
                      min="1"
                      max="30"
                      onChange={() => addToCart()}
                    />
                    <button className="remove-button"> X </button>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

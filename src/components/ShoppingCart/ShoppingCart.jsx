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
  const cartItems = useCartStore((state) => state.cart);
  const removeCartItem = useCartStore(state => state.removeCartItem)
  const updateCartItemQ = useCartStore(state => state.updateCartItemQ)

const handleChange = (e) => {
  updateCartItemQ(e.target.id, e.target.value)
}

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

      {cartItems?.map((cartItem, i) => {
        return (
          <div className="cart-items-container">
            <div>
                <div className="table table-row" key={cartItem.id}>
                  <img className="item-img" src={cartItem.img} alt="" />
                  <p className="item-name">{cartItem.name}</p>
                  <p className="item-price">$ {cartItem.price}</p>
                    <input
                      id={cartItem.id}
                      className="item-input"
                      type="number"
                      min="1"
                      max="30"
                      defaultValue={cartItem.quantity}
                      onChange={(handleChange)}
                    />
                    <button 
                      className="remove-button"
                      onClick={() => removeCartItem(cartItem.id)}
                      > X </button>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

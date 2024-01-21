import { useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import mercadopago from "../../assets/img/mercado-pago.svg";
import visa from "../../assets/img/visa.svg";
import paypal from "../../assets/img/paypal.svg";
import "./Checkout.css";

export const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="the-header-container">
        <div className="detail-title-icon">
          <h1 className="detail-title">Rayuela Shopping Cart</h1>
        </div>

        <button className="btn home-btn" onClick={() => navigate("/")}>
          Volver al Inicio
          <CiHome className="home-icon" />
        </button>
      </div>

      <div className="checkout-container">
        <div className="pay-method-container">
          <img className="img" src={mercadopago} alt="mercadopago" />
          <img className="img" src={visa} alt="visa" />
          <img className="img" src={paypal} alt="paypal" />
        </div>
        <h1 className="checkout-title">¡ Gracias por su compra !</h1>
      </div>
    </div>
  );
};

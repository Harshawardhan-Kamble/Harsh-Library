import { useState } from "react";
import addToCartItem from "../../../assets/icons/add_cart.svg";
const ListItem = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const cartHandler = () => {
    setCounter(1);
  };
  const increaseCounterByOne = () => {
    setCounter(counter + 1);
  };

  const descreaseCounterByOne = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <div className="item-card">
      <img className="img-fluid" src={data.img} alt="placeholder"></img>
      <div className="item-card__information">
        <div className="pricing">
          <span>₹{data.newPrice}</span>
          <small>
            <strike>₹{data.oldPrice}</strike>
          </small>
        </div>
        <div className="title">
          <h3>{data.title}</h3>
        </div>
      </div>

      {counter >= 1 ? (
        <div className="cart-addon">
          <button onClick={descreaseCounterByOne}>
            <span>-</span>
          </button>
          <span>{counter}</span>
          <button onClick={increaseCounterByOne}>
            <span>+</span>
          </button>
        </div>
      ) : (
        <button className="cart-add" onClick={cartHandler}>
          <span>Add to Cart</span>
          <img src={addToCartItem} alt="cart"></img>
        </button>
      )}
    </div>
  );
};
export default ListItem;

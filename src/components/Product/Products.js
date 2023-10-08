import { useEffect } from "react";
import ListItem from "./ListItems/ListItem";
import axios from "axios";
const Product = () => {
  const items = [
    {
      id: "001",
      title: "Can't Hurt Me",
      img: "https://m.media-amazon.com/images/I/41WrRylIsSL._SY425_.jpg",

      newPrice: 420,
      oldPrice: 600,
    },
    {
      id: "002",
      title: "Atomic Habits",
      img: "https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg",

      newPrice: 750,
      oldPrice: 1499,
    },
    {
      id: "003",
      title: "Meditations",
      img: "https://m.media-amazon.com/images/I/41tBvAk4ifL._SY445_SX342_.jpg",

      newPrice: 2750,
      oldPrice: 3499,
    },
    {
      id: "004",
      title: "Deep Work",
      img: "https://m.media-amazon.com/images/I/31PBdo581fL._SY445_SX342_.jpg",
      newPrice: 2554,
      oldPrice: 3499,
    },
    {
      id: "005",
      title: "Chanakya",
      img: "https://m.media-amazon.com/images/I/51kAx9nyRGL._SY445_SX342_.jpg",
      newPrice: 3750,
      oldPrice: 4499,
    },
    {
      id: "006",
      title: "Naval Ravikant",
      img: "https://m.media-amazon.com/images/I/31bDtgec8NL._SY445_SX342_.jpg",

      newPrice: 1750,
      oldPrice: 2499,
    },
    {
      id: "007",
      title: "Rich Dad Poor Dad",
      img: "https://m.media-amazon.com/images/I/51Hfv2MfNGL._SY445_SX342_.jpg",

      newPrice: 3750,
      oldPrice: 4499,
    },
    {
      id: "008",
      title: "The 5 Am Club",
      img: "https://m.media-amazon.com/images/I/41MC15v6UIL._SY445_SX342_.jpg",

      newPrice: 2750,
      oldPrice: 3499,
    },
    {
      id: "009",
      title: "Elon Musk",
      img: "https://m.media-amazon.com/images/I/41YMXMqcqtL._SY445_SX342_.jpg",

      newPrice: 3750,
      oldPrice: 4499,
    },
  ];
  useEffect(() => {
    axios
      .get("https://harsh-library-default-rtdb.firebaseio.com/items.json")
      // .then((response) => response.json())
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="product-list">
        <div className="product-list--wrapper">
          {items.map((item) => {
            return <ListItem key={item.id} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Product;

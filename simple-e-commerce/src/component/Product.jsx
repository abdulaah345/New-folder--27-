import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../component/Product.css"
import RatingStars from "react-rating-stars-component"; 
import { Row, Col } from "react-bootstrap";
const Product = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && (
        <div>
          <h1>Loading....</h1>
        </div>
      )}
      <Row>
        {data.map((products) => (
          <Col key={products.id} md={4} className="mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img src={products.image} className="card-img-top" alt={products.title}  />
              <div className="card-body">
                <h6 className="card-text">{products.description}</h6>
                <h6 className="card-text">Price: {products.price}</h6>
                {/* <h6 className="card-text">Rating: {products.rating.rate}</h6> */}
                <RatingStars
                count={5}
                color2={"#ffd700"}
                value={products.rating.rate}
                isHalf={true}
                size={24}
                edit={false}
                
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Product;

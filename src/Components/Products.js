import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function Products() {
  const products = useSelector((state) => state.products);
  // console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container className="py-5">
      <Row>
        {products.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title>{product.title.slice(0, 50)}...</Card.Title>
                <Card.Text>{product.description.slice(0, 100)}...</Card.Text>
                <Card.Text>{product.price} $</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;

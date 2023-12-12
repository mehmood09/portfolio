import reactLogo from "./assets/react.svg";
export default function Product({product}) {
    return (
<div className="card">
                  <img src={reactLogo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                    <p><strong> {product.title}</strong>
                      </p>
                    <a href="#" className="btn btn-primary">
                      Price
                    </a>
                  </div>
                </div>
    );
}

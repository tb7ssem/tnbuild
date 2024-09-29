import React from 'react';
import { useParams } from 'react-router-dom';
import './Productdetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const products = [
        { id: 1, title: "Wireless Earbuds", price: "$99.99", description: "High-quality wireless earbuds with noise cancellation and long battery life.", image: "path/to/image1.jpg", reviews: [{ rating: 5, text: "Excellent product!" }, { rating: 4, text: "Very good, but could be cheaper." }, { rating: 3, text: "Average quality." }], additionalInfo: "Free shipping on orders over $50. 30-day return policy. 1-year warranty." },
        { id: 2, title: "Smart Watch", price: "$199.99", description: "Feature-rich smart watch with heart rate monitor and GPS.", image: "path/to/image2.jpg", reviews: [{ rating: 5, text: "Love this watch!" }, { rating: 4, text: "Great features, but battery life could be better." }, { rating: 3, text: "Good, but not great." }], additionalInfo: "Free shipping on orders over $50. 30-day return policy. 1-year warranty." }
        // Add more products as needed
    ];

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-details">
            <img className="product-image" src={product.image} alt={product.title} />
            <div className="product-info">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
                <div className="call-to-action">
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="buy-now">Buy Now</button>
                </div>
                <div className="customer-reviews">
                    <h2>Customer Reviews</h2>
                    {product.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <div className="review-rating">{"★".repeat(review.rating)}</div>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>
                <div className="additional-info">
                    <p>{product.additionalInfo}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
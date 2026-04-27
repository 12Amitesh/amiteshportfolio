import React, { useEffect, useState } from "react";
export interface Product {
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: string;
  price: number;
  discountedPrice: number;
  description: string;
  category: string;
  type: string;
  stock: number;
  brand: string;
  size: string[];
  image: string;
  rating: number;
}
const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.org/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data); // API returns { data: [...] }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product._id} style={styles.card}>
          <img
            loading="lazy"                  // native lazy load
            src={product.image}              // original image URL
            alt={product.title}
            width={300}                      // helps prevent layout shift
            height={180}                     // helps prevent layout shift
            style={styles.image}
          />
          <h3>{product.title}</h3>
          <p style={styles.price}>${product.discountedPrice}</p>
          {product.oldPrice && (
            <p style={styles.oldPrice}>${product.oldPrice}</p>
          )}
          <p style={styles.category}>{product.category}</p>
          <p style={styles.description}>
            {product.description.length > 60
              ? product.description.slice(0, 60) + "..."
              : product.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover", // keeps aspect ratio
    borderRadius: "8px",
    marginBottom: "10px",
  },
  price: {
    fontWeight: "bold",
    color: "green",
    margin: "5px 0",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "gray",
    fontSize: "13px",
    margin: "0",
  },
  category: {
    fontSize: "14px",
    color: "gray",
    margin: "5px 0",
  },
  description: {
    fontSize: "13px",
    textAlign: "center",
  },
};

export default Products;
import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Encontre o Fotografo Perfeito</h1>
        <p style={styles.subtitle}>
          Do orcamento economico ao premium - profissionais para cada necessidade
        </p>
        <button style={styles.button} onClick={() => navigate("/fotografos")}>
          Explorar Fotografos
        </button>
      </div>
    </div>
  );
}

const styles = {
  hero: {
  backgroundImage: "url('/paisagem1.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  marginTop: "-70px",
  paddingTop: "70px",
},
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#eee",
    marginBottom: "32px",
  },
  button: {
    backgroundColor: "#fff",
    color: "#2563eb",
    border: "none",
    padding: "14px 32px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Hero;
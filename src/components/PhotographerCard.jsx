import React from "react";
import { useNavigate } from "react-router-dom";

function PhotographerCard({ photographer }) {
  const navigate = useNavigate();

  const tierColors = {
    "Economico": { background: "#dcfce7", color: "#166534" },
    "Medio": { background: "#e0e7ff", color: "#3730a3" },
    "Premium": { background: "#fae8ff", color: "#7e22ce" },
  };

  const tierStyle = tierColors[photographer.tier] || { background: "#e0e7ff", color: "#3730a3" };

  return (
    <div style={styles.card}>
      <div style={{ position: "relative" }}>
        <img
          src={photographer.image}
          alt={photographer.name}
          style={styles.image}
        />
        <span style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          padding: "4px 12px",
          borderRadius: "20px",
          fontSize: "13px",
          fontWeight: "600",
          backgroundColor: tierStyle.background,
          color: tierStyle.color,
        }}>
          {photographer.tier}
        </span>
      </div>

      <div style={styles.body}>
        <h3 style={styles.name}>{photographer.name}</h3>
        <p style={styles.specialty}>{photographer.specialty}</p>

        <div style={styles.meta}>
          <span>estrela {photographer.rating} ({photographer.reviews})</span>
          <span>local {photographer.city}</span>
        </div>

        <p style={styles.bio}>{photographer.bio.substring(0, 90)}...</p>

        <div style={styles.footer}>
          <span style={styles.price}>R$ {photographer.price}/hora</span>
          <button
            style={styles.link}
            onClick={() => navigate("/fotografo/" + photographer.id)}
          >
            Ver Perfil
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    display: "block",
  },
  body: {
    padding: "16px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "700",
    margin: "0 0 4px",
    color: "#1a1a1a",
  },
  specialty: {
    color: "#2563eb",
    fontSize: "14px",
    margin: "0 0 8px",
  },
  meta: {
    display: "flex",
    gap: "16px",
    fontSize: "13px",
    color: "#555",
    marginBottom: "8px",
  },
  bio: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
    marginBottom: "12px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "700",
    fontSize: "15px",
    color: "#1a1a1a",
  },
  link: {
    background: "none",
    border: "none",
    color: "#2563eb",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default PhotographerCard;
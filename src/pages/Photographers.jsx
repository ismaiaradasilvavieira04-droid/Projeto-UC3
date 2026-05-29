import React, { useState } from "react";
import PhotographerCard from "../components/PhotographerCard.jsx";
import photographers from "../data/photographers";

const categories = ["Todos", "Casamentos", "Eventos", "Retratos", "Corporativo", "Moda", "Paisagens", "Infantil", "Publicitário"];

function Photographers() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? photographers
      : photographers.filter((p) => p.tags.includes(activeCategory));

  return (
    <div style={styles.page}>
      {/* Filtros */}
      <div style={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={{
              ...styles.filterBtn,
              ...(activeCategory === cat ? styles.filterActive : {}),
            }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de fotógrafos */}
      <div style={styles.grid}>
        {filtered.map((p) => (
          <PhotographerCard key={p.id} photographer={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={styles.empty}>Nenhum fotógrafo encontrado para essa categoria.</p>
      )}
    </div>
  );
}

const styles = {
 
 page: {
  padding: "32px 40px",
  paddingTop: "90px",
  maxWidth: "1200px",
  margin: "0 auto",
},
  
  filters: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "32px",
  },
  filterBtn: {
    padding: "8px 18px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    color: "#333",
  },
  filterActive: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "1px solid #2563eb",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  empty: {
    textAlign: "center",
    color: "#888",
    marginTop: "40px",
    fontSize: "16px",
  },
};

export default Photographers;
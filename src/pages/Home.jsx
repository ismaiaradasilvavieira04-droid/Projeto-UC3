import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import PhotographerCard from "../components/PhotographerCard.jsx";
import photographers from "../data/photographers.js";

function Home() {
  const navigate = useNavigate();
  const featured = photographers.slice(0, 3);

  return (
    <div>
      <Hero />
      <div>
      <div style={styles.features}>
  <div style={styles.featureCard}>
    <div style={{ ...styles.iconBox, backgroundColor: "#dbeafe" }}>📷</div>
    <h3 style={styles.featureTitle}>Variedade de Estilos</h3>
    <p style={styles.featureText}>Desde casamentos ate fotografia corporativa, encontre especialistas em todas as areas</p>
  </div>
  <div style={styles.featureCard}>
    <div style={{ ...styles.iconBox, backgroundColor: "#dcfce7" }}>💰</div>
    <h3 style={styles.featureTitle}>Todos os Orcamentos</h3>
    <p style={styles.featureText}>De fotografos economicos a profissionais premium - opcoes para todos os bolsos</p>
  </div>
  <div style={styles.featureCard}>
    <div style={{ ...styles.iconBox, backgroundColor: "#f3e8ff" }}>✅</div>
    <h3 style={styles.featureTitle}>Profissionais Verificados</h3>
    <p style={styles.featureText}>Todos os fotografos sao verificados com avaliacoes reais de clientes</p>
  </div>
</div>
      </div>

      <div style={{ ...styles.section, backgroundColor: "#f8f9fa" }}>
        <h2 style={styles.sectionTitle}>Fotografos em Destaque</h2>
        <p style={styles.sectionSubtitle}>Conheca alguns dos nossos profissionais mais bem avaliados</p>
        <div style={styles.grid}>
          {featured.map((p) => (
            <PhotographerCard key={p.id} photographer={p} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <button style={styles.button} onClick={() => navigate("/fotografos")}>
            Ver Todos os Fotografos
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  section: {
    padding: "60px 40px",
  },

  featureCard: {
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "32px 24px",
  textAlign: "center",
  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
},
iconBox: {
  width: "72px",
  height: "72px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "32px",
  margin: "0 auto 20px",
},
featureTitle: {
  fontSize: "18px",
  fontWeight: "700",
  marginBottom: "10px",
  color: "#1a1a1a",
},
featureText: {
  fontSize: "14px",
  color: "#666",
  lineHeight: "1.6",
},
  sectionTitle: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#1a1a1a",
  },
  sectionSubtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "32px",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
    maxWidth: "900px",
    margin: "40px auto 0",
  },
  feature: {
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  button: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "14px 32px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Home;
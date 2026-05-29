import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import photographers from "../data/photographers.js";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const photographer = photographers.find((p) => p.id === Number(id));

  if (!photographer) {
    return <div style={{ padding: "40px" }}>Fotográfo não encontrado.</div>;
  }

  return (
    <div className="details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="details-card">
        <img src={photographer.image} alt={photographer.name} className="details-img" />
        <div className="details-info">
          <h1>{photographer.name}</h1>
          <p className="details-specialty">{photographer.specialty}</p>
          <p className="details-city">📍 {photographer.city} &nbsp;&nbsp; ⭐ {photographer.rating} ({photographer.reviews} avaliações) &nbsp;&nbsp; 🏅 {photographer.experience}</p>
          <p className="details-bio">{photographer.bio}</p>
          <p className="details-price">R$ {photographer.price}/hora</p>
          <div className="details-tags">
            {photographer.tags.map((tag) => (
              <span key={tag} className="details-tag">{tag}</span>
            ))}
          </div>
          <button className="details-btn">Solicitar Orçamento</button>
        </div>
      </div>

      <div className="details-portfolio">
        <h2>Portfólio</h2>
        <div className="details-portfolio-grid">
          {photographer.portfolio.map((img, i) => (
            <img key={i} src={img} alt="portfolio" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        <div>
          <div style={styles.logo}>
            <img
              src="/logo.png"
              alt="FotoConnect"
              style={styles.logoImg}
              onError={(e) => { e.target.style.display = "none"; }}
            />
           
          </div>
          <p style={styles.desc}>
            A melhor plataforma para conectar voce aos fotografos mais
            talentosos do Brasil.
          </p>
        </div>

        <div>
          <h4 style={styles.heading}>Links Rapidos</h4>
          <a href="/" style={styles.link}>Inicio</a>
          <a href="/fotografos" style={styles.link}>Encontrar Fotografos</a>
        </div>

        <div>
          <h4 style={styles.heading}>Contato</h4>
          <p style={styles.contact}>contato@fotoconnect.com.br</p>
          <p style={styles.contact}>(11) 9999-9999</p>
          <p style={styles.contact}>Sao Paulo, Brasil</p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>2026 FotoConnect. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1a1a2e",
    color: "#ccc",
    padding: "40px 40px 0",
    marginTop: "60px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: "40px",
    paddingBottom: "40px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px",
  },
  logoImg: {
    height: "80px",
    width: "auto",
  },
  logoText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
  },
  desc: {
    fontSize: "14px",
    lineHeight: "1.6",
  },
  heading: {
    color: "#fff",
    marginBottom: "12px",
    fontSize: "16px",
  },
  link: {
    display: "block",
    color: "#ccc",
    textDecoration: "none",
    fontSize: "14px",
    marginBottom: "8px",
  },
  contact: {
    fontSize: "14px",
    marginBottom: "8px",
  },
  bottom: {
    borderTop: "1px solid #333",
    padding: "16px 0",
    textAlign: "center",
    fontSize: "13px",
  },
};

export default Footer;
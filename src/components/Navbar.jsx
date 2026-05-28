import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <img
          src="/logo.png"
          alt="FotoConnect"
          style={styles.logoImg}
          onError={(e) => { e.target.style.display = "none"; }}
        />
       
      </div>
      <div style={styles.links}>
        <a href="/" style={styles.link}>Inicio</a>
        <a href="/fotografos" style={styles.link}>Encontrar Fotografos</a>
        <a href="/fotografos" style={styles.button}>Contratar Agora</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "1px 50px",

  background: "rgba(255,255,255,0.75)",

  backdropFilter: "blur(5px)",

  position: "fixed",

  top: 0,
  left: 0,
  right: 0,

  zIndex: 1000,
},

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
 logoImg: {
  height: "70px",
  width: "auto",
},
  logoText: {
    fontSize: "100px",
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  link: {
  textDecoration: "none",

  color: "#111",

  fontSize: "15px",

  fontWeight: "500",
},
 
   button: {
  textDecoration: "none",

  backgroundColor: "#2563eb",

  color: "#fff",

  padding: "10px 20px",

  borderRadius: "10px",

  fontSize: "15px",

  fontWeight: "600",

  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",

  
},
};

export default Navbar;
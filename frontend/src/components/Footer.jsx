import "../styles/Footer.css";  // ✅ Import footer styles

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Gaine Africa. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

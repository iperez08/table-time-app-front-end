import { Link } from 'react-router-dom';

function FooterBar() {
  const footerStyle = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '60px', 
    backgroundColor: '#8B7C3B', 
    color: '#FFFFFF', 
    fontSize: '18px', 
  };

  return (
    <nav style={footerStyle}>
      <Link to="/" style={{ color: '#FFFFFF', margin: '0 10px' }}>Home</Link>
      <Link to="/aboutUs" style={{ color: '#FFFFFF' }}>About Us</Link>
    </nav>
  );
}

export default FooterBar;

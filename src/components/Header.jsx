import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #f1f5f9',
            zIndex: 50
        }}>
            <div className="container flex justify-between items-center" style={{ height: '80px' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={logo} alt="Profield Logo" style={{ height: '40px', width: 'auto', clipPath: 'inset(2px)' }} />
                </Link>
                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/#services" className="nav-link-desktop" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Services</Link>
                    <Link to="/#portfolio" className="nav-link-desktop" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Portfolio</Link>
                    <Link to="/#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Contact Us</Link>
                </nav>
            </div>
        </header>
    )
}


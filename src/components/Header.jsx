import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #f1f5f9',
            zIndex: 50
        }}>
            <div className="container flex justify-between items-center" style={{ height: '70px', padding: '0 1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <img src={logo} alt="Profield Logo" style={{ height: '35px', width: 'auto' }} />
                </div>

                <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <a href="#home" className="nav-link-desktop" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Home</a>
                    <a href="#portfolio" className="nav-link-desktop" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Portfolio</a>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Contact Us</a>
                </nav>
            </div>
        </header>
    )
}

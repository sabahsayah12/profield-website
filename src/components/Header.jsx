import logo from '../assets/logo.png'

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--color-primary)' }}>
                    <img src={logo} alt="Profield Logo" style={{ height: '40px', width: 'auto', clipPath: 'inset(2px)' }} />
                </div>
                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#home" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Home</a>
                    <a href="#portfolio" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Portfolio</a>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Contact Us</a>
                </nav>
            </div>
        </header>
    )
}

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-text-light)',
            padding: '4rem 0',
            borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '1.5rem', color: 'white', fontWeight: 600, fontSize: '1.2rem' }}>Profield</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <a href="https://www.linkedin.com/company/profieldco/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '0.9rem' }}>
                        Follow us on LinkedIn
                    </a>
                </div>

                <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    Al Malaz, Omar Bin Abdulaziz Road, Riyadh
                </p>
                <p style={{ fontSize: '0.85rem' }}>
                    &copy; {new Date().getFullYear()} Profield Co. Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

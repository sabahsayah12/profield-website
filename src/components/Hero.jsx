export default function Hero() {
    return (
        <section id="home" style={{
            paddingTop: '160px',
            paddingBottom: '100px',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, #f8fafc, #ffffff)'
        }}>
            <div className="container">
                <h1 className="text-h1" style={{ marginBottom: '1.5rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Where <span className="text-accent">Quality</span> & <span className="text-accent">Customizability</span> Meet Excellence
                </h1>
                <p className="text-body" style={{
                    color: 'var(--color-text-light)',
                    maxWidth: '700px',
                    margin: '0 auto 2.5rem',
                    fontSize: '1.25rem'
                }}>
                    Premier provider of GRP, GRC, GRM, and Metal architectural solutions. Building a legacy of innovation and precision since 2002.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#contact" className="btn btn-primary">Request a Quote</a>
                    <a href="#services" className="btn" style={{
                        backgroundColor: 'transparent',
                        border: '1px solid var(--color-secondary)',
                        color: 'var(--color-secondary)'
                    }}>Our Services</a>
                </div>
            </div>
        </section>
    )
}

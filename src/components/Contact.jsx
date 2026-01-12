export default function Contact() {
    return (
        <section id="contact" style={{
            paddingTop: '100px',
            paddingBottom: '100px',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 className="text-h2" style={{ marginBottom: '1.5rem', color: 'white' }}>Get In Touch</h2>
                <p style={{
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                    color: '#cbd5e1',
                    fontSize: '1.1rem'
                }}>
                    Ready to discuss your project requirements? Contact us for specialized solutions in architectural fabrication.
                </p>

                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Email</div>
                        <a href="mailto:info@profield.sa" style={{ fontSize: '1.2rem', fontWeight: 600 }}>info@profield.sa</a>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Phone</div>
                        <a href="tel:+966509077199" style={{ fontSize: '1.2rem', fontWeight: 600 }}>+966 50 907 7199</a>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Location</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Riyadh</div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="mailto:info@profield.sa" className="btn" style={{
                        backgroundColor: 'white',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span>Send Email</span>
                    </a>
                    <a href="https://wa.me/966509077199" target="_blank" rel="noopener noreferrer" className="btn" style={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span>WhatsApp Us</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

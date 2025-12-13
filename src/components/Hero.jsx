import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section style={{
            height: '80vh',
            minHeight: '500px',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h1 className="text-h1" style={{ marginBottom: '1.5rem' }}>
                    Engineering Excellence in <span style={{ color: 'var(--color-accent)' }}>GRP & GRC</span>
                </h1>
                <p className="text-body" style={{ marginBottom: '2.5rem', opacity: 0.9, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Specializing in high-performance Glass Reinforced Polymer (GRP),
                    Glass Reinforced Concrete (GRC), and bespoke metal works for
                    visionary architectural projects.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/#contact" className="btn btn-primary" style={{
                        backgroundColor: 'var(--color-accent)',
                        border: '2px solid var(--color-accent)'
                    }}>
                        Request Quote
                    </Link>
                    <Link to="/#services" className="btn" style={{
                        backgroundColor: 'transparent',
                        border: '2px solid white',
                        color: 'white'
                    }}>
                        View Services
                    </Link>
                </div>
            </div>
        </section>
    )
}

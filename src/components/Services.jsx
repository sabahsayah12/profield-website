import { Link } from 'react-router-dom'

export default function Services() {
    const services = [
        {
            id: 'grp',
            title: "GRP",
            subtitle: "Glass Reinforced Polymer",
            description: "Lightweight, high-strength, and weather-resistant. Ideal for architectural façades, theming structures, and intricate custom forms.",
            features: ["Class A Fire Rating", "Any RAL or Stone Finish", "Seamless Shaping"]
        },
        {
            id: 'grm',
            title: "GRM",
            subtitle: "Glass Reinforced Magnesium",
            description: "Non-combustible, fire-rated panels for high-safety zones. Perfect for tunnels, metro interiors, and airports.",
            features: ["Non-Combustible", "Zero Smoke Emission", "High Durability"]
        },
        {
            id: 'grc',
            title: "GRC",
            subtitle: "Glass Reinforced Concrete",
            description: "Cementitious strength with architectural flexibility. Replicates natural stone and heritage elements with reduced structural load.",
            features: ["Heritage Restoration", "Fire & Sound Resistant", "Long-Span Durability"]
        },
        {
            id: 'metal-works',
            title: "Metal Works",
            subtitle: "Aluminum & Steel Fabrication",
            description: "Precision-built architectural solutions. From perforated façades and louvers to structural frames.",
            features: ["CNC Processing", "Powder-Coated Finishes", "Modern Aesthetic"]
        }
    ]

    return (
        <section id="services" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-h2" style={{ marginBottom: '1rem' }}>Our Expertise</h2>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto' }}>
                        We specialize in advanced decorative and structural solutions, delivering precision and quality across all materials.
                    </p>
                </div>

                <div className="grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <Link key={index} to={`/service/${service.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                            <div style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '1rem',
                                boxShadow: 'var(--shadow-sm)',
                                border: '1px solid #e2e8f0',
                                height: '100%',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                }}
                            >
                                <h3 style={{ color: 'var(--color-accent)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                                    {service.title}
                                </h3>
                                <div style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0.5rem 0 1rem', color: 'var(--color-primary)' }}>
                                    {service.subtitle}
                                </div>
                                <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                    {service.description}
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: 'var(--color-secondary)'
                                        }}>
                                            <span style={{ color: 'var(--color-accent)' }}>•</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

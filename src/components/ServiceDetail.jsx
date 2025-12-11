import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function ServiceDetail() {
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Static data for services
    const serviceData = {
        'grp': {
            title: "GRP",
            subtitle: "Glass Reinforced Polymer",
            description: "At Profield, GRP stands as our most versatile engineering material—lightweight, strong, formable, and designed to withstand harsh environments with long-term durability. Its corrosion resistance, weather tolerance, and ability to replicate stone, wood, or metallic surfaces make it ideal for architectural façades, tunnels, theming structures, and infrastructure projects.",
            features: ["Class A Fire Rating (ASTM E84)", "90 Minutes Fire Withstanding (ASTM E119)", "Any RAL, Stone, Wood, or Metallic Finish"],
            details: "Our GRP formulation is optimized through extensive material research and validated under international fire standards. It achieves a Class A Fire Rating with a Flame Spread Index (FSI) of 10 and Smoke Development Index (SDI) of 50. Key characteristics include high strength-to-weight ratio, UV & corrosion resistance, and seamless shaping for complex curves.",
            applications: ["Tunnel Cladding & Façades", "Theming Structures (e.g., Six Flags Qiddiya)", "Domes & Minarets", "Mashrabiya Patterns"],
            folder: '/services/grp'
        },
        'grm': {
            title: "GRM",
            subtitle: "Glass Reinforced Magnesium",
            description: "GRM is Profield’s next-generation solution for high-fire-rating cladding and interior lining. Built on a magnesium-cement matrix reinforced with inorganic glass fiber mesh, the panel is completely inorganic, dimensionally stable, moisture-resistant, and exceptionally fire tolerant.",
            features: ["Non-Combustible (ISO EN 1182)", "Zero Smoke Emission", "Mold & Humidity Resistant"],
            details: "Unlike polymer-based composites, GRM does not ignite, melt, or drip. It remains structurally cohesive under thermal load, making it a superior choice for evacuation routes, metro tunnels, airports, and data centers. It offers absolute fire security with architectural flexibility.",
            applications: ["Tunnel & Metro Interiors", "Airports & Hospitals", "Data Centers", "High-Safety Zones"],
            folder: '/services/grm'
        },
        'grc': {
            title: "GRC",
            subtitle: "Glass Reinforced Concrete",
            description: "Our GRC delivers strength, texture, and architectural identity. A cementitious mix reinforced with fiberglass, GRC allows for detailed shaping, natural stone replication, and long-span installation with reduced structural load.",
            features: ["Heritage Restoration", "Fire & Sound Resistant", "High Compressive Strength"],
            details: "GRC combines the solidity of concrete with the lightness required for modern façades. Whether used for cornices, louvers, screens, cladding panels, or structural décor, GRC stands as a long-life, low-maintenance solution capable of replicating natural stone and heritage elements.",
            applications: ["Exterior Façades", "Landscape Elements", "Columns & Cornices", "Restoration Projects"],
            folder: '/services/grc'
        },
        'metal-works': {
            title: "Metal Works",
            subtitle: "Aluminum & Steel Fabrication",
            description: "Our Metal Division provides precision-built architectural solutions through CNC-processed steel and aluminum. We engineer metal to scale with exact tolerance, corrosion-proof finishing, and clean modern detailing.",
            features: ["CNC Processing", "Powder-Coated / Anodized Finishes", "Lightweight & Structural Options"],
            details: "Aluminum offers lightweight flexibility and fast installation, while steel offers structural power and longevity. Together, they form the backbone of modern design applications—tailored to any geometry, finish, or assembly requirement, from perforated façades to structural frames.",
            applications: ["Perforated Façades", "Sun-Screens & Louvers", "Structural Steel", "Decorative Panels"],
            folder: '/services/metal-works'
        }
    }

    const service = serviceData[id]

    if (!service) {
        return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Service not found <Link to="/">Go Home</Link></div>
    }

    return (
        <div className="app">
            <Header />
            <main style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
                <div className="container">
                    <div style={{ marginBottom: '2rem' }}>
                        <Link to="/#services" style={{ color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, marginBottom: '1rem' }}>
                            ← Back to Services
                        </Link>
                        <h1 className="text-h1" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                            {service.title}
                        </h1>
                        <div style={{ fontSize: '1.5rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '2rem' }}>
                            {service.subtitle}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Overview</h3>
                                <p className="text-body" style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                                    {service.description}
                                </p>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Key Features</h3>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '0.5rem',
                                            color: 'var(--color-text)'
                                        }}>
                                            <span style={{ color: 'var(--color-accent)' }}>•</span> {feature}
                                        </li>
                                    ))}
                                </ul>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Applications</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {service.applications.map((app, i) => (
                                        <li key={i} style={{
                                            marginBottom: '0.5rem',
                                            color: 'var(--color-text-light)'
                                        }}>
                                            {app}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Technical Specifications</h3>
                                <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                                    {service.details}
                                </p>

                                <div style={{ padding: '1.5rem', backgroundColor: '#e2e8f0', borderRadius: '0.5rem', textAlign: 'center', color: '#64748b' }}>
                                    <p style={{ marginBottom: '0.5rem' }}>📄 Technical Datasheets</p>
                                    <small>(Documentation coming soon)</small>
                                </div>
                                <div style={{ marginTop: '1rem', padding: '1.5rem', backgroundColor: '#e2e8f0', borderRadius: '0.5rem', textAlign: 'center', color: '#64748b' }}>
                                    <p style={{ marginBottom: '0.5rem' }}>🖼️ Fire Test Results</p>
                                    <small>(Documentation coming soon)</small>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Gallery</h3>
                            <div style={{ padding: '3rem', backgroundColor: '#f1f5f9', borderRadius: '1rem', textAlign: 'center', color: '#94a3b8' }}>
                                <p>Material images and texture samples will be added here.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

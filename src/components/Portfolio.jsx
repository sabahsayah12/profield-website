import { Link } from 'react-router-dom'

export default function Portfolio() {
    const projects = [
        { id: 9, title: 'Prince Turki Bin Abdulaziz Road', category: 'Aluminum Cladding', image: '/projects/prince-turki/cover.jpg' },
        { id: 1, title: 'Six Flags - Qiddiya City', category: 'Decorative GRP', image: '/projects/six-flags/cover-01.jpg' },
        { id: 2, title: 'King Salman Airbase Road', category: 'GRP Cladding', image: '/projects/king-salman/PHOTO-2025-11-29-14-15-31 2.jpg' },
        { id: 3, title: 'Mosque Dome (Riyadh)', category: 'GRP Structure', image: '/projects/mosque-dome/Screenshot 2025-12-11 at 3.51.08 PM.png' },
        { id: 4, title: 'Jeddah Train Stations', category: 'Decorative Lighting', image: '/projects/jeddah-train/Screenshot 2025-12-11 at 3.51.45 PM.png' },
        { id: 5, title: 'Thumama Road Bridge', category: 'Infrastructure', image: '/projects/thumama-road/Screenshot 2025-12-11 at 4.20.23 PM.png' },
        { id: 6, title: 'DEWA Substations (Dubai)', category: 'GRC Work', image: '/projects/dewa-substations/Screenshot 2025-12-11 at 3.59.44 PM.png' },
        { id: 7, title: 'Palm Jumeirah (Dubai)', category: 'GRC Work', image: '/projects/palm-jumeirah/palm-01.jpg' },
        { id: 8, title: 'King Khaled Road', category: 'Aluminum Cladding', image: '/projects/king-khaled/Screenshot 2025-12-11 at 4.05.03 PM.png' },
        { id: 11, title: 'Riyadh Metro Benches', category: 'GRC Work', image: '/projects/Riyadh-metro/6a987695-f980-407b-9d65-f9c1b8026bd5.jpeg' },
        { id: 12, title: 'Abi Bakr Al Siddiq Road', category: 'Aluminum Cladding', image: '/projects/Abi-Bakr/Screenshot 2025-12-11 at 4.06.11 PM.png' },
    ]

    return (
        <section id="portfolio" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-h2" style={{ marginBottom: '1rem' }}>Selected Projects</h2>
                    <p style={{ color: 'var(--color-text-light)' }}>
                        Showcasing our precision in GRP, GRC, and Metal fabrication across the region.
                    </p>
                </div>

                <div className="grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project) => (
                        <Link key={project.id} to={`/project/${project.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                            <div style={{
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                backgroundColor: 'white',
                                boxShadow: 'var(--shadow-md)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }} />
                                    ) : (
                                        <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>No Cover Image</span>
                                    )}
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{
                                        fontSize: '0.8rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: 'var(--color-accent)',
                                        fontWeight: 600,
                                        marginBottom: '0.5rem'
                                    }}>
                                        {project.category}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

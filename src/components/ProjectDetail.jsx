import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function ProjectDetail() {
    const { id } = useParams()
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Static data for now - could be moved to a shared data file later
    const projectData = {
        9: {
            title: 'Prince Turki Bin Abdulaziz Road',
            category: 'Aluminum Cladding',
            description: 'Leading the transformation of Prince Turki Bin Abdulaziz Road with premium Aluminum Cladding solutions. This project demonstrates our commitment to precision, durability, and aesthetic excellence in urban infrastructure.',
            images: [
                '/projects/prince-turki/cover.jpg',
                '/projects/prince-turki/view-01.jpg',
                '/projects/prince-turki/view-02.jpg',
                '/projects/prince-turki/detail-01.jpg',
                '/projects/prince-turki/detail-02.jpg'
            ]
        },
        1: {
            title: 'Six Flags - Qiddiya City',
            category: 'Decorative GRP',
            description: 'A landmark entertainment project featuring intricate Decorative GRP work. Our contributions help bring the visionary architecture of Qiddiya City to life.',
            images: [
                '/projects/six-flags/cover-01.jpg',
                '/projects/six-flags/view-01.jpg',
                '/projects/six-flags/view-02.jpg',
                '/projects/six-flags/detail-01.jpg',
                '/projects/six-flags/detail-02.jpg',
                '/projects/six-flags/detail-03.jpg',
                '/projects/six-flags/misc-01.jpg',
                '/projects/six-flags/misc-02.jpg',
                '/projects/six-flags/misc-03.jpg',
                '/projects/six-flags/misc-04.jpg',
                '/projects/six-flags/misc-05.jpg',
                '/projects/six-flags/screenshot-01.png'
            ]
        },
        2: {
            title: 'King Salman Airbase Road',
            category: 'GRP Cladding',
            description: 'Extensive GRP Cladding works focusing on durability and modern aesthetics for this major infrastructure project.',
            images: [
                '/projects/king-salman/PHOTO-2025-11-29-14-15-31 2.jpg',
                '/projects/king-salman/b24d408f-6e4b-4c1e-9409-ef6a92738553.JPG',
                '/projects/king-salman/efff41fd-8d3e-4db3-9e26-b9debf5ed47d.JPG'
            ]
        },
        3: {
            title: 'Mosque Dome (Riyadh)',
            category: 'GRP Structure',
            description: 'Complex GRP structural elements for religious architecture, showcasing intricate geometric patterns and large-scale dome fabrication.',
            images: [
                '/projects/mosque-dome/Screenshot 2025-12-11 at 3.51.08 PM.png',
                '/projects/mosque-dome/Screenshot 2025-12-11 at 3.51.28 PM.png'
            ]
        },
        4: {
            title: 'Jeddah Train Stations',
            category: 'Decorative Lighting',
            description: 'Custom decorative lighting fixtures and architectural elements for the Jeddah Train Stations.',
            images: [
                '/projects/jeddah-train/Screenshot 2025-12-11 at 3.51.45 PM.png',
                '/projects/jeddah-train/Screenshot 2025-12-11 at 3.51.52 PM.png',
                '/projects/jeddah-train/Screenshot 2025-12-11 at 3.52.00 PM.png',
                '/projects/jeddah-train/Screenshot 2025-12-11 at 3.52.09 PM.png'
            ]
        },
        5: {
            title: 'Thumama Road Bridge',
            category: 'Infrastructure',
            description: 'Architectural cladding and decorative elements for the Thumama Road Bridge project.',
            images: [
                '/projects/thumama-road/Screenshot 2025-12-11 at 4.20.23 PM.png',
                '/projects/thumama-road/Screenshot 2025-12-11 at 4.20.34 PM.png',
                '/projects/thumama-road/Screenshot 2025-12-11 at 4.20.46 PM.png',
                '/projects/thumama-road/Screenshot 2025-12-11 at 4.20.59 PM.png'
            ]
        },
        6: {
            title: 'DEWA Substations (Dubai)',
            category: 'GRC Work',
            description: 'High-performance Glass Reinforced Concrete (GRC) panels for DEWA substations, prioritizing fire resistance and durability.',
            images: [
                '/projects/dewa-substations/Screenshot 2025-12-11 at 3.59.44 PM.png',
                '/projects/dewa-substations/Screenshot 2025-12-11 at 3.59.54 PM.png',
                '/projects/dewa-substations/Screenshot 2025-12-11 at 4.00.01 PM.png',
                '/projects/dewa-substations/Screenshot 2025-12-11 at 4.00.10 PM.png'
            ]
        },
        7: {
            title: 'Palm Jumeirah (Dubai)',
            category: 'GRC Work',
            description: 'Premium GRC architectural details for luxury developments on Palm Jumeirah.',
            images: [
                '/projects/palm-jumeirah/palm-01.jpg',
                '/projects/palm-jumeirah/palm-02.jpg',
                '/projects/palm-jumeirah/palm-03.jpg'
            ]
        },
        8: {
            title: 'King Khaled Road',
            category: 'Aluminum Cladding',
            description: 'Large-scale Aluminum Cladding installation for King Khaled Road tunnels and underpasses.',
            images: [
                '/projects/king-khaled/Screenshot 2025-12-11 at 4.05.03 PM.png',
                '/projects/king-khaled/Screenshot 2025-12-11 at 4.05.14 PM.png',
                '/projects/king-khaled/Screenshot 2025-12-11 at 4.09.08 PM.png',
                '/projects/king-khaled/Screenshot 2025-12-11 at 4.10.54 PM.png'
            ]
        },
        11: {
            title: 'Riyadh Metro Benches',
            category: 'GRC Work',
            description: 'Custom-designed GRC seating elements for the Riyadh Metro project, combining functional durability with modern design.',
            images: [
                '/projects/Riyadh-metro/6a987695-f980-407b-9d65-f9c1b8026bd5.jpeg',
                '/projects/Riyadh-metro/8036751e-a2fa-42f8-bb8a-b0606e389f51.jpeg',
                '/projects/Riyadh-metro/81766785-2dd5-4938-ab00-671225c81acf.jpeg'
            ]
        },
        12: {
            title: 'Abi Bakr Al Siddiq Road',
            category: 'Aluminum Cladding',
            description: 'Modern aluminum cladding solutions for Abi Bakr Al Siddiq Road, enhancing the urban landscape with precise geometric forms.',
            images: [
                '/projects/Abi-Bakr/Screenshot 2025-12-11 at 4.06.11 PM.png',
                '/projects/Abi-Bakr/Screenshot 2025-12-11 at 4.06.19 PM.png'
            ]
        }
    }

    const project = projectData[id]

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowRight') nextImage()
            if (e.key === 'ArrowLeft') prevImage()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImageIndex])

    const openLightbox = (index) => {
        setSelectedImageIndex(index)
    }

    const closeLightbox = () => {
        setSelectedImageIndex(null)
    }

    const nextImage = (e) => {
        if (e) e.stopPropagation()
        if (selectedImageIndex === null || !project) return
        setSelectedImageIndex((prev) => (prev + 1) % project.images.length)
    }

    const prevImage = (e) => {
        if (e) e.stopPropagation()
        if (selectedImageIndex === null || !project) return
        setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }

    if (!project) {
        return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Project not found <Link to="/">Go Home</Link></div>
    }

    return (
        <div className="app">
            <Header />
            <main style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
                <div className="container">
                    <div style={{ marginBottom: '2rem' }}>
                        <Link to="/#portfolio" style={{ color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, marginBottom: '1rem' }}>
                            ← Back to Home
                        </Link>
                        <div style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                            {project.category}
                        </div>
                        <h1 className="text-h1" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                            {project.title}
                        </h1>
                        <p className="text-body" style={{ maxWidth: '800px', marginBottom: '3rem', color: 'var(--color-text-light)' }}>
                            {project.description}
                        </p>
                    </div>

                    <div className="grid" style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem',
                        autoRows: '300px' // Initial row height
                    }}>
                        {project.images.map((img, index) => (
                            <div key={index} style={{
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-md)',
                                height: '100%',
                                minHeight: '300px',
                                cursor: 'zoom-in'
                            }}
                                onClick={() => openLightbox(index)}
                            >
                                <img src={img} alt={`${project.title} view ${index + 1} `} style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                {selectedImageIndex !== null && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                        onClick={closeLightbox}
                    >
                        <button style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2rem',
                            backgroundColor: 'transparent',
                            color: 'white',
                            fontSize: '2rem',
                            cursor: 'pointer',
                            zIndex: 1001,
                            border: 'none'
                        }}
                            onClick={closeLightbox}
                        >
                            &times;
                        </button>

                        <button style={{
                            position: 'absolute',
                            left: '2rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '3rem',
                            height: '3rem',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s'
                        }}
                            onClick={prevImage}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        >
                            &#10094;
                        </button>

                        <button style={{
                            position: 'absolute',
                            right: '2rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '3rem',
                            height: '3rem',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s'
                        }}
                            onClick={nextImage}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        >
                            &#10095;
                        </button>

                        <img src={project.images[selectedImageIndex]}
                            alt={`Fullscreen view ${selectedImageIndex + 1} `}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
                        />

                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: 500
                        }}>
                            {selectedImageIndex + 1} / {project.images.length}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}

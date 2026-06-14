import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer dark-theme'>
            <nav className='modern-nav'>
                <div className='navHeader'>
                    <h2>Vartalaap<span className='highlight'>App</span></h2>
                </div>
                <div className='navlist'>
                    <button className='btn-ghost' onClick={() => router("/aljk23")}>
                        Join as Guest
                    </button>
                    <button className='btn-ghost' onClick={() => router("/auth")}>
                        Register
                    </button>
                    <button className='btn-primary' onClick={() => router("/auth")}>
                        Login
                    </button>
                </div>
            </nav>

            <main className="landingMainContainer">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="gradient-text">Connect</span> with your loved ones
                    </h1>
                    <p className="hero-subtitle">
                        Bridge the distance seamlessly with VartalaapApp's high-quality video calling.
                    </p>
                    <div className="cta-wrapper">
                        <button className="btn-primary-large" onClick={() => router("/auth")}>
                            Get Started Free
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/mobile.png" alt="VartalaapApp Mobile View" />
                </div>
            </main>
        </div>
    )
}

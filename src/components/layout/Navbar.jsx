import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return (
        <div className="sticky-header">
            <div className="announcement-bar">
                PAYMENT ONLY IN POUNDS (£) AND DOLLARS ($)
            </div>
            <nav className="navbar">
                <div className="container nav-container">
                    {/* Hamburger Button (Mobile Only) */}
                    <button
                        className="hamburger-btn"
                        aria-label="Menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    <div className="nav-logo">
                        <a href="/">Bryz fashion place</a>
                    </div>

                    {/* Desktop Links */}
                    <div className="nav-links">
                        <a href="/" className="nav-link">HOME</a>
                        <a href="/new-in" className="nav-link">NEW IN</a>
                        <a href="/shop-all" className="nav-link">SHOP ALL</a>
                        <a href="/sale" className="nav-link">SALE</a>

                    </div>

                    <div className="nav-actions">
                        <div className={`inline-search-wrapper ${isSearchOpen ? 'active' : ''}`}>
                            <input
                                type="text"
                                placeholder="SEARCH..."
                                className="inline-search-input"
                                autoFocus={isSearchOpen}
                            />
                            <button className="icon-btn" aria-label="Search" onClick={toggleSearch}>
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>

                        <button className="icon-btn" aria-label="Cart">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-links">
                        <a href="/" onClick={() => setMobileMenuOpen(false)}>HOME</a>
                        <a href="/new-in" onClick={() => setMobileMenuOpen(false)}>NEW IN</a>
                        <a href="/shop-all" onClick={() => setMobileMenuOpen(false)}>SHOP ALL</a>
                        <a href="/sale" style={{ color: 'var(--accent-maroon)' }} onClick={() => setMobileMenuOpen(false)}>SALE</a>
                    </div>
                </div>


            </nav>
        </div>
    );
};

export default Navbar;

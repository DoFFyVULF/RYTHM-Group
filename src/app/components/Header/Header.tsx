'use client'
import { useState } from "react";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import styles from './Header.module.scss';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Container className={styles.header_container}>
            <header className={styles.header}>
                <h2>
                    <a href="/">RYTHM</a>
                </h2>
                <div 
                    className={`${styles.burger_menu} ${isMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`${styles.nav_menu} ${isMenuOpen ? styles.active : ''}`}>
                    <ul>
                        <li><a href="/Projects">Projects</a></li>
                        <li><a href="/Services">Services</a></li>
                        <li><a href="/Company">Company</a></li>
                    </ul>
                    
                    <div className={styles.mobile_actions}>
                        <a href="#">
                            <Image 
                                src='/icons/profile.svg' 
                                alt="Profile" 
                                width={35} 
                                height={35} 
                                className={styles.profile_icon}
                            />
                        </a>
                        <button className={styles.header_btn}>Let's talk</button>
                    </div>
                </nav>
            </header>
        </Container>
    );
}
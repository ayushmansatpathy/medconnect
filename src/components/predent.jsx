import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Predent = () => {
    const styles = {
        container: {
            fontFamily: "'Arial Black', sans-serif",
            backgroundColor: "#d7ffd9",
            color: "#1b5e20",
            minHeight: "100vh",
            padding: "30px",
            paddingTop: "100px",
        },
        topSection: {
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "30px",
            borderBottom: "5px solid #81c784",
            paddingBottom: "20px",
        },
        image: {
            width: "180px",
            height: "180px",
            borderRadius: "12px",
            objectFit: "cover",
            marginRight: "25px",
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
        },
        contactInfo: {
            flex: 1,
        },
        contactTitle: {
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#2e7d32",
        },
        contactDetails: {
            fontSize: "1.2rem",
            lineHeight: "1.8",
        },
        generalInfoSection: {
            marginTop: "40px",
            padding: "30px",
            backgroundColor: "#a5d6a7",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
        generalInfoTitle: {
            fontSize: "2.5rem",
            marginBottom: "15px",
            borderBottom: "4px solid #4caf50",
            paddingBottom: "8px",
            color: "#1b5e20",
        },
        generalInfoText: {
            fontSize: "1.3rem",
            lineHeight: "1.8",
        },
        list: {
            fontSize: "1.2rem",
            marginLeft: "20px",
            marginTop: "10px",
        },
        footer: {
            marginTop: "30px",
            textAlign: "center",
            fontSize: "1rem",
            color: "#388e3c",
            fontWeight: "bold",
        },
    };

    return (
        <div style={styles.container}>
            {/* Top Section */}
            <div style={styles.topSection}>
                <img
                    src="https://via.placeholder.com/180"
                    alt="Chairperson"
                    style={styles.image}
                />
                <div style={styles.contactInfo}>
                    <h2 style={styles.contactTitle}>Chairperson Contact</h2>
                    <div style={styles.contactDetails}>
                        <p>
                            📧 Email:{" "}
                            <a
                                href="mailto:predentalchair@example.com"
                                style={{ color: "#1b5e20", fontWeight: "bold" }}
                            >
                                predentalchair@example.com
                            </a>
                        </p>
                        <p>
                            📞 Phone:{" "}
                            <a
                                href="tel:+123456789"
                                style={{ color: "#1b5e20", fontWeight: "bold" }}
                            >
                                +123 456 789
                            </a>
                        </p>
                        <p>📍 Office Hours: Mon-Fri, 9 AM - 5 PM</p>
                        <p>📌 Location: 123 Dental Clubhouse, Suite 200</p>
                    </div>
                </div>
            </div>

            {/* General Info Section */}
            <section style={styles.generalInfoSection}>
                <h1 style={styles.generalInfoTitle}>Pre-Dental Resources</h1>
                <p style={styles.generalInfoText}>
                    Welcome to the Pre-Dental Information Page! Our club is here to help
                    aspiring dental professionals with the tools, support, and community
                    they need to excel. Whether you're just starting or preparing your
                    dental school applications, we've got you covered!
                </p>
                <p style={styles.generalInfoText}>
                    Our key resources include:
                </p>
                <ul style={styles.list}>
                    <li>✅ Comprehensive dental school prerequisites guide.</li>
                    <li>✅ Tips for crafting a standout personal statement.</li>
                    <li>✅ Exclusive shadowing and clinical experience opportunities.</li>
                    <li>✅ Access to a network of dental students and professionals.</li>
                </ul>
                <p style={styles.generalInfoText}>
                    Explore our other pages for Pre-Medical and Pre-PA resources to
                    enhance your healthcare journey. Join us in making a difference!
                </p>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                &copy; {new Date().getFullYear()} Pre-Dental Club. All rights reserved. 🦷
            </footer>
        </div>
    );
};

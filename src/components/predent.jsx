import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Predent = (props) => {
    const navigate = useNavigate();

    const handleTrackNavigate = (track) => {
        navigate(`/${track}`);
    };
    const styles = {
        container: {
            backgroundColor: "#d7ffd9",
            color: "#1b5e20",
            minHeight: "100vh",
            padding: "30px",
            paddingTop: "100px"
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
        sectionWrapper: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "30px",
        },
        section: {
            flex: "1 1 calc(50% - 20px)", // Adjusts to fit two sections in a row
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "20px",
            textAlign: "left",
        },
        calendarSection: {
            flex: "1 1 100%", // Makes the calendar span the full width
            backgroundColor: "#c8e6c9",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "20px",
        },
        sectionTitle: {
            fontSize: "2rem",
        },
        sectionText: {
            fontSize: "1.5rem",
            lineHeight: "1.5",
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

                <div style={styles.contactInfo}>
                    <h2 style={styles.contactTitle}>Chairperson Contact</h2>
                    <div style={styles.contactDetails}>
                        <p>Email:
                            {props.data?.email}
                        </p>

                        <p>Position: {props.data?.job}</p>
                    </div>
                </div>
            </div>

            {/* Calendar Section */}
            <div>
                <button

                    onClick={() => handleTrackNavigate('premed')}
                >
                    View Premed
                </button>
                <button

                    onClick={() => handleTrackNavigate('predent')}
                >
                    View Predent
                </button>
                <button

                    onClick={() => handleTrackNavigate('prepa')}
                >
                    View PrePA
                </button>
            </div>
            <section style={styles.calendarSection}>
                <h2 style={styles.sectionTitle}>Calendar</h2>
                <p style={styles.sectionText}>
                    Upcoming events and important dates will be displayed here soon! Stay
                    tuned for updates about workshops, guest speakers, and more.
                </p>
            </section>

            {/* Opportunities and Certifications */}
            <div style={styles.sectionWrapper}>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Opportunities</h2>
                    <p style={styles.sectionText}>
                        Discover shadowing programs, dental internships, and volunteer
                        opportunities to enhance your pre-dental journey. Connect with local
                        dental professionals and build your experience!
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Certifications</h2>
                    <h3>Sterilization Technician Requirements in Massachusetts</h3>
                    <p style={styles.sectionText}>
                        {props.data
                            ? props.data.PreDentCert.ster.requirements.map((d, i) => (
                                <div key={`${d.name}-${i}`}>
                                    <h4>{d.name}{d.details ? " - " + d.details : ""}</h4>
                                </div>
                            ))
                            : "loading"}
                    </p>
                    <h3>X-Ray Technician Requirements in Massachusetts</h3>
                    <p style={styles.sectionText}>
                        {props.data
                            ? props.data.PreDentCert.xray.requirements.map((d, i) => (
                                <div key={`${d.name}-${i}`}>
                                    <h4>{d.name}{d.details ? " - " + d.details : ""}</h4>
                                    <p>{d.certification_links ? d.certification_links.map((l, i) => (
                                        <h4><a href={l.link}>{l.name}</a></h4>
                                    )) : ""}</p>
                                </div>
                            ))
                            : "loading"}
                    </p>
                    <h3>Massachusetts Dental Assistant Requirements and Certifications</h3>
                    <p style={styles.sectionText}>
                        {props.data
                            ? props.data.PreDentCert.massdent.requirements.map((d, i) => (
                                <div key={`${d.name}-${i}`}>
                                    <h4>{d.name}{d.details ? " - " + d.details : ""}</h4>
                                    <p>{d.resources ? d.resources.map((l, i) => (
                                        <h4><a href={l.url}>{l.name}</a></h4>
                                    )) : ""}</p>
                                </div>
                            ))
                            : "loading"}
                    </p>
                    <h3>Office Management Assistant</h3>
                    <p style={styles.sectionText}>
                        {props.data
                            ? props.data.PreDentCert.office.requirements.map((d, i) => (
                                <div key={`${d.name}-${i}`}>
                                    <h4>{d.name}{d.detail ? " - " + d.detail : ""}</h4>
                                    <p>{d.resources ? d.resources.map((l, i) => (
                                        <h4><a href={l.url}>{l.name}</a></h4>
                                    )) : ""}</p>
                                </div>
                            ))
                            : "loading"}
                    </p>
                </section>
            </div>
        </div>
    );
};


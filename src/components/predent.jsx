import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Predent = () => {
    const navigate = useNavigate();

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '100%',
        margin: '9rem auto',
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f4f7',
        borderRadius: '10px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    };

    const contentStyle = {
        flex: 1,
        paddingRight: '20px',
    };

    const sidebarStyle = {
        width: '180px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    };

    const sidebarButtonStyle = {
        marginBottom: '15px',
        padding: '10px',
        backgroundColor: '#00796b',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
    };

    const headerStyle = {
        textAlign: 'center',
        padding: '30px',
        backgroundColor: '#00796b',
        color: 'white',
        borderRadius: '10px 10px 0 0',
    };

    const sectionStyle = {
        margin: '25px 0',
        padding: '25px',
        backgroundColor: '#ffffff',
        width: '50%',
        borderRadius: '10px',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle = {
        marginBottom: '15px',
        fontSize: '1.5rem',
        color: '#333',
    };

    const textStyle = {
        fontSize: '1.1rem',
        color: '#555',
    };

    const listStyle = {
        listStyleType: 'none',
        paddingLeft: '0',
        fontSize: '1.1rem',
    };

    const listItemStyle = {
        marginBottom: '12px',
    };

    const buttonStyle = {
        display: 'block',
        width: 'fit-content',
        margin: '30px auto 0',
        padding: '10px 20px',
        backgroundColor: '#00796b',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        textDecoration: 'none',
    };

    const handleGoBack = () => {
        navigate('/');
    };

    const handleTrackNavigate = (track) => {
        navigate(`/${track}`);
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <header style={headerStyle}>
                    <h1>PRE-DENT</h1>
                </header>


                <section style={sectionStyle}>
                    <h2 style={titleStyle}>Chair</h2>
                    <p style={textStyle}>Inayah Alam</p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>Email</h2>
                    <p style={textStyle}>email@example.com</p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>Events</h2>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Hackathon - Sept 15, 2024</li>
                        <li style={listItemStyle}>Tech Talk - Oct 1, 2024</li>
                        <li style={listItemStyle}>Workshop - Nov 3, 2024</li>
                    </ul>
                </section>


                <section style={sectionStyle}>
                    <h2 style={titleStyle}>Opportunities</h2>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Internship at XYZ Corp</li>
                        <li style={listItemStyle}>Summer Coding Camp</li>
                        <li style={listItemStyle}>Research Assistant Role</li>
                    </ul>
                </section>


                <button style={buttonStyle} onClick={handleGoBack}>
                    Go Back Home
                </button>
            </div>

            <div style={sidebarStyle}>
                <button
                    style={sidebarButtonStyle}
                    onClick={() => handleTrackNavigate('premed')}
                >
                    View Premed
                </button>
                <button
                    style={sidebarButtonStyle}
                    onClick={() => handleTrackNavigate('predent')}
                >
                    View Predent
                </button>
                <button
                    style={sidebarButtonStyle}
                    onClick={() => handleTrackNavigate('prepa')}
                >
                    View PrePA
                </button>
            </div>
        </div>
    );
};

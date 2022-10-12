import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            {/* NavBar start */}
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className='quiz-font' href="#home"><h1>Quiz-Hero</h1></Navbar.Brand>
                        {/* <Nav className="me-auto"> */}
                        <nav className="header">
                            {/* <Nav.Link href="#topics">Topics</Nav.Link>
                            <Nav.Link href="#statistics">Statistics</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link> */}

                            <Link to="/topics">Topics</Link>
                            <Link to="/statistics">Statistics</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/quiz">Quiz</Link>


                        </nav>
                    </Container>
                </Navbar>
                <br />

            </>
            {/* Navbar end */}

        </div>
    );
};

export default Header;
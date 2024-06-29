import React from 'react'

export const Footer = () => {
    const footerStyle = {
        width: "100%",
        position: "absolute",
        top: "100vh",
        backgroundColor: "#343a40",
        color: "white",
        padding: "10px 0",
        textAlign: "center"
    };
    return (
        <footer style={footerStyle}>
            Copyright &copy; {new Date().getFullYear()} MyTodoList.com
        </footer>)
}

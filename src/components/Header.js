import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={`${process.env.PUBLIC_URL}/images/cat-face.png`} alt="cat selfie face"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}
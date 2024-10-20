import Input from 'Components/OtherComponents/Input';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png";

export default function Agent() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("I am Agent");
    const [text, setText] = useState("");
    const [chat, setChat] = useState([]);

    const chatContainerRef = useRef(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text && file == null) {
            return
        }
        setChat([
            ...chat,
            { message: text, sender: "user" },
            { message: message, sender: "agent" }
        ]);
        setText("")
        setFile(null)
        console.log(file)
        document.getElementById("messageInput").value = ""
    };


    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chat]);

    return (
        <main className='agent-page'>
            <Link to={"/"}>
                <img src={logo} style={{ "width": "56px", "margin": "41px 0px 11px 41px" }} alt="" />
            </Link>
            <h1 className={`text-center my-3 fw-bolder text-light d-${chat.length == 0?"block":"none"}`}>
                Upload your Resume / CV to proceed
            </h1>
            <div className="chat-container" ref={chatContainerRef} style={{ overflowY: 'auto', maxHeight: '400px' }}>
                {
                    chat.map((item, index) => {
                        const className = item.sender === "user" ? "userMessage" : "botMessage";
                        const margin = item.sender === "user" ? "ms-auto me-4" : "me-auto ms-4 mb-4";
                        const text = item.sender === "user" ? "text-start" : "text-start";
                        return (
                            <div className={`${className} ${text} mt-4 ${margin}`} key={index}>
                                {
                                    item.sender === "user"
                                        ? <p className='m-0  ms-auto text-light userInput'>{item.message}</p>
                                        : <p className='m-0 output'>{item.message}</p>
                                }
                            </div>
                        );
                    })
                }
            </div>

            <div className="input-container">
                <Input handleFile={handleFileChange} handleText={handleTextChange} handleSubmit={handleSubmit} id="messageInput" />
            </div>
        </main>
    );
}

import Input from 'Components/OtherComponents/Input'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Agent() {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [extractedText, setExtractedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };


    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        setIsLoading(false);
    };







    return (
        <main>
            <Link to={"/"}>Home</Link>
            <div className="summary">
                {message && <p>{message}</p>}
                {extractedText && (
                    <div>
                        <h3>Extracted Text:</h3>
                        <pre>{extractedText}</pre> {/* Display the extracted text here */}
                    </div>
                )}
            </div>
            <div className="input-container">
                <Input onChange={handleFileChange} />
                <button onClick={handleSubmit} className='btn btn-info m-3 text-light'>
                    {
                        isLoading
                            ?
                            <div className='spinner-grow spinner-grow-sm'></div>
                            :
                            "Convert to Text"
                    }
                </button>
            </div>
        </main>
    )
}

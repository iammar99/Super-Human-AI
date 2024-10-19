import Input from 'Components/OtherComponents/Input'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Agent() {

  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]); // Log the selected file
  };
  const MAX_RETRIES = 3;

  const handleSubmit = async (e) => {
      setIsLoading(true);
      e.preventDefault(); // Prevent the default form submission
      if (!file) {
          setIsLoading(false);
          return;
      }
  
      const formData = new FormData();
      formData.append('file', file);
  
      try {
          // Step 1: Upload the PDF file
          const uploadResponse = await fetch('https://api.pdf.co/v1/file/upload', {
              method: 'POST',
              headers: {
                  'x-api-key': 'ammarbashaar99@gmail.com_dDXmc17okCQ6kSOuQmr60oe5M5Fs9QcOgbT7aEB86fy2V7HpPwbZjyIdIglE6gBz', // Replace with your actual API key
              },
              body: formData,
          });
  
          if (!uploadResponse.ok) {
              const errorDetails = await uploadResponse.json();
              console.error('Upload error details:', errorDetails);
              setIsLoading(false);
              return;
          }
  
          const uploadResult = await uploadResponse.json();
          console.log('Upload Result:', uploadResult);
  
          if (uploadResult.error) {
              setIsLoading(false);
              return;
          }
  
          // Step 2: Extract text from the uploaded PDF file
          const pdfUrl = uploadResult.url; // Get the URL of the uploaded PDF
          for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
              const convertResponse = await fetch('https://api.pdf.co/v1/pdf/convert/to/text', {
                  method: 'POST',
                  headers: {
                      'x-api-key': 'ammarbashaar99@gmail.com_dDXmc17okCQ6kSOuQmr60oe5M5Fs9QcOgbT7aEB86fy2V7HpPwbZjyIdIglE6gBz', // Replace with your actual API key
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ 
                      url: pdfUrl, 
                      ocr: true // Enable OCR for scanned documents
                  }),
              });
  
              const convertResult = await convertResponse.json(); // Get detailed error message
              console.log('Conversion Result:', convertResult); // Log the entire result
  
              if (convertResponse.ok) {
                  if (convertResult.error) {
                  } else {
                      setExtractedText(convertResult.body || "No text extracted.");
                  }
                  setIsLoading(false);
                  return; // Exit after a successful conversion
              }
  
              // Log any error details
              console.error('Conversion error details:', convertResult);
              if (convertResult.message.includes("Too many requests")) {
                  const waitTime = 2000 * (attempt + 1); // Exponential backoff
                  await new Promise(resolve => setTimeout(resolve, waitTime));
              } else {
                  setIsLoading(false);
                  return;
              }
          }
      } catch (error) {
          console.error('Error:', error);
          setIsLoading(false);
      }
  };
  
  
  




  return (
    <main>
      <Link to={"/"}>Home</Link>
      <div className="summary">
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

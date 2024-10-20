import React from 'react'

export default function Input(props) {
    return (
        <div className="messageBox">
            <div className="fileUploadWrapper">
                <label htmlFor="file">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                        <circle
                            strokeWidth={20}
                            stroke="#6c6c6c"
                            fill="none"
                            r="158.5"
                            cy="168.5"
                            cx="168.5"
                        />
                        <path
                            strokeLinecap="round"
                            strokeWidth={25}
                            stroke="#6c6c6c"
                            d="M167.759 79V259"
                        />
                        <path
                            strokeLinecap="round"
                            strokeWidth={25}
                            stroke="#6c6c6c"
                            d="M79 167.138H259"
                        />
                    </svg>
                    <span className="tooltip">Add You Resume / CV</span>
                </label>
                <input type="file" id="file" name="file" accept="application/pdf" onChange={props.handleFile} />
            </div>
            <input required="" placeholder="Message..." type="text" name='text' id={props.id} onChange={props.handleText} />
            <button id="sendButton" onClick={props.handleSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                    <path
                        fill="none"
                        d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                    />
                    <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="33.67"
                        stroke="#6c6c6c"
                        d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                    />
                </svg>
            </button>
        </div>

    )
}

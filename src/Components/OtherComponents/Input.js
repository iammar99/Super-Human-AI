import React from 'react'

export default function Input(props) {
    return (
        <div className="container">
            <div className="folder">
                <div className="front-side">
                    <div className="tip" />
                    <div className="cover" />
                </div>
                <div className="back-side cover" />
            </div>
            <label className="custom-file-upload">
                <input className="title" type="file" onChange={props.onChange} accept=".pdf"/>
                Choose a file
            </label>
        </div>
    )
}

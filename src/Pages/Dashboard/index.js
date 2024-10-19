import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Agent from './Agent'

export default function Dashboard() {
    return (
        <Routes>
            <Route path='/agent' element={<Agent />} />
        </Routes>
    )
}

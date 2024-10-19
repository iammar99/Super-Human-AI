import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
        <Link to={"/dashboard/agent"}>Agent</Link>
    </main>
  )
}

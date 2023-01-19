import React from 'react'
import { Link } from 'react-router-dom'

export function LoginPage() {
  return (
    <div>
      <h1>Login</h1>

      <Link to={'wallet/invoice'}>
        <h2>Go to wallet</h2>
      </Link>
    </div>
  )
}

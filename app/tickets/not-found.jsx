import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <main className="text-center">
            <h2 class="text-3xl">We Hit A Brick Wall</h2>
            <p>We Could Not Found The Ticket You Are Looking For.</p>
            <p>Go Back to the <Link href="/tickets">Tickets</Link></p>
        </main>
  )
}

export default notFound
import Link from 'next/link'
import React from 'react'

const notFound = () => {
    return (
        <main className="text-center">
            <h2 class="text-3xl">There Was A Problem.</h2>
            <p>We Could Not Found The Page You Are Looking For.</p>
            <p>Go Back to the <Link href="/">Home Page</Link></p>
        </main>
    )
}

export default notFound
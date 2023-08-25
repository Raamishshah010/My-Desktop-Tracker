import React from 'react';
async function getTicket() {

    const res = await fetch('http://localhost:4000/tickets' + id,{
        next: {
            revalidate: 60 
        }
    });


    return await res.json();

}

const page = async ({ params }) => {

    const ticket = await getTicket();
    
    return (
        <main>

            
        </main>
    )
}

export default page
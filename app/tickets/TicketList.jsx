import React from 'react'

async function getTickets() {

    const res = await fetch('http://localhost:4000/tickets',{
        next: {
            revalidate: 0 
        }
    });


    return await res.json();

}


export const TicketList = async () => {

    const tickets = await getTickets();


    return (
        <>
            {
                tickets.map((ticket) => (
                    <div key={ticket.id} className="card my-5">
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>

                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </div>
                ))
            }

            {tickets.length === 0 && (
                <p className="text-center">No tickets were found</p>
            )}



        </>
    )
}

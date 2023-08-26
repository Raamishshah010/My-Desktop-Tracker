import { notFound } from 'next/navigation'

export const dynamicParams = true;

export async function generateStaticParams() {

    
    // Set Timeout For Loading Page
    await new Promise(resolve => setTimeout(resolve, 3000)) 
    const res = await fetch('http://localhost:4000/tickets');

    const tickets = await res.json();

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

async function getTicket(id) {

    // Set Timeout For Loading Page
    await new Promise(resolve => setTimeout(resolve, 3000)) 

    const res = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 60
        }
    });



    if (!res.ok) {
        notFound();

    }

    return await res.json();



}

const page = async ({ params }) => {

    const ticket = await getTicket(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created By <span className="hover:text-indigo-700 cursor-pointer">{ticket.user_email}</span></small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>

        </main>
    )
}

export default page
import { useState } from "react"

const ProjectionForm = ({ projections, setProjections }) => {
    const [newProjection, setProjection] = useState({
        date_time: "2025-06-16T18:00:00",
        room: "",
        total_seats: undefined,
        available_seats: undefined,
        ticket_price: undefined
    })

    const handleChange = (event) => {
        const value = event.target.value
        const key = event.target.name
        setProjection({ ...newProjection, [key]: value })
    }

    const addProjection = (event) => {
        event.preventDefault()
        setProjections([...projections, newProjection])
        setProjection({
            date_time: "2025-06-16T18:00:00",
            room: "Room 1",
            total_seats: 100,
            available_seats: 80,
            ticket_price: 10.0
        })
    }

    const deleteProjection = (index) => {
        projections.splice(index, 1)
        const newProjections = projections
        setProjections(newProjections)
    }

    return (
        <div>
            <ul>
                {projections.map((projection, index) => (
                    <li key={index}>
                        <p>{projection.date_time}</p>
                        <p>{projection.room}</p>
                        <p>{projection.total_seats}</p>
                        <p>{projection.available_seats}</p>
                        <p>{projection.ticket_price}</p>
                        <button onClick={(event) => {
                            event.preventDefault()
                            deleteProjection(index)
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
            <input type="date" name="date_time" placeholder="Date time" value={newProjection.date_time} onChange={handleChange} />
            <input type="text" name="room" placeholder="Room" value={newProjection.room} onChange={handleChange} />
            <input type="number" name="total_seats" placeholder="Total Seats" value={newProjection.total_seats} onChange={handleChange} />
            <input type="number" name="available_seats" placeholder="Available Seats" value={newProjection.available_seats} onChange={handleChange} />
            <input type="number" name="ticket_price" placeholder="Ticket Price" value={newProjection.ticket_price} onChange={handleChange} />
            <button type="button" onClick={addProjection}>Add Projection</button>
        </div>
    )
}
export default ProjectionForm
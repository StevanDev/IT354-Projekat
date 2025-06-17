import { useState } from "react";

const ActorForm = ({ actors, setActors }) => {
    const [newActorName, setNewActorName] = useState("");

    const addActor = (e) => {
        e.preventDefault()
        const newActors = [...actors, newActorName]
        setActors(newActors)
        setNewActorName("")
    }

    const deleteActor = (index) => {
        actors.splice(index, 1)
        const newActors = actors
        setActors(newActors)
    }

    return (
        <div>
            <ul>
                {actors.map((actor, index) => (<li key={index}>{actor}
                    <button onClick={(event) => {
                        event.preventDefault()
                        deleteActor(index)
                    }}>Delete</button>
                </li>))}
            </ul>
            <input
                type="text"
                placeholder="Actor Name"
                value={newActorName}
                onChange={(event) => {
                    setNewActorName(event.target.value)
                }} />

            <button onClick={addActor}>Add actor</button>
        </div>
    )
}

export default ActorForm;
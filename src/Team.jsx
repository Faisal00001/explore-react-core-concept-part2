import { useState } from "react";

export default function Team() {
    const [player, setPlayer] = useState(11)
    const increasePlayer = () => {
        const newTeam = player + 1;
        setPlayer(newTeam)
    }
    const decreasePlayer = () => {
        const newTeam = player - 1;
        setPlayer(newTeam)
    }
    const teamStyle = {
        border: "2px solid red",
        padding: "20px",
        margin: "20px"
    }
    return (
        <>
            <div style={teamStyle}>
                <h3>Player:{player} </h3>
                <button onClick={increasePlayer}>Add player</button>
                <button onClick={decreasePlayer}>Reduce a player</button>
            </div>
        </>
    )
}
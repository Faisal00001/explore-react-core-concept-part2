import { useEffect, useState } from 'react';
import Friend from './Friend';
import './Friends.css';
export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <>
            <div className="box">
                <h3>Friends:{friends.length}</h3>
            </div>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </>
    )
}
/**
 * 1.To hold data
 * 2.To load data use effect
 * 3.Fetch loaded data 
 * 4.set loaded data to state
 * 5. Display data
 */ 
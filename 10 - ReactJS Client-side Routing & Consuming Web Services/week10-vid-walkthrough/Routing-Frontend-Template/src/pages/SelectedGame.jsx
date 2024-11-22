import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SelectedGame() {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGameData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/find-by-id?id=${id}`);
                if (!response.ok) {
                    throw new Error(`Error fetching game data: ${response.statusText}`);
                }
                const data = await response.json();
                setGame(data);
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
        };

        if (id) {
            fetchGameData();
        }
    }, [id]);

    const deleteGame = async () => {
        try {
            const response = await fetch('http://localhost:3001/delete-by-id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error(`Error deleting game: ${response.statusText}`);
            }

            alert('Game deleted successfully!');
            navigate('/games'); // Redirect to the game list
        } catch (error) {
            console.error('Error deleting game:', error);
            alert('Failed to delete the game. Please try again.');
        }
    };

    if (!game) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <section className="article">
                <h2>{game.title}</h2>
                <p>This game is developed by {game.developer}</p>
                <button onClick={deleteGame}>Delete Game</button>
            </section>

            <Link to="/games">Go back</Link>
        </>
    );
}

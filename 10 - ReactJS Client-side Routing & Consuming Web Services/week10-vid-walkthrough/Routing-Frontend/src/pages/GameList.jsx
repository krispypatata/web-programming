import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function GameList() {
    const [games, setGames] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        developer: '',
    });
    const [searchTitle, setSearchTitle] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSearchChange = (e) => {
        setSearchTitle(e.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/find-by-title-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: searchTitle }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }

            const data = await response.json();
            setSearchResult(data);
        } catch (error) {
            console.error('Error searching for the game:', error);
            alert('Failed to find the game. Please try again.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to add the game');
            }

            const newGame = await response.json();
            setGames((prevGames) => [...prevGames, newGame]);
            setFormData({
                title: '',
                developer: '',
            });
        } catch (error) {
            console.error('Error adding game:', error);
        }
    };

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost:3001/find-all');
                if (!response.ok) {
                    throw new Error('Failed to fetch games');
                }
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <>
            <section>
                <h2>Game List</h2>
            </section>

            <section className="article">
                <h3>Here are the list of games available on your computer</h3>

                {games.length > 0 ? (
                    <ul>
                        {games.map((game) => (
                            <li key={game._id}>
                                <Link to={game._id}>
                                    {game.title} - {game.developer}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No games found</p>
                )}

                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Game Title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />{' '}
                        <br />
                        <input
                            type="text"
                            name="developer"
                            id="developer"
                            placeholder="Game Developer"
                            value={formData.developer}
                            onChange={handleInputChange}
                        />{' '}
                        <br />
                        <button>Add to game list</button>
                    </form>

                    <form onSubmit={handleSearch} style={{ marginTop: '20px' }}>
                        <input
                            type="text"
                            placeholder="Search Game Title"
                            value={searchTitle}
                            onChange={handleSearchChange}
                        />
                        <button type="submit">Search</button>
                    </form>

                    {searchResult && (
                        <div style={{ marginTop: '20px' }}>
                            <h3>Search Result:</h3>
                            {searchResult.title ? (
                                <div>
                                    <p>
                                        <strong>Title:</strong> {searchResult.title}
                                    </p>
                                    <p>
                                        <strong>Developer:</strong> {searchResult.developer}
                                    </p>
                                </div>
                            ) : (
                                <p>No game found with the title "{searchTitle}".</p>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <Link to={'/'}>Go back</Link>
        </>
    );
}

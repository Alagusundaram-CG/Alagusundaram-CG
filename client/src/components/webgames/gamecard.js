import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logEvent } from '../../utils/google_analytics';
export default function GameCard(params) {
    const [isHovered, setIsHovered] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const recentlyPlayedGames = (gameId) => {
        // Retrieve the existing recently played game IDs from localStorage
        let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayedGames')) || [];

        // Add the clicked game ID to the beginning of the list, filtering out duplicates
        recentlyPlayed = [gameId, ...recentlyPlayed.filter(id => id !== gameId)];

        // Optional: Limit the number of recently played games stored
        recentlyPlayed = recentlyPlayed.slice(0, 6);

        // Save the updated list to localStorage
        localStorage.setItem('recentlyPlayedGames', JSON.stringify(recentlyPlayed));
    }
    return (
        <>
            <div className={params.cardSize} style={{ padding: '0px 0px 10px 10px' }}>
                <div className="thumbnail" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <Link to={`/games/${params.game_id}`} onClick={() => { logEvent(params.game_id,'click','Game Card'); recentlyPlayedGames(params.id); scrollToTop(); }}>
                        <img src={params.imgUrl} alt={params.alt} style={{ width: "100%" }} />
                        {isHovered && <div className="video-container">
                            <video className="video" src={params.vidUrl} autoPlay muted loop />
                            <div className="text">{params.alt}</div>
                        </div>
                        }
                    </Link>
                </div>
            </div>
        </>
    )
}
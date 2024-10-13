import React, { useEffect, useState } from 'react'
import GameCards from '../components/webgames/gamecard';
import DataFetcher from '../components/fetch';
import { Link } from 'react-router-dom'

const WebGameListing = () => {
    const [GameData, setGameData] = useState([]);

    const [query, setQuery] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);

    //const [recentlyPlayedListData, setrecentlyPlayedListData] = useState("");
    const [FeaturedGamesData, setFeaturedGamesData] = useState("");
    const [GameCardsData, setGameCardsData] = useState("");
    const handleSearch = (event) => {

        const searchQuery = event.target.value.toLowerCase();
        setQuery(searchQuery);
        console.log(searchQuery);
        if (searchQuery.length > 0) {
            DataFetcher('get_webgames', { game_name: searchQuery }).then((apidata) => {
                setFilteredNames(apidata);
            });
        }

    };
    const reset_search = () => {
        console.log(query, filteredNames, 'query:::::::::;');
        setQuery('');
        setFilteredNames([]);
    }

    useEffect(() => {
        let isMounted = true;
        document.title = "Web Games - ChennaiGames";

        DataFetcher('get_webgames').then((apidata) => {
            if (isMounted) {
                setGameData(apidata);
            }
        });

        return () => {
            isMounted = false;
        };
        // Perform some side effect or data fetching
    }, []);
    useEffect(() => {
        console.log(GameData, 'fetch');
        if (GameData.length > 0) {
            //const storedGameIds = JSON.parse(localStorage.getItem('recentlyPlayedGames')) || [];
            //const recentlyPlayedList = storedGameIds.map(id => GameData.find(game => game.id === id));
            // const recentlyPlayedListData = recentlyPlayedList.map((key, index) => (
            //     <GameCards key={index} id={key.id} game_id={key.game_id} cardSize='col-lg-2 col-sm-3' imgUrl={'../' + key.thumbnail_image} vidUrl={'../' + key.thumbnail_video} alt={key.title} />
            // ));
            // setrecentlyPlayedListData(recentlyPlayedListData)
            const FeaturedGamesData = GameData.map((key, index) => {
                if (index <= 3) {
                    return (
                        <GameCards
                            key={index}
                            id={key.id}
                            game_id={key.game_id}
                            cardSize='col-lg-3 col-sm-6'
                            imgUrl={'../' + key.thumbnail_image}
                            vidUrl={'../' + key.thumbnail_video}
                            alt={key.title}
                        />
                    );
                } else {
                    return null;
                }
            });
            setFeaturedGamesData(FeaturedGamesData)
            const GameCardsData = GameData.map((key, index) => (
                <GameCards key={index} id={key.id} game_id={key.game_id} cardSize='col-lg-2 col-sm-3' imgUrl={'../' + key.thumbnail_image} vidUrl={'../' + key.thumbnail_video} alt={key.title} />
            ));
            setGameCardsData(GameCardsData)
        }
    }, [GameData]); // Logs GameData when it updates
    //FETCHING RECENTLY PLAYED DATA FROM LOCAL STORAGE
    // return false

    return (
        <> <br></br>
            <div className='row'>

                <div className='col-4'></div>
                <div className='col-4'>
                    <div class="input-group mb-3">
                        <div className="input-group ">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                value={query}
                                onChange={handleSearch}
                                aria-describedby="basic-addon2"
                                style={{ borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px", height: "50px", background: "black", border: "black", color: 'whitesmoke' }}
                            />
                            <span className="input-group-text" id="basic-addon2" style={{ borderTopRightRadius: "50px", borderBottomRightRadius: "50px", background: "black", border: "black" }}>
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                        {query ?
                            <ul className="list-group" style={{ zIndex: 1, top: "50px", width: "410px", position: "absolute", background: "black", borderRadius: "50px" }}>

                                {filteredNames.map((item, index) => (
                                    <li key={index} onClick={reset_search} className="list-group-item" style={{ background: "black", borderRadius: "50px" }}>
                                        <Link to={`/games/${item.game_id}`}><img src={`.${item.thumbnail_image}`} width={'60px'} height={'30px'}></img> {item.title}</Link>
                                    </li>
                                ))}
                            </ul> : ''
                        }

                        {/* <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" onClick={handleSearch}>Search</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='col-lg-12'>

                <div className='col-lg-12'>

                    <div className='row'>
                        <h5 style={{ fontSize: '25px', color: '#fff', fontWeight: 'bolder', padding: '10px 0px 10px 0px' }}>Featured Games:</h5>
                    </div>
                </div>
                <div className='row'>
                    {FeaturedGamesData}
                </div>

                <div className='col-lg-12'>
                    <div className='row'>
                        <h5 style={{ fontSize: '25px', color: '#fff', fontWeight: 'bolder', padding: '10px 0px 10px 0px' }}>New Games:</h5>
                    </div>
                </div>
                <div className='row'>
                    {GameCardsData}
                </div>

            </div>
        </>
    )
}

export default WebGameListing
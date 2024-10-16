import React from 'react';
import gamedata from '../data/webgames.json'
import { useParams } from 'react-router-dom';
import GameCards from '../components/webgames/gamecard';

const GameEmbed = () => {
    let id = useParams();
    let game_url = gamedata[id.id].game_url;
    return (
        <iframe
            src={game_url + "?gd_sdk_referrer_url=http://192.168.18.164:3000/game/" + id.id}//"https://html5.gamedistribution.com/cf19c2cfc240400590a6415ff3256cf9/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}"
            style={{ width: '100%' }}
            width="800"
            height="600"
            scrolling="none"
            frameBorder="0"
            title="Game Embed"
        ></iframe>
    );
};

export default function PlayWebGame() {
    let id = useParams();
    let gamename = gamedata[id.id].title;

    // render() {
    return (
        <>
            <div className="container-fluid">
                <br />
                <div className="col-lg-12 col-xs-12">
                    <div className="row">
                        <div className="col-lg-8 col-xs-12">
                            {/* GAMEPLAY USER INTERFACE */}
                            <div className="col-lg-12">
                                <GameEmbed />
                                <div className="bottom-strip" style={{ backgroundColor: '#222', padding: '5px', margin: '0px' }}>
                                    <div className="row align-items-center" style={{ padding: '0px 5px' }}>
                                        <div className="col-lg-6">
                                            {/* <div className="form-group">
                                            <img src='../img/cg_logo_white.png' style={{ width: '30px', fontFamily: 'RetroGaming' }} alt="Chennaigames Logo" />
                                            <label style={{ fontWeight: 'bold', marginTop: '10px', color:'#fff',fontSize:'20px' }}>&nbsp;&nbsp;{gamename}</label>
                                        </div> */}
                                            <div className="logo-aligned">
                                                <img src="../img/cg_logo_white.png" width="40" alt="" />
                                                <span className='' style={{ color: '#fff', fontSize: '20px', fontWeight: 'bolder' }}>&nbsp;&nbsp;{gamename}</span>
                                                {/*  */}
                                            </div>

                                        </div>
                                        {/* <div class="col-6" align="left">
                                            <button type="button" class="btn btn-outline-light" style={{ background: 'transparent', border: 'none', color: '#fff' }}> 
                                            Like</button>|
                                            <button type="button" class="btn btn-outline-light" style={{ background: 'transparent', border: 'none', color: '#fff' }}>Rate</button>|
                                            <button type="button" class="btn btn-outline-light" style={{ background: 'transparent', border: 'none', color: '#fff' }}>Fullscreen</button>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                            {/* BOTTOM ADVERTISEMENT SLOT */}
                            {/* <div className="col-lg-12">
                            <div style={{ textAlign: 'center' }}>
                                <img src="../img/leaderboard-ad.jpg" style={{ width: '800px', padding: '10px 0px 0px 0px', alignContent: 'center' }} alt='Advertisement' />
                                <br />
                                <span style={{ fontSize: '10px', textAlign: 'left', display: 'block' }}>Advertisement</span>
                            </div>
                        </div> */}
                            {/* RELATED GAMES */}
                            <div className="col-lg-12">
                                <br />
                                <div className="row">
                                    {/* <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' /> */}
                                    {getRandomGames(gamedata, 12, 'col-lg-2 col-xs-6')}
                                </div>
                            </div>
                            {/* GAME DETAILS*/}
                            <div className="col-lg-12">
                                <br />
                                <div className="row">
                                    {/* GAME DESCRIPTION */}
                                    <div className="col-lg-8">
                                        {/* <p>The standard Lorem Ipsum passage, used since the 1500s
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                                        Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                                        1914 translation by H. Rackham
                                        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

                                        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

                                        1914 translation by H. Rackham
                                        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p> */}
                                    </div>
                                    {/* ADVERTISEMENT SLOT */}
                                    {/* <div className="col-lg-4">
                                    <div style={{ textAlign: 'center' }}>
                                        <span style={{ fontSize: '10px', textAlign: 'left', display: 'block' }}>Advertisement</span>

                                        <img src="./img/rect-ad.jpg" style={{ width: '800px', height: '600px', padding: '10px 0px 0px 0px', alignContent: 'center' }} alt='Advertisement' />
                                    </div>
                                </div> */}
                                </div>
                            </div>
                            {/* MORE GAMES SECTION */}
                            <div className="col-lg-12">

                                <br />
                                <div className="row">
                                    {/* <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-3' /> */}
                                    {getRandomGames(gamedata, 12, 'col-lg-2 col-xs-6')}
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-12">
                            {/* RELATED GAMES */}
                            <div className="col-lg-12">
                                <div className="row">
                                    {/* <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' /> */}
                                    {getRandomGames(gamedata, 4, 'col-lg-6 col-xs-6')}
                                </div>
                            </div>
                            {/* ADVERTISEMENT SLOT */}
                            {/* <div className="col-lg-12">
                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <span style={{ fontSize: '10px', textAlign: 'left', display: 'block' }}>Advertisement</span>

                                <img src="./img/rect-ad.jpg" style={{ width: '300px', height: '600px', padding: '10px 0px 0px 0px', alignContent: 'center' }} alt='Advertisement' />
                            </div>
                        </div> */}
                            <div className='col-lg-12'>
                                <br />
                                <div className="row">
                                    {/* <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' />
                                <GameCard imageUrl="/img/night-vision.jpg" linkUrl="10_game-profile.html" className='col-6' /> */}
                                    {getRandomGames(gamedata, 8, 'col-lg-6 col-xs-6')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    // }
}

function getRandomGames(gamedata, total, size = 'col-lg-2 col-xs-6') {
    const shuffled = [...gamedata].sort(() => 0.5 - Math.random());
    let randomgames = shuffled.slice(0, total);
    return randomgames.map((key, index) => (
        <GameCards key={index} id={key.id} cardSize={size} imgUrl={"../" + key.thumbnail_image} vidUrl={"../" + key.thumbnail_video} alt={key.title} />
    ));
}
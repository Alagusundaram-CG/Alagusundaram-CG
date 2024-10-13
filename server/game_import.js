// game_data_generator()
async function game_data_generator(dbobj) {

    const game_json = require('./Wizard_Data.json');
    const axios = require('axios');
    const fs = require('fs');
    let sorted_games = [
        'https://gamedistribution.com/games/number-tricky-puzzles',
        'https://gamedistribution.com/games/daily-jigsaw-1',
        'https://gamedistribution.com/games/brother!follow-me!-merge-men',
        'https://gamedistribution.com/games/infinite-craft',
        'https://gamedistribution.com/games/atlantic-sky-hunter-xtreme',
        'https://gamedistribution.com/games/samurai-vs-yakuza-beat-em-up',
        'https://gamedistribution.com/games/stickhole.io',
        'https://gamedistribution.com/games/curve-quest',
        'https://gamedistribution.com/games/garage-master-nuts-and-bolts',
        'https://gamedistribution.com/games/color-sort-mania',
        'https://gamedistribution.com/games/racing-island',
        'https://gamedistribution.com/games/bomber-battle-arena',
        'https://gamedistribution.com/games/ball-drop-1',
        'https://gamedistribution.com/games/impostor-hook-master',
        'https://gamedistribution.com/games/ninja-climb',
        'https://gamedistribution.com/games/planet-takeover',
        "https://gamedistribution.com/games/fireboy-and-watergirl-1-forest-temple",
        'https://gamedistribution.com/games/mini-golf-saga'
    ];
    let category = [];
    for (let i = 0; i < game_json.segments[0].hits.length; i++) {
        console.log(i);
        for (let k = 0; k < sorted_games.length; k++) {
            //console.log(game_json.segments[0].hits.length, k);
            let game = game_json.segments[0].hits[i];
            if (game['GD URL'] === sorted_games[k]) {
                let game_name = (game.Title).toLowerCase();
                game_name = game_name.replaceAll(' ', '_');
                console.log(game_name);
                if (!fs.existsSync(__dirname + '/game_img/' + game_name)) {
                    fs.mkdirSync(__dirname + '/game_img/' + game_name);
                }
                // Get the image data
                for (let j = 0; j < game.Assets.length; j++) {
                    let url = game.Assets[j];
                    let resolution = game.Assets[j].split('-')[1];
                    // console.log(resolution);
                    let filename = 'thumbnail' + resolution;
                    const response = await axios({
                        url,
                        responseType: 'stream'
                    });
                    // let file = fs.createWriteStream(game_name + '/' + filename);
                    response.data.pipe(fs.createWriteStream(__dirname + '/game_img/' + game_name + '/' + filename))
                    // .on('finish', () => {
                    //     console.log(`Image downloaded and saved to ${game_name + '/' + filename}`);
                    // })
                    // .on('error', (err) => {
                    //     console.error('Error writing file:', err);
                    // });
                }
                let insert_obj = {

                    "id": 7,
                    "title": game.Title,
                    "game_id": game_name,
                    "count": 0,
                    "thumbnail_image": "./images/games/" + game_name + "/thumbnail.avif",
                    "thumbnail_video": "./images/games/" + game_name + "/thumbnail.mp4",
                    "type": 1,
                    "screen": "landscape",
                    "category": 1,
                    "description": game.Description,
                    "instruction": game.Instructions,
                    "game_url": game['Game URL'],//"https://html5.gamedistribution.com/e7278c9e730e42f98e32adbbbcf96bc2/",
                    "meta_description": game.Description,
                    "meta_keywords": [
                        game_name,
                        game.Title
                    ],
                    "dislikes": 0,
                    "likes": 0,
                    "genres": game.Genres
                }
                let check_game = await dbobj.collection('webgames').find({ game_id: game_name }).toArray();
                if (check_game.length == 0) {
                    let last_game_id = await dbobj.collection('webgames').find({}).sort({ id: -1 }).limit(1).project({ _id: 0, id: 1 }).toArray();
                    if (last_game_id.length > 0) {
                        insert_obj.id = last_game_id[0].id + 1;
                        await dbobj.collection('webgames').insertOne(insert_obj);
                    }
                }
                for (let m = 0; m < game.Genres.length; m++) {
                    console.log(category.indexOf(game.Genres[m]));
                    if (category.indexOf(game.Genres[m]) === -1) {
                        category.push(game.Genres[m])
                    }
                }
            }
        }
    }
    // console.log(category);
    // if (category.length > 0) {
    //     let check_available_tags = await dbobj.collection('catagories').find({ tag: { $in: category } }).project({ _id: 0 }).toArray();
    //     if (check_available_tags.length > 0) {
    //         for (let n = 0; n < category.length; n++) {

    //         }
    //     }
    // }
};

module.exports = {
    game_data_generator
}
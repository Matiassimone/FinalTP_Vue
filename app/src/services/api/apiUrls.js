const SERVER_URL = 'https://api.twitch.tv/helix/'
const DEFAULT_CANT = 20 ///default cant for items in the api
export const CLIENT_ID = 'w44e8dg8ut8fvzbho0gprtdulhnvvs'
export const AUTH_SERVER_URL = 'http://localhost:3000/'

 const validateParams = (url,cant,cursor) => {
    if (cant) {
        url += '?first=' + cant
    } else {
        url += '?first=' + DEFAULT_CANT
    }
    
    if (cursor) {
        url += '&after=' + cursor;
    }
    return url
  }

export const GET_TOPGAMES_URL = (cant, cursor) => { //cursor is for obtein more data from the api call
    let url = SERVER_URL + 'games/top'
    
    return validateParams(url, cant, cursor)
};

export const GET_GAME_BY_NAME = (gameName) => SERVER_URL + 'games?name=' + gameName;

export const GET_GAME_BY_ID = (gameId) => SERVER_URL + 'games?id=' + gameId;

export const GET_TOPSTREAMS_URL = (cant, cursor) => {
    let url = SERVER_URL + 'streams';

    return validateParams(url, cant, cursor)
};

export const GET_STREAMSBYGAMEID_URL = (gameID, cant, cursor) => {
    let url = SERVER_URL + 'streams';
    url = validateParams(url, cant, cursor)
    if(gameID){
        url+= '&game_id=' + gameID
    }
    return url
};

export const GET_STREAMBYUSERID_URL = (userID) => SERVER_URL + 'streams?user_id=' + userID;

export const GET_USERINFORMATION_URL = (userID) => SERVER_URL + 'users?id=' + userID;

export const GET_USERINFORMATIONBYNAME_URL = (userName) => SERVER_URL + 'users?login=' + userName;


export const GET_LOGGEDUSER_URL = () => AUTH_SERVER_URL + 'getloggeduser'
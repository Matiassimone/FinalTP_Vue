import { 
    GET_TOPGAMES_URL, 
    GET_TOPSTREAMS_URL, 
    GET_STREAMSBYGAMEID_URL, 
    GET_STREAMBYUSERID_URL, 
    GET_USERINFORMATION_URL,
    CLIENT_ID,
    GET_LOGGEDUSER_URL,
    GET_USERINFORMATIONBYNAME_URL,
    GET_GAME_BY_NAME,
    GET_GAME_BY_ID
} from './apiUrls'

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

function apiCall(url){
    const myHeaders = new Headers();
    myHeaders.append('Client-ID',CLIENT_ID)
    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' 

    }
    const request = new Request(url, myInit)
    return fetch(request)
            .then(handleErrors)
            .then(res => res.json());
}


export const getTopGames = (cant, cursor) => {
    const url = GET_TOPGAMES_URL(cant, cursor)
    return apiCall(url)
}

export const getGameByName = (gameName) => {
    const url = GET_GAME_BY_NAME(gameName)
    return apiCall(url)
}

export const getGameById = (gameID) => {
    const url = GET_GAME_BY_ID(gameID)
    return apiCall(url)
}

export const getTopStreams = (cant, cursor) => {
    const url = GET_TOPSTREAMS_URL(cant, cursor)
    return apiCall(url)
}

export const getStreamByGameId = (gameID, cant, cursor) => {
    const url = GET_STREAMSBYGAMEID_URL(gameID, cant, cursor)
    return apiCall(url)
}

export const getStreamByUserId = (userID) => {
    const url = GET_STREAMBYUSERID_URL(userID)
    return apiCall(url)
}

export const getUserInformation = (userID) => {
    const url = GET_USERINFORMATION_URL(userID)
    return apiCall(url)
}

export const getUserInformationByName = (userName) => {
    const url = GET_USERINFORMATIONBYNAME_URL(userName)
    return apiCall(url)
}

export const getLoggedUser = () => {
    const url = GET_LOGGEDUSER_URL()
    return fetch(url)
            .then(handleErrors)
            .then(res => res.json())
}
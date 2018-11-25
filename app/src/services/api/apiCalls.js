import { 
    GET_TOPGAMES_URL, 
    GET_TOPSTREAMS_URL, 
    GET_STREAMSBYGAMEID_URL, 
    GET_STREAMBYUSERID_URL, 
    GET_USERINFORMATION_URL,
    CLIENT_ID
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
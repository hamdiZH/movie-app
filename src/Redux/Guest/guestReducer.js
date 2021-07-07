import {
    GET_HERO_IMAGE_FAILED,
    GET_HERO_IMAGE_START,
    GET_HERO_IMAGE_SUCCESS,
    GET_MOVIE_BY_ID_FAILED,
    GET_MOVIE_BY_ID_START,
    GET_MOVIE_BY_ID_SUCCESS,
    GET_MOVIES_FAILED,
    GET_MOVIES_START,
    GET_MOVIES_SUCCESS,
} from "./guestConstantType";


export const guestReducer = (
    initialState = {
        heroImage: '',
        movies: [],
        isLoading: false,
        movie:{
            movie: {},
            isLoading: false,
        },
    }, action) => {

    switch (action.type){
        case GET_HERO_IMAGE_START:
            return {
                ...initialState,
                isLoading: true,
            };

        case GET_HERO_IMAGE_SUCCESS:
            return {
                ...initialState,
                isLoading: false,
                heroImage: action.payload
            };

        case GET_HERO_IMAGE_FAILED:
            return {
                ...initialState,
                isLoading: false,
                error: action.payload,
            };

        case GET_MOVIES_START:
            return {
                ...initialState,
                isLoading: true
            };

        case GET_MOVIES_SUCCESS:
            return {
                ...initialState,
                isLoading: false,
                movies: action.payload,
            };

        case GET_MOVIES_FAILED:
            return {
                ...initialState,
                isLoading: false,
                error: action.payload,
            };

        case GET_MOVIE_BY_ID_START:
            return {
                ...initialState,
                movie: {
                    isLoading: true,
                },
            };

        case GET_MOVIE_BY_ID_SUCCESS:
            return {
                ...initialState,
                movie: {
                    movie: action.payload,
                    isLoading: false,
                },
            };

        case GET_MOVIE_BY_ID_FAILED:
            return {
                ...initialState,
                movie: {
                    isLoading: false,
                    error: action.payload,
                },
            };



        default: return initialState;
    }
}
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
import axios from "axios";


export const getHeroImage = () => async (dispatch) => {
    dispatch({
        type: GET_HERO_IMAGE_START
    });

    try{
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187/");
        dispatch({
            type: GET_HERO_IMAGE_SUCCESS,
            payload: response.data
        });
    }catch (e) {
        dispatch({
            type: GET_HERO_IMAGE_FAILED,
            payload: e?.response?.message,
        });
    }
};

export const getMovies = (page) => async (dispatch,getState) => {
    dispatch({
        type: GET_MOVIES_START
    });

    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${page}` );
        let oldData = getState().guestState.movies;
        let newData = response.data.results

        dispatch({
            type: GET_MOVIES_SUCCESS,
            payload: [...oldData, ...newData]
        });

    }catch (e) {
        dispatch({
            type: GET_MOVIES_FAILED,
            payload: e?.response?.message,
        });
    }
};

export const getMovie = (id) => async (dispatch) => {
    dispatch({
        type: GET_MOVIE_BY_ID_START,
    });

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dcf2d1463b5703e25fc8d86eb0fce187`);
        dispatch({
            type: GET_MOVIE_BY_ID_SUCCESS,
            payload: response.data,
        });
    } catch (e) {
        dispatch({
            type: GET_MOVIE_BY_ID_FAILED,
            error: e?.response?.message,
        });
    }
};
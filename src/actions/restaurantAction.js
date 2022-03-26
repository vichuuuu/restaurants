import {
    RESTAURANT_LIST_REQUEST,
    RESTAURANT_LIST_SUCCESS,
    RESTAURANT_LIST_FAIL
} from '../constants/restaurantConstants'
import axios from 'axios'


export const listrestaurants = () => async (dispatch) => {
    try {

        // dispatch({ type: RESTAURANT_LIST_REQUEST })
        const { data } = await axios.get('/restaurants.json')
        dispatch({ type: RESTAURANT_LIST_SUCCESS, payload: data.restaurants })

    } catch (error) {
        // dispatch({
        //     type: RESTAURANT_LIST_FAIL, payload: error
        // })
        console.log("errror");

    }
}
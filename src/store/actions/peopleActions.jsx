export { removepeople } from "../reducers/peopleSlice";
import axios from "../../utils/axios";
import { loadpeople } from "../reducers/peopleSlice";

export const asyncLoadpeople = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        

        let fullDetails = {
            detail: detail.data,
            externalid: externalid.data,
            combinedCredits: combinedCredits.data,
            movieCredits: movieCredits.data,
            tvCredits: tvCredits.data
        }
        dispatch(loadpeople(fullDetails))
        
    } catch (error) {
        console.log("Error: " + error)
    }
}
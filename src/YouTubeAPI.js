import axios from "axios";

const KEY = "AIzaSyCOmHYm_KXnDbRFBIfl3AfGblApt081sno";

const instance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});

export default instance;
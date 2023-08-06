import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
    key: 'AIzaSyBa5M9KP99-_TkWdWXElbHzdjubLcetHCA',
    cx: '043596d4f5a874d1e'
}
export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    })
    return data
};

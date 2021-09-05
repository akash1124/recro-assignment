import * as constant from '../constants';

// action to store data in redux
export const setCockpitData = (data) => ({
    type: constant.SET_COCKPIT_DATA,
    payload: {
        data
    }
});

// action to call api and bring data
export const fetchCockpitData = (page) => (dispatch) => new Promise((resolve, reject) => {
    const url = `http://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=10`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            dispatch(setCockpitData(response));
            resolve();
        })
        .catch((err) => {
            console.error(err);
            reject();
        })
})


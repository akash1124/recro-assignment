import React, { useState, useEffect } from 'react';
import Card from './CardComponent';
import AppLoading from './AppLoading';

import { MAX_PAGINATION_LIMIT } from '../constants/index';

import '../styles/Cockpit.css';

// function to render card
const renderCards = (data) => (
    <div className="row">
        {data.map((item, index) => <div key={index} className="column"><Card {...item} /></div>)}
    </div>
)

// function to call the api and set data into redux
const fetchData = async (page, loadingHandler, fetchCockpitData) => {
    loadingHandler(true)
    await fetchCockpitData(page);
    loadingHandler(false);
}

// function to hanlde the scroll and check whether it has reached the bottom 
const handleScroll = async ({ page, fetchCockpitData }, setLoading, loading) => {
    // condition to check if api is already called and if all the data is fetched from server
    if (loading || page === MAX_PAGINATION_LIMIT) return;
    const scrolledNode = document.getElementById('container');
    // condition to check whether scroll is at bottom
    const bottom = scrolledNode.offsetHeight + scrolledNode.scrollTop >= scrolledNode.scrollHeight;
    if (bottom) {
        fetchData(page, setLoading, fetchCockpitData)
    }
}

export default function Cockpit(props) {

    const [loading, setLoading] = useState(false);

    useEffect(() => fetchData(props.page, setLoading, props.fetchCockpitData), [])

    return (
        <div id="container" className="container" onScroll={() => handleScroll(props, setLoading, loading)}>
            {loading ? <AppLoading /> : renderCards(props.data)}
        </div>
    )
}

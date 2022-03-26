import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Restaurent from './Restaurent';
import { listrestaurants } from '../actions/restaurantAction'
import { useDispatch, useSelector } from 'react-redux'


function Home() {
    // const [hotels, setHotels] = useState([])
    const [filter, setFilter] = useState("")
    const dispatch = useDispatch()
    const restaurantData = useSelector(state => state.restaurantReducer)
    const {restaurants}=restaurantData

    useEffect(() => {
        // const fetchData = async ()=>{
        //     await fetch('/restaurants.json')
        //     .then((response)=>response.json())
        //     .then((data)=>setHotels(data.restaurants))
        // }
        // fetchData()
        dispatch(listrestaurants())

    }, [])

    // console.log("our data", hotels);
    return (
        <>
            <Row>
                <input value={filter} placeholder="search place" type="text" onChange={event => setFilter(event.target.value)} />
                {restaurants ? (
                    restaurants.filter(item => {
                        if (filter === "") {
                            return item
                        }
                        else if (item.neighborhood.toLowerCase().includes(filter.toLocaleLowerCase())) {
                            return item
                        }
                    })
                        .map(item => (


                            <Col sm={12} md={8} lg={6} xl={3}>
                                <Restaurent item={item} />
                            </Col>

                        ))
                ) : ("error")}
            </Row>
        </>
    )
}

export default Home;

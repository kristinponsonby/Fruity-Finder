import React from "react";
import FruitCard from './FruitCard';
import { useEffect } from 'react';
import { useState } from 'react';


const FruitIndex = () => {

    const url = "http://localhost:3000/fruits";
    const [loading, setLoading] = useState(true)
    const [apiData, setApiData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const getData = () => {
        return fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setApiData(fruit => [...fruit, ...data])
            setLoading(false)
          });
        }
        useEffect(() => {
            getData();
          }, []);

        return (
            <div className="fruit-container"> 
                <input className="search" type="text" placeholder="Search..." onChange={ event => { setSearchTerm(event.target.value) } } />

                { apiData.filter((fruit) => {
                    if (searchTerm === '') {
                        return  <FruitCard   
                                genus={fruit.genus}
                                name={fruit.name}
                                family={fruit.family}
                                order={fruit.order}
                                />
                  } else if (fruit.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return fruit
                    }

                  }).map((fruit,i) => {
                        return (

                  <div className="fruit" key={i}>
                          <FruitCard   
                          genus={fruit.genus}
                          name={fruit.name}
                          family={fruit.family}
                          order={fruit.order}
                          key={i}
                          />
                  </div>

                              );
                           })}

            { loading ? <div className="loading"> Loading...  </div> : null }
           
            </div>
        );
    }


 export default FruitIndex;

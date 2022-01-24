import React from "react";
import Card from './Card';
import { useEffect } from 'react';
import { useState } from 'react';


const FetchFruit = () => {

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
            <div className = "fruit-container"> 
             <input className = "search" type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
              {apiData.filter((f) => {
              if (searchTerm == '') {
                  return ''
              } else if (f.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return f
                   }
                }).map((f,i) => {
               return (
               <div className="fruit" key={i}>
                    <p>{f.name}</p>
               </div>
               );
              })}
            {loading ? <div className="loading"></div> : null}
            {apiData.map((f,i) => 
             <Card   
              genus={f.genus}
              name={f.name}
              family={f.family}
              order={f.order}
              key={i}
              />
            )}
           </div>
        );
    }


 export default FetchFruit;

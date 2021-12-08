import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Success({ user }) {
    const [data, setData] = useState([]);
    const [loading, Setloading] = useState(false);
    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        let result = await axios('https://randomuser.me/api/?results=10');
        result = await result.data;
        setData(result.results);
        Setloading(true);
    }
    if (!loading) {
        return (
            <>loading ...</>
        )
    }
    else {
        return (
            <div className="row">
                <div className="center container">
                    <h1 className="heading">Hello, {user?.email} you are succcesfullly logged in</h1>
                </div>
                {
                    data.map((item, uid) => (
                        <div className="col-md-4" key={uid}>
                            <div className="card">
                                <img className="card-img-top" src={item.picture.large} alt={item.name.first} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name.first} {item.name.last}</h5>
                                    <span>Email :</span><span>{item.email}</span><br />
                                    <span>Phone :</span><span>{item.phone}</span><br />
                                    <span>Address :</span><span>{item.location.city} </span><br />
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>


        );
    }
    // return (
    //     <div className="center container">
    //         <h1 className="heading">Hello, {user?.email} you are succcesfullly logged in</h1>
    //         <h3 className="heading">Uploading details soon , stay tuned </h3>
    //     </div>
    // )
}

import React, { useState, useEffect } from "react";

const Home = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    // https://source.unsplash.com/random/
    const url = "https://source.unsplash.com/random";
    console.log('url', url.data)

    const fetchData = async () => {
        
        try {
            
            const response = await fetch(url);
            const result = await response.results;
            console.log(result);
            setImage(result);
        } catch (error) {
            console.log("error", error);
        }
        return this._http.get(`api/data`)
    .map((response: Response) => response.json())
    .do(value => console.log(value));
    };

    fetchData();
}, []);

    return (
        <div className="home" >
        {image}
      </div>
    );
  }

export default Home;
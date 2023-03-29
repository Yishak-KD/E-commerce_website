import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Images() {
    const [imageData, setImageData] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(
                    "/api/photos/3GZlhROZIQg",
                    {
                        headers: {
                            Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
                        }
                    }
                );
                setImageData(response.data.urls.small)
            } catch(error) {
                console.log(error)
            };
        }
        fetchImage()
    }, []);

  return (
    <div>
        {imageData && (
            <div>
                <img src={imageData} alt="unsplash" />
            </div>
        )}
    </div>
  )
}

export default Images
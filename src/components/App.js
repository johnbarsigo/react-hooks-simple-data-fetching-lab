import { useEffect, useState } from "react";

function App () {

    const [ img,  setImg ] = useState("");
    const [ pageLoading, setPageLoading ] = useState(true);

    const url = "https://dog.ceo/api/breeds/image/random";

    useEffect (() => {

        function fetchImage () {
            fetch (url)
                .then ( (res) => res.json() )
                .then ( (data) => { 
                    setImg(data.message);
                    (setPageLoading(false))
                } )

            };
        fetchImage();
        }, []);

    return (
        <>
            {
                pageLoading ? 
                (<p>Loading...</p>)
                : (
                    <img src={img} alt="A Random Dog" ></img>
                )
            }
        </>
    );
}

export default App;
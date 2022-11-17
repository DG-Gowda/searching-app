import  { useState, useEffect} from "react";
import axios from "axios";
const count = 1;
function LoadImages(){
    const [state, setState] = useState([])
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/photos/?client_id=tvbx0IqRLvHYMdUrb8QMz4hyuJGmO9g5Z0cTIl1SRzU")
        .then((data) => {
            setState(data.data);
        });
    } , [count])
    return state;
}

function SearchImages(params) {
    const [query, setQuery] = useState()
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/search/photos?query="+params+"&client_id=tvbx0IqRLvHYMdUrb8QMz4hyuJGmO9g5Z0cTIl1SRzU")
        .then((data) => {
            setQuery(data.data.results);
        });
    }, [params])
    return query;
}
export {LoadImages, SearchImages};
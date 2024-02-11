import { useEffect, useState } from "react";
import axios from "axios";
import "../components/api.css";

function Books() {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios
            .get("https://reactnd-books-api.udacity.com/books", {
                headers: { Authorization: "whatever-you-want" },
            })
            .then((response) => {
                const data = response.data.books;
                setState(data);
            })
            .catch(() => {
                console.log("Status code: 404");
                console.log("Website not found");
            });
    },[]);

    return (
        <div>
            {state.map((item) => (
                <div key={item.id}>
                    <div className="container">
                        <div className="image">
                            <h3>{item.title}</h3>
                            <img src={item.imageLinks.smallThumbnail} alt={item.title} />
                            <div className="author-name">{item.authors}</div>
                        </div>
                        <div className="des">
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Books;
import React, {useState} from "react";
import {Form} from "./components/Form";
import {List} from "./components/List";

function App() {

    const [docs, setDocs] = useState([]);

    return (
        <div className="container mt-5">
            <Form setDocs={setDocs}/>
            <List docs={docs}/>
        </div>
    );
}

export default App;

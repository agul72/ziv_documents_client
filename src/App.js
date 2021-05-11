import React, {useState} from "react";
import {Form} from "./components/Form";
import {List} from "./components/List";

function App() {

    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <div className="container mt-5">
            <Form setDocs={setDocs} setLoading={setLoading}/>
            <List docs={docs} loading={loading}/>
        </div>
    );
}

export default App;

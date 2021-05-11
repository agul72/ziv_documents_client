import React, {useState} from "react";
import {fetchData} from "../services/http.service";

export function Form({setDocs, setLoading}) {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");


    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        console.log("Start loading...")
        setLoading(true);
        try {
            fetchData(formData)
                .then(res => setDocs(res.data));
        } catch (ex) {
            console.log(ex);
        } finally {
            setTimeout(() => {
                setLoading(false);
                console.log("Finish loading.")
            }, 1000);

        }
    };

    return (
        <form className="row ">
            <div className="col-auto">
                <input className="form-control" type="file" onChange={saveFile}/>
            </div>
            <div className="col-auto">
                <button
                    className="btn btn-primary mb-3"
                    disabled={!file}
                    onClick={uploadFile}>Upload
                </button>
            </div>
        </form>
    )
}

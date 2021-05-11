import React, {useState} from "react";
import axios from "axios";

export function Form({ setDocs }) {

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
        try {
            const res = await axios.post(
                "http://192.168.1.16:8080/api/transform",
                formData
            );
            console.log(res.data);
            setDocs(res.data);
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <form className="row ">
            <div className="col-auto">
                <input className="form-control" type="file" onChange={saveFile} />
            </div>
           <div className="col-auto">
               <button className="btn btn-primary mb-3" onClick={uploadFile}>Upload</button>
           </div>
        </form>
    )
}

import axios from "axios";

const proxy = "http://192.168.1.16:8080";

export async function fetchData(formData) {
    try {
        return await axios.post(
            proxy + "/api/transform",
            formData
        );
    } catch (ex) {
        console.log(ex);
    }
}

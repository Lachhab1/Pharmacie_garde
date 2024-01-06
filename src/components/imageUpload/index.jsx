import React, { useState } from "react"
import axios from "axios"
function Upload() {
    const [file, setFile] = useState()
    const upload = () => {
        const formData = new FormData()
        formData.append('file', file)
        console.log(file)
        axios.post('http://localhost:8000/api/upload', formData)
            .then(res => {
                console.log(res)
            })
            .catch(er => console.log(er))
    }
    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button type="button" className="bg-yellow-700 shadow-blue-gray-500 text-white text-lg p-2 border-md" onClick={upload}>Upload</button>
        </div>
    )
}

export default Upload;
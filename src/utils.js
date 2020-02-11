import Axios from "axios"
import { useState, useEffect } from "react"

export const fetchItems = (url) => {
    const [content, setContent] = useState({ content: [] })
    useEffect(() => {
        Axios.get(url)
            .then(response => setContent({ content: response.data }))
            .catch(error => console.log('Error', error))
    })

    return content
}
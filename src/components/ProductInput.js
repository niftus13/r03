import { useRef, useState } from "react";
import { postProduct } from "../api/productAPI";

const initState = {
    title:'',
    content:'',
    writer:'',
    images:[]
}

const ProductInput = () => {

    const fileRef = useRef()
    const [board, setBoard] = useState({...initState})

    const handleChange = (e) => {
        board[e.target.name] = e.target.value
        setBoard({...board})
    }

    const handleClickSave = (e) => {
        const formData = new FormData()

        formData.append("title", board.title)
        formData.append("title", board.content)
        formData.append("title", board.writer)

        console.dir(fileRef.current)

        const arr = fileRef.current.files

        for(let file of arr) {
            formData.append("files", file)
        }

        postProduct(formData)
        
    }

    const handleCilckClear = (e) => {
        fileRef.current.value = ''
    }

    return ( 
        <div>
            <h1>Input</h1>
            <div>
                <input type="text" name="title" value={board.title} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="content" value={board.content} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="writer" value={board.writer} onChange={handleChange}></input>
            </div>
            <div>
                <input type="file" name="images" ref={fileRef} onChange={handleChange} multiple></input>
            </div>
            <div>
                <button onClick={handleClickSave}>SAVE</button>
                <button onClick={handleCilckClear}>CLEAR FILES</button>
            </div>
        </div>
     );
}
 
export default ProductInput;
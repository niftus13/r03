import { useEffect, useState } from "react";
import { getList } from "../api/productAPI";

const initState = {
    dtoList:[],
    end:0,
    start:0,
    next: false,
    prev: false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO:null
}


const ProductList = () => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {
        getList().then(data => {
            console.log(data)
            setListData(data)
        });

    },[])

    return ( 
        <div>
            <ul>
                {listData.dtoList.map(dto =>
                    <li key={dto.pno}>
                        {dto.pname} - {dto.price}
                        <div>
                            <img src={`http://localhost/s_${dto.fname}`} alt="ddd"></img>
                            {dto.fname}
                        </div>

                    </li>
                    )}
            </ul>

        </div>
     );
}
 
export default ProductList;
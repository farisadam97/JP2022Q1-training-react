import {React,useState,useEffect} from "react";


const Todos = props => {
    const [dataTodo,setDataTodo] = useState([])
    
    useEffect(() => {
        setDataTodo({
            dataTodo:props.data
        })
    },[props,dataTodo])

    function noData(){
        <div className="mt-3">
            <h2 className="text-center">No Data Todos</h2>
        </div>
    }

    function renderList(data){
        <div className="mt-3">
            <ul>
                {
                    dataTodo.forEach(element => {
                        <li>{element}</li>
                    })
                }
            </ul>
        </div>
    }

    return(
        <div className="">
            {
                dataTodo.length>0 ? 
                renderList(): noData() 
            }
        </div>
    )
}

export default Todos
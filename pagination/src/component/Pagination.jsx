import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import './Pagination.css'

function Pagination() {
    const [tableData, setTableData] = useState();
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPage] = useState(10)

    const indexOfLastItem = currentPage * rowsPerPage;
    const indexOfFirstPage = indexOfLastItem - rowsPerPage;
    const currentItem = tableData?.users?.slice(indexOfFirstPage, indexOfLastItem)
    const totalPages = Math.ceil(tableData?.total / 10)

    useEffect(() => {
        const data = axios.get(`https://dummyjson.com/users?limit=0`)
            .then((res) => {
                setTableData(res?.data)
                // console.log(res);
            })
    }, [])

    function handlePrev(){
        setCurrentPage((prev) => {
            console.log(prev);
            return Math.max(prev-1,1);
            
        })
    }
    function handleNext(){
        setCurrentPage((prev) => Math.min(prev+1,totalPages))
    }
    function handlePageClick(pageNumber){
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <header>
                <h1 className='pageNumber'>Page Number {currentPage}</h1>
                <table border={'1px'} cellPadding={'10px'}>
                    <thead className='tableHeader'> 
                        <td>name</td>
                        <td>email</td>
                        <td>gender</td>
                    </thead>
                    <tbody>
                        {
                            currentItem?.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.firstName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </header>
            <div>
                <button className='btn' disabled={currentPage === 1} onClick={handlePrev}>⏮</button>
                {
                    Array.from({length:totalPages}, (_, index) =>{
                        return <button className={`btn ${currentPage === index+1 ? 'active' :''}`} onClick={()=>handlePageClick(index+1)}  key={index}>{index+1}</button>
                    })
                }
                <button className='btn' disabled={currentPage === 21} onClick={handleNext}>⏭</button>
            </div>
        </div>
    )
}

export default Pagination


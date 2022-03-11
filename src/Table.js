import ReactTable from "react-table";  
import React, { useState, useEffect } from 'react';
import data from './tabledata'
function Table(){
    const [input,setInput]=useState('')
    

    const columns=[
        {
        Header: 'Description',  
        accessor: 'description'  
        },

        {  
        Header: 'Qty',  
        accessor: 'quantity'  
    },

    {
        Header: 'Unity Price',  
        accessor: 'unitprice'  
        },

        {  
        Header: 'Amount',  
        accessor: 'amount'  
    }
]

return(
    <div>
    <ReactTable  
    data={input}  
    columns={columns}  
    defaultPageSize = {4}  
    pageSizeOptions = {[2,4, 6]}  
/>  
</div>
)

}
export default Table;
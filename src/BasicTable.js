import React,{useMemo} from 'react'
import {useTable} from 'react-table'
import data from './tabledata'
import './tables.scss'

export const BasicTable=()=>{
    const columnfile=[
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
    const columns=useMemo(()=>columnfile,[])
    const datafile=useMemo(()=>data,[])
   const tableInstance = useTable({
        columns,
        data,
    })
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance
    return(
        <table{...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column)=>(
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    
                </tr>
                ))}
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row)=>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell)=>{
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })

                            }
                           
                        </tr>
                    )
                })

                }
               
            </tbody>
        </table>
    )
}
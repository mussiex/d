

const table=[{
    description:'Product1',
    quantity:2,
    unitprice:50,
    amount:''
},
{
    description:'Product2',
    quantity:4,
    unitprice:60,
    amount:''
},
{
    description:'Product3',
    quantity:14,
    unitprice:60,
    amount:''
},
{
    description:'Product4',
    quantity:33,
    unitprice:43,
    amount:''
}
]

table.map((i)=>{
    i.amount=i.quantity*i.unitprice
    
})

export default table
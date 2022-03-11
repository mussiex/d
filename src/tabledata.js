

const table=[{
    description:'sdds',
    quantity:33,
    unitprice:43,
    amount:''
},
{
    description:'sdds',
    quantity:33,
    unitprice:43,
    amount:''
},
{
    description:'sdds',
    quantity:33,
    unitprice:43,
    amount:''
},
{
    description:'sdds',
    quantity:33,
    unitprice:43,
    amount:''
}
]
export let subtotal
table.map((i)=>{
    i.amount=i.quantity*i.unitprice
    subtotal+=i.amount
})

export default table
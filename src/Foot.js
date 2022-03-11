import data from './tabledata'
import './foot.scss'
function Foot(){
    let subtotal=0
    data.map((product)=>{
        subtotal+=product.amount
    })
    return(
        <div className='container'>
      <div className='child'>
          <h2 className='head'>Comments</h2>
          <ol>
              <li>Payments due in 30 days</li>
              <li>Please note the invoice number in your payment method</li>
          </ol>
          <p>  Banking and wire transefer information may also be included here</p>
      </div>
      <div className='child2'></div>
      <div className='child3'>
          <p>Subtotal: { subtotal}</p>
          <p>Discounts:{}</p>
          <p>Taxes:{}</p>
          <p>Total:{}</p>



    </div>
  </div>



    )
}
export default Foot;
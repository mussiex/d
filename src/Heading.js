
import logo from './images.png'
import './App.scss'
import data from'./data.js'
function Heading({companyinfo}){
   
    
                  return(
                      <div>
                          <div className='container-1'>
                  <div className='child1'>

                         <img src={logo} alt={companyinfo.name} className='logo'/>
                        <span className='cname'>{   companyinfo.name}</span>
                        <div>
                  <li>[{companyinfo.address}]</li>
                  <li>[{companyinfo.city,companyinfo.state,companyinfo.zipcode}]</li>
                  <li>[{companyinfo.phone}]</li>
                  <li>[{companyinfo.emailaddress}]</li>
                  <li>[{companyinfo.website}]</li>
                 </div>
                         
                      </div>
                      <div className='child2'>
                      <h1>Invoice</h1>
                      <p>Date:{companyinfo.date}</p>
                      <p>Invoice#:{companyinfo.invoice}</p>
                      <p>Due Date:{companyinfo.due}</p>
                  </div>
                 
                  </div>
                  </div>
                  )

           


}
export default Heading;
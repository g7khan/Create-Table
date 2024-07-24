import Product from "./product";


export default function AllProduct(){
    return(
        <table>
           
             <thead>

             <tr>
                    <th style={{border: '1px solid none', padding: '10px', }}>Sr</th>
                      
                    <th style={{border: '1px solid none', padding: '10px',}}>product</th>

                    <th style={{border: '1px solid none', padding: '10px',}}>price</th>

                    <th style={{border: '1px solid none', padding: '10px',}}>category</th>


             </tr>

             </thead>
         
             <tbody>
                   <Product />
                   <Product />
                   <Product />
                   <Product />
             </tbody>


        </table>




    )
}





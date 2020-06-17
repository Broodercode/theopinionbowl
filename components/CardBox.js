import Link from 'next/link'

const CardBox = (props) => {
    return ( 
        <div className="card border-primary mb-3" >
            
           

           
        <div className = "toast-header">
            <strong className="mr-auto">Update</strong>
            <small>
                {props.date}
                </small>
            </div>
        
         <div className = "card-body">
         <Link href={props.path}>
            <a >
             <h4 className="card-title">{props.title}</h4>
             </a>
         </Link>
             <p className="card-text">{props.content}</p>
         </div>
      
         </div>
     );
}
 
export default CardBox;
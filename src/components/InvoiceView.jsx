
// eslint-disable-next-line react/prop-types
export const InvoiceView= ({id, name}) => {
    
    return (
        <>
          <ul className="list-group">
              <li className="list-group-item">{id}</li>
              <li className="list-group-item">{name}</li>
          </ul>  
        </>
    )
}
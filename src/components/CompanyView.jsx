/* eslint-disable react/prop-types */

export const CompanyView=({titleCompany, company}) => {
    const {name, fiscalNumber} = company;
    return (
        <>
               <h3>{titleCompany}</h3>
                <ul className="list-group">
                  <li className="list-group-item active">{name}</li>
                  <li className="list-group-item">{fiscalNumber}</li>
                </ul>
             
        </>
    )
}
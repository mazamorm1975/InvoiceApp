/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export const ClientView = ({ titleClient, client, titleAddress }) => {
  const { name: nameClient, lastName, address } = client;
  const { country, city, street, number } = address;

  return (
    <>
      <h3>{titleClient}</h3>
      <ul className="list-group">
        <li className="list-group-item active">{nameClient}</li>
        <li className="list-group-item">{lastName}</li>
      </ul>
      <h3>{titleAddress}</h3>
      <ul className="list-group">
        <li className="list-group-item">
          Pais: {country} Ciudad: {city}
        </li>
        <li className="list-group-item">
          Calle: {street} Numero Exterior: {number}{" "}
        </li>
      </ul>
    </>
  );
};

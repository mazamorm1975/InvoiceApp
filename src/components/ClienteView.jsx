/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
export const ClientView = ({ titleClient, client, titleAddress }) => {
  /* La siguiente linea es una forma de desestructurar el modulo address de manera mas resumida
     quedando todo en una sola linea.
  const { name: name, lastName, address: {country, city, street, number } } = client;
  */
  const { name: name, lastName, address } = client;

  const { country, city, street, number } = address;

  return (
    <>
      <h3>{titleClient}</h3>
      <ul className="list-group">
        <li className="list-group-item active">{name}</li>
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

ClientView.propTypes = {
  titleClient: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
  titleAddress: PropTypes.string.isRequired,
};

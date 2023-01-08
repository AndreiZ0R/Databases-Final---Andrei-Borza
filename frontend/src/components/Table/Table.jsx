import Formatter from "../../models/Formatter";
import "./Table.css";

const AppTable = ({ headers, data, contentType }) => {
  //

  const createHeader = (str) => {
    return <th>{str}</th>;
  };
  const createUserRow = (user) => {
    return (
      <tr>
        <td>{user.idpers}</td>
        <td>{user.nume}</td>
        <td>{user.adresa}</td>
        <td>{user.gen}</td>
        <td>{Formatter.getFormattedDate(user.data_nasterii)}</td>
        <td>{user.email}</td>
      </tr>
    );
  };
  const createAccountsRow = (account) => {
    return (
      <tr>
        <td className="account-number">{account.nrcont}</td>
        <td>{Formatter.getFormattedBalance(account.sold)}</td>
        <td>{account.idpers}</td>
      </tr>
    );
  };
  const createCardsRow = (card) => {
    return (
      <tr>
        <td>{card.nrcard}</td>
        <td>{Formatter.getFormattedDate(card.data_de_la)}</td>
        <td>{Formatter.getFormattedDate(card.data_la)}</td>
        <td>{Formatter.getFormattedBalance(card.limita)}</td>
        <td className="account-number">{card.nrcont}</td>
        <td>{card.tip}</td>
        <td>{card.categorie}</td>
      </tr>
    );
  };
  const createMovesRow = (move) => {
    return (
      <tr>
        <td className="account-number">{move.nrcard}</td>
        <td>{Formatter.getFormattedDatetime(move.data_ora)}</td>
        <td>{Formatter.getFormattedBalance(move.valoare)}</td>
        <td>{move.scop}</td>
      </tr>
    );
  };

  const createDynamicRow = (data) => {
    return (
      <tr>
        {data.map((objData) => {
          let hasSpace = "";

          if (typeof objData == "string") {
            if (objData.includes("-")) {
              objData = Formatter.getFormattedDate(objData);
            } else if (objData.includes(".")) {
              objData = Formatter.getFormattedBalance(objData);
            }
          } else if (typeof objData == "number") {
            hasSpace = "account-number";
          }

          return <td className={hasSpace}>{objData}</td>;
        })}
      </tr>
    );
  };

  const createSimpleDynamicRow = (data) => {
    return (
      <tr>
        {data.map((obj) => (
          <td>{obj}</td>
        ))}
      </tr>
    );
  };

  const createRow = (data) => {
    switch (contentType) {
      case "user":
        return createUserRow(data);
      case "account":
        return createAccountsRow(data);
      case "card":
        return createCardsRow(data);
      case "moving":
        return createMovesRow(data);

      default:
        return createDynamicRow(data);
    }
  };

  return (
    <table>
      <thead>
        <tr>{headers.map((header, idx) => createHeader(header))}</tr>
      </thead>

      <tbody>{data.map((obj, idx) => createRow(obj))}</tbody>
    </table>
  );
};

export default AppTable;

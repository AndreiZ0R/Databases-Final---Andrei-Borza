import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import AppTable from "../components/Table/Table";
import { useEffect, useState } from "react";
import {
  getAllPersons,
  getAllAccounts,
  getAllCards,
  getAllMovings,
  getQuery,
} from "../api/RestApi";
import UserModel from "../models/UserModel";
import AccountModel from "../models/AccountModel";
import CardModel from "../models/CardModel";
import MovingModel from "../models/MovingModel";
import QueryModel from "../models/QueryModel";

const HomePage = () => {
  const [dataType, setDataType] = useState("user");
  const [searchTerm, setSearchTerm] = useState("");

  const [users, setUsers] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [cards, setCards] = useState(null);
  const [movings, setMovings] = useState(null);

  //TODO: check these, maybe make movings beautifuler (with + and -)
  const [query3A, setQuery3A] = useState(null);
  const [query3B, setQuery3B] = useState(null);

  const [query4A, setQuery4A] = useState(null);
  const [query4B, setQuery4B] = useState(null);

  const [query5A, setQuery5A] = useState(null);
  const [query5B, setQuery5B] = useState(null);

  const [query6A, setQuery6A] = useState(null);
  const [query6B, setQuery6B] = useState(null);

  const navigate = useNavigate();

  const setAndFetchUsers = () => {
    getAllPersons().then((users) => {
      const userArr = users.map(
        (user, idx) =>
          new UserModel(
            user.idpers,
            user.nume,
            user.adresa,
            user.gen,
            user.data_nasterii,
            user.email,
            user.data_curenta
          )
      );
      setUsers(userArr);
    });
  };

  const setAndFetchAccounts = () => {
    getAllAccounts().then((accounts) => {
      const accArr = accounts.map(
        (account, idx) =>
          new AccountModel(account.nrcont, account.sold, account.idpers)
      );
      setAccounts(accArr);
    });
  };

  const setAndFetchCards = () => {
    getAllCards().then((cards) => {
      const cardsArr = cards.map(
        (card, idx) =>
          new CardModel(
            card.nrcard,
            card.data_de_la,
            card.data_la,
            card.limita,
            card.nrcont,
            card.tip,
            card.categorie
          )
      );
      setCards(cardsArr);
    });
  };

  const setAndFetchMovings = () => {
    getAllMovings().then((movings) => {
      const movingsArr = movings.map(
        (moving, idx) =>
          new MovingModel(
            moving.nrcard,
            moving.data_ora,
            moving.valoare,
            moving.scop
          )
      );
      setMovings(movingsArr);
    });
  };

  const setAndFetchQueries = () => {
    getQuery("3-a").then((queries) => {
      const queryArr = queries.map((query) => {
        return Object.keys(query).map((key) => query[key]);
      });

      setQuery3A(queryArr);
    });
    getQuery("3-b").then((queries) => {
      const queryArr = queries.map((query) => {
        return Object.keys(query).map((key) => query[key]);
      });

      setQuery3B(queryArr);
    });

    getQuery("4-a").then((queries) => {
      const queryArr = queries.map((query) => {
        return Object.keys(query).map((key) => query[key]);
      });

      setQuery4A(queryArr);
    });
    getQuery("4-b").then((queries) => {
      const queryArr = queries.map((query) => {
        return Object.keys(query).map((key) => query[key]);
      });

      setQuery4B(queryArr);
    });

    getQuery("5-a").then((queries) => {
      const queryArr = queries.map((query) => {
        return Object.keys(query).map((key) => query[key]);
      });

      setQuery5A(queryArr);
    });
    getQuery("5-b").then((queries) => {
      const queryArr = queries.map((query) => {
        return Object.keys(query).map((key) => query[key]);
      });

      setQuery5B(queryArr);
    });

    getQuery("6-a").then((queries) => {
      const queryArr = queries.map((query) => {
        return Object.keys(query).map((key) => query[key]);
      });

      setQuery6A(queryArr);
    });
    getQuery("6-b").then((queries) => {
      const queryArr = queries.map((query) => {
        return Object.keys(query).map((key) => query[key]);
      });

      setQuery6B(queryArr);
    });
  };

  useEffect(() => {
    setAndFetchUsers();
    setAndFetchAccounts();
    setAndFetchCards();
    setAndFetchMovings();

    setAndFetchQueries();
  }, []);

  const getTableHeaders = () => {
    switch (dataType) {
      case "user":
        return UserModel.getTableHeaders();

      case "account":
        return AccountModel.getTableHeaders();

      case "card":
        return CardModel.getTableHeaders();

      case "moving":
        return MovingModel.getTableHeaders();

      case "3-a":
        return QueryModel.getHeaders("3-a");
      case "3-b":
        return QueryModel.getHeaders("3-b");

      case "4-a":
        return QueryModel.getHeaders("4-a");
      case "4-b":
        return QueryModel.getHeaders("4-b");

      case "5-a":
        return QueryModel.getHeaders("5-a");
      case "5-b":
        return QueryModel.getHeaders("5-b");

      case "6-a":
        return QueryModel.getHeaders("6-a");
      case "6-b":
        return QueryModel.getHeaders("6-b");

      default:
        return null;
    }
  };

  const getTableData = () => {
    switch (dataType) {
      case "user": {
        if (users === null) return [];

        return users.filter((user) => {
          if (searchTerm === "") return user;
          else if (user.nume.toLowerCase().includes(searchTerm.toLowerCase()))
            return user;
        });
      }

      case "account": {
        if (accounts === null) return [];

        return accounts.filter((account) => {
          if (searchTerm === "") return account;
          else if (account.nrcont.toString().includes(searchTerm))
            return account;
        });
      }

      case "card": {
        if (cards === null) return [];

        return cards.filter((card) => {
          if (searchTerm === "") return card;
          else if (card.nrcard.toString().includes(searchTerm)) return card;
        });
      }

      case "moving": {
        if (movings === null) return [];

        return movings.filter((moving) => {
          if (searchTerm === "") return moving;
          else if (moving.scop.toLowerCase().includes(searchTerm.toLowerCase()))
            return moving;
        });
      }

      case "3-a":
        return query3A;
      case "3-b":
        return query3B;

      case "4-a":
        return query4A;
      case "4-b":
        return query4B;

      case "5-a":
        return query5A;
      case "5-b":
        return query5B;

      case "6-a":
        return query6A;
      case "6-b":
        return query6B;

      default:
        return ["-", "-", "-", "-", "-"];
    }
  };

  const getTableFooters = () => {
    const firstWord = "Displaying: ";

    switch (dataType) {
      case "user":
        return firstWord + "users.";
      case "account":
        return firstWord + "accounts.";
      case "card":
        return firstWord + "cards.";
      case "moving":
        return firstWord + "card's movings.";

      default:
        return firstWord + QueryModel.getFooter(dataType);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="filterWrapper">
          <div className="filterBar">
            <div className="dropdown is-hoverable filterItem ">
              <div className="dropdown-trigger">
                <button
                  className="button mainBtn"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu4"
                >
                  <span className="addFont">Views</span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content background">
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("user");
                    }}
                  >
                    Users
                  </div>
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("account");
                    }}
                  >
                    Accounts
                  </div>
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("card");
                    }}
                  >
                    Cards
                  </div>
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("moving");
                    }}
                  >
                    Movings
                  </div>
                </div>
              </div>
            </div>
            <input
              className="searchBox filterItem"
              type="text"
              placeholder="Search..."
              onMo
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <div className="dropdown is-hoverable filterItem">
              <div className="dropdown-trigger">
                <button
                  className="button mainBtn"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu5"
                >
                  <span className="addFont">Queries</span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu5" role="menu">
                <div className="dropdown-content background">
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("3-a");
                    }}
                  >
                    3 - a
                  </div>
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("3-b");
                    }}
                  >
                    3 - b
                  </div>
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("4-a");
                    }}
                  >
                    4 - a
                  </div>
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("4-b");
                    }}
                  >
                    4 - b
                  </div>
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("5-a");
                    }}
                  >
                    5 - a
                  </div>
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("5-b");
                    }}
                  >
                    5 - b
                  </div>
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("6-a");
                    }}
                  >
                    6 - a
                  </div>
                  <div
                    className="dropdown-item drop-item"
                    onClick={() => {
                      setDataType("6-b");
                    }}
                  >
                    6 - b
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/add");
              }}
              className="addBtn"
            >
              Add
            </div>
          </div>
        </div>

        <div className="cardWrapper">
          <div className="carder">
            <AppTable
              headers={getTableHeaders() || []}
              data={getTableData() || []}
              contentType={dataType}
            />
            <p className="footerText">{getTableFooters()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

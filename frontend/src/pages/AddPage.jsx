import "./AddPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("user");

  useEffect(() => {}, []);

  //TODO: handle form data and make post req

  const userForm = () => {
    return (
      <form action="" style={{ width: "100%" }}>
        <div className="inputWrapper">
          <label>Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter a name"
            required
          />
        </div>

        <div className="inputWrapper">
          <label>Address</label>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter address"
          />
        </div>

        <div className="inputWrapper">
          <label className="">Gender</label>
          <select name="" id="">
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div className="inputWrapper">
          <label className="">Birthdate</label>
          <input type="date" name="" id="" required />
        </div>

        <div className="inputWrapper">
          <label>Email</label>
          <input type="text" name="" id="" required placeholder="Enter email" />
        </div>

        <div className="submitBtn" style={{ textAlign: "center" }}>
          Submit
        </div>
      </form>
    );
  };

  const accountForm = () => {
    return (
      <form action="" style={{ width: "100%" }} className="space">
        <div className="inputWrapper">
          <label>Account Number</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter an account number"
            required
          />
        </div>

        <div className="inputWrapper">
          <label>Balance</label>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter balance"
          />
        </div>

        <div className="inputWrapper">
          <label>Holder Id</label>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter Holder's Id"
          />
        </div>

        <div className="submitBtn" style={{ textAlign: "center" }}>
          Submit
        </div>
      </form>
    );
  };

  const cardForm = () => {
    return (
      <form action="" style={{ width: "100%" }} className="space">
        <div className="inputWrapper">
          <label>Card Number</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter a card number"
            required
          />
        </div>

        <div className="inputWrapper">
          <label>Activation Date</label>
          <input
            type="date"
            name=""
            id=""
            required
            placeholder="Enter balance"
          />
        </div>

        <div className="inputWrapper">
          <label>Expiration Date</label>
          <input type="date" name="" id="" required />
        </div>

        <div className="inputWrapper">
          <label>Card $ limit</label>
          <input
            type="text"
            required
            placeholder="Enter card's max amount of money"
          />
        </div>

        <div className="inputWrapper">
          <label>Account Number</label>
          <input
            type="text"
            required
            placeholder="Enter card's account number"
          />
        </div>

        <div className="inputWrapper">
          <label className="">Card Type</label>
          <select name="" id="">
            <option value="VISA">VISA</option>
            <option value="MASTERCARD">MASTERCARD</option>
          </select>
        </div>

        <div className="inputWrapper">
          <label className="">Card Category</label>
          <select name="" id="">
            <option value="CREDIT">CREDIT</option>
            <option value="DEBIT">DEBIT</option>
          </select>
        </div>

        <div className="submitBtn" style={{ textAlign: "center" }}>
          Submit
        </div>
      </form>
    );
  };

  const movingForm = () => {
    return (
      <form action="" style={{ width: "100%" }} className="space">
        <div className="inputWrapper">
          <label>Card Number</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter card's number"
            required
          />
        </div>

        <div className="inputWrapper">
          <label>Timestamp</label>
          <input type="datetime-local" name="" id="" required />
        </div>

        <div className="inputWrapper">
          <label>Amount</label>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter moving amount"
          />
        </div>

        <div className="inputWrapper">
          <label>Purpose</label>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter moving purpose"
          />
        </div>

        <div className="submitBtn" style={{ textAlign: "center" }}>
          Submit
        </div>
      </form>
    );
  };

  const getForm = () => {
    switch (type) {
      case "user":
        return userForm();

      case "account":
        return accountForm();

      case "card":
        return cardForm();

      case "moving":
        return movingForm();

      default:
        return <div>Empty!</div>;
    }
  };

  return (
    <div className="page-main">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="goBack"
      >
        Go Back
      </div>

      <div className="formCard">
        <div className="filterRow">
          <div
            onClick={() => {
              setType("user");
            }}
            className="filterBtn"
          >
            User
          </div>
          <div
            onClick={() => {
              setType("account");
            }}
            className="filterBtn"
          >
            Account
          </div>
          <div
            onClick={() => {
              setType("card");
            }}
            className="filterBtn"
          >
            Card
          </div>
          <div
            onClick={() => {
              setType("moving");
            }}
            className="filterBtn"
          >
            Moving
          </div>
        </div>

        <div className="formRow">{getForm()}</div>
      </div>
    </div>
  );
};

export default AddPage;

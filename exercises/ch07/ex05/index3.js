import React from "react";
import "./styles.css";
import { useState } from "react";

const [users, setUsers] = useState([]);

const addNewUser = () => {
  // 以下は NG (値が変更されていないと React が判断してしまう)
  users.push({ name: "new user" });
  setUsers(users);

  // 以下は OK
  setUsers([...users, { name: "new user" }]);
};

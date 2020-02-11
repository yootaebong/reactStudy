import React from "react";
import Users from "../components/Users";
import { connect } from "react-redux";
import { getUsers } from "../modules/users";
import { Preloader } from "../lib/PreloadContext";

const { useEffect } = React;

const UsersContainer = ({ users, getUsers }) => {
  //컴포넌트가 마운트 되고 나서 호출 한다.
  useEffect(() => {
    if (users) return; //이미 유저가 유효하다면 요청 진행 하지 않음.
    getUsers();
  }, [getUsers, users]);

  return (
    <>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </>
  );
};

export default connect(
  state => ({
    users: state.users.users
  }),
  {
    getUsers
  }
)(UsersContainer);

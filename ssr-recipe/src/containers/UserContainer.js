import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import { Preloader } from "../lib/PreloadContext";
import { getUser } from "../modules/users";

const UserContainer = ({ id }) => {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return; //사용자가 존재하고, id 가 일치한다면 요청 하지 않는다.
    dispatch(getUser(id));
  }, [dispatch, id, user]); //id가 바뀔 때 마다 새로 요청한다.

  //컨테이너 유효성 검사 이후 return null을 해야하는 경우에 null대신에  Preloader반환.
  //이런식으로 진행을 하게 되면 서버 사이드 렌더링을 하는 과정에서 데이터가 없을 경우 GET_USER 액션을 발생시킨다.

  if (!user) {
    return <Preloader resolve={() => dispatch(getUser(id))} />;
  }
  return <User user={user} />;
};

export default UserContainer;

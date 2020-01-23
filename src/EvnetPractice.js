import React from "react";

const EventPractice = () => {
  //   const [username, setUsername] = React.useState("");
  //   const [msg, setMsg] = React.useState("");
  //   const onChangeUsername = e => setUsername(e.target.value);
  //   const onChangeMsg = e => setMsg(e.target.value);

  //useState를 사용할 때 객체를 넣어보기
  const [form, setForm] = React.useState({
    username: "",
    msg: ""
  });
  const { username, msg } = form;
  const onChange = e => {
    const nextForm = {
      ...form, //spread 기존의 form내용을 복사 한다.
      [e.target.name]: e.target.value //원하는 내용을 덮어 씌운다.
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + msg);
    // setUsername("");
    // setMsg("");
    setForm({
      username: "",
      msg: ""
    });
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>연습</h1>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="사용자명"
        // onChange={onChangeUsername}
        onChange={onChange}
      />
      <input
        type="text"
        name="msg"
        value={msg}
        placeholder="msg"
        // onChange={onChangeMsg}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default EventPractice;

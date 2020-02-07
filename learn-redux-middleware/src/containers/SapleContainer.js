import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;
const SampleContinser = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        getUsers(1);
        getPost(1);
      } catch (e) {
        console.log(e); //error log
      }
    };
    fn();
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading.GET_POST,
    loadingUsers: loading.GET_USERS
  }),
  {
    getPost,
    getUsers
  }
)(SampleContinser);

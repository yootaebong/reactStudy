//뉴스 데이터가 들어가 있는 배열을 컴포넌트 배열로 변환하여
//렌더링 해주는 컴포넌트.
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NesItem';
import axios from 'axios';
import { newsApiKey } from '../Keys';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // async를 사용하기 위해서 함수 따로 선언
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       console.log(query);
  //       const response = await axios.get(
  //         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${newsApiKey}`,
  //       );
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);
  // -> 이후에 lib폴더의 usePromise로 따로 관리
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${newsApiKey}`,
    );
  }, [category]);

  //대기중일떄
  if (loading) {
    return <NewsListBlock>wait..</NewsListBlock>;
  }
  //아이템이 들오어지 않았을 때
  if (!response) {
    return null;
  }
  // response 값이 유효 할 떄
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

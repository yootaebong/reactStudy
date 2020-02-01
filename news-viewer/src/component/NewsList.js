//뉴스 데이터가 들어가 있는 배열을 컴포넌트 배열로 변환하여
//렌더링 해주는 컴포넌트.
import React from 'react';
import styled from 'styled-components';
import NewsItem from './NesItem';

const NEwsListBlock = styled.div`
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

const sampleArticle = {
  title: 'title',
  description: 'des',
  url: 'https://google.co.kr',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = () => {
  return (
    <NEwsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NEwsListBlock>
  );
};

export default NewsList;

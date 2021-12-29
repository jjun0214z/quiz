import * as React from 'react';
import type { NextPage } from 'next';
import useFetch from '@/hooks/useFetch';
import API from '@/assets/api/trivia';
import { useEffect, useState } from 'react';
import { IQuizItem } from '@/types/trivia';
import { Buttons } from '@/assets/styles/commons';
import styled from 'styled-components';

const Home: NextPage = () => {
  const {
    props: { fetch, res },
  } = useFetch(API.QUIZ_LIST);
  const [params, setParams] = useState({ amount: 10 });
  const [quizList, setQuizList] = useState<IQuizItem | null>(null);

  const handleClick = function () {
    fetch(params);
  };

  useEffect(() => {
    if (res) {
      const { results } = res;
      setQuizList(results);
    }
  }, [res]);

  return (
    <Contents>
      <Buttons.B.Basic type="button" onClick={handleClick}>
        퀴즈풀기
      </Buttons.B.Basic>
    </Contents>
  );
};

const Contents = styled.div`
  padding: 50px 0;
  text-align: center;
`;

export default Home;

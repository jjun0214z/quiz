import * as React from 'react';
import type { NextPage } from 'next';
import useFetch from '@/hooks/useFetch';
import API from '@/assets/api/trivia';
import { useEffect, useState } from 'react';
import { Buttons } from '@/assets/styles/commons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import actionTypes from '@/store/actions';

const Home: NextPage = () => {
  const {
    props: { fetch, res },
  } = useFetch(API.QUIZ_LIST);
  const [params, setParams] = useState({ amount: 10 });
  const dispatch = useDispatch();

  const handleClick = function () {
    fetch(params);
  };

  useEffect(() => {
    if (res) {
      const {
        status,
        data: { results },
      } = res;
      if (status === 200) {
        dispatch({
          type: actionTypes.QUIZ['SET_QUIZ'],
          payload: { results },
        });
      }
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

import type { NextPage } from 'next';
import { Intro as Layouts } from '@/assets/styles/layouts/index';
import { Title } from '@/assets/styles/commons/index';

const IntroLayout: NextPage = function ({ children }) {
  return (
    <Layouts.Wrapper>
      <Title.H1>QUIZ GAME</Title.H1>
      {children}
    </Layouts.Wrapper>
  );
};

export default IntroLayout;

import type { NextPage } from 'next';
// import Header from '@/components/layouts/modules/Header';
// import { Main as Layouts } from '@/assets/styles/layouts/index';

const DefaultLayout: NextPage = function ({ children }) {
  return <div>{children}</div>;
};

export default DefaultLayout;

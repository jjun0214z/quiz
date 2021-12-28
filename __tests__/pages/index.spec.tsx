import * as React from 'react';
import { mount, shallow } from 'enzyme';
import IndexPage from '@/pages/index';

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<IndexPage />);

    expect(app.find('p').text()).toEqual('Hello World!');
  });
});

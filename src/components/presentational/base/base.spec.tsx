import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { Base } from './base';
import { state } from 'domain/store/main';

test('Renders correctly with default data', () => {
  const tree1 = create(<Base state={state()} />).toJSON();
  expect(tree1).toMatchSnapshot();
});

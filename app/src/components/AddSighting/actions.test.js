import { defaultAction } from './actions';
import { DEFAULT_ACTION } from './constants';

describe('AddSighting actions', () => {
  it('creates a default action', () => {
    const expectedAction = {
      type: DEFAULT_ACTION,
    };
    expect(defaultAction()).to.eql(expectedAction);
  });
});


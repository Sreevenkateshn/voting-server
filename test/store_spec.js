import {Map, fromJS} from 'immuatable';
import {expect} from 'chai';

import makeStore from '..src/store';

describe('store', () => {

  it('is a redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 Days Later']
    });
    expect(store.getState()).to.equal(fromJS({
      entires: ['Trainspotting', '28 Days Later']
    }));
  });

});

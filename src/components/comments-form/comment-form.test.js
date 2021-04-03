import React from 'react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {createAPI} from '../../services/api';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {CommentForm} from './comments-form';


const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

const store = mockStore({
  USER: {
    errorMessage: null,
  },
});

describe(`Add-review form testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();
    const exampleId = 1;

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <CommentForm id={exampleId}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Post/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId(`add-review-textarea`), `Checking text-area`);
    expect(screen.getByDisplayValue(/Checking text-area/i)).toBeInTheDocument();
  });

  it(`Component submit data when submit-btn is clicked`, () => {
    const dispatch = jest.spyOn(redux, `useDispatch`);
    const history = createMemoryHistory();
    const exampleId = 1;

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <CommentForm id={exampleId} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Post/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId(`add-review-textarea`), `Checking text-area`);
    expect(screen.getByDisplayValue(/Checking text-area/i)).toBeInTheDocument();
    fireEvent.submit(screen.getByTestId(`add-review-form`));
    expect(dispatch).toBeCalled();
  });
});


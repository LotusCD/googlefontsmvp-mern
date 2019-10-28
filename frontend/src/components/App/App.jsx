import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import Landing from '../Landing/Landing';
import { RegisterPage } from "../RegisterPage/RegisterPage";
import {LoginPage} from "../LoginPage/LoginPage";
import { PrivateRoute } from '../components';
import { history } from '../../helpers';
import { alertActions } from '../../actions';

class App extends Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}

  render() {
    const { alert } = this.props;
    return (
        <div>
            <div>
                <div>
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <div>
                            <PrivateRoute exact path="/" component={Landing} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
}
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
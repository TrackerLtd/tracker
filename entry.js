import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Login from './components/login';
import ManageDatasets from './components/manage_datasets';
import TrackData from './components/track_data';

ReactDOM.render(<Router history={ browserHistory }>
					<Route path="/" component={ App }>
						<IndexRoute component={ Login } />
						<Route path="managedata" component={ ManageDatasets } />
						<Route path="track" component={ TrackData } />
					</Route>
				</Router>, document.getElementById("placeholder"));


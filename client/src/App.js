import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Landing from "./component/Landing";
import SurveyNew from "./component/SurveyNew";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div>
			<Router>
				<Route exact path="/" component={Landing}></Route>
				<Route path="/surveys/new" component={SurveyNew}></Route>
				<Route exact path="/surveys" component={Dashboard}></Route>
			</Router>
		</div>
	);
};

export default App;

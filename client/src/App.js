import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Landing from "./component/Landing";
import SurveyNew from "./component/SurveyNew";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet/main.scss";
import Header from "./component/Header";
import { fetch_user } from "./redux/slices/authSlice";
const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetch_user());
	}, [dispatch]);
	return (
		<div>
			<Header></Header>
			<Router>
				<Route exact path="/" component={Landing}></Route>
				<Route path="/surveys/new" component={SurveyNew}></Route>
				<Route exact path="/surveys" component={Dashboard}></Route>
			</Router>
		</div>
	);
};

export default App;

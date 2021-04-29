import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {
			username: "",
			googleId: "",
			email: "",
			password: "",
			isFetching: false,
			isSuccess: false,
			isError: false,
		},
	},

	reducers: {
		clearState: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.isFetching = false;

			return state;
		},
		loginRequest: (state, action) => {
			state.isFetching = true;
			state.isError = false;
		},
		loginSuccess: (state, action) => {
			state.user = action.payload;
		},
		logoutSuccess: (state) => {
			state.user = null;
		},
		loginFailure: (state) => {
			return state;
		},
		registerSuccess: (state, action) => {
			state.user = action.payload;
		},
		registerFailure: (state) => {
			return state;
		},
		googleLogin: (state, action) => {
			state.user = action.payload;
		},
		fetchUser: (state, action) => {
			state.user = action.payload;
			state.user.googleId = action.payload.data._id;
			state.user.isFetching = true;
		},
	},
});

export const {
	loginFailure,
	loginSuccess,
	logoutSuccess,
	registerFailure,
	registerSuccess,
	clearState,
	googleLogin,
	fetchUser,
} = authSlice.actions;

export default authSlice.reducer;

export const userSelector = (state) => state.user;

export const login = (username, password) => async (dispatch) => {
	try {
	} catch (error) {}
};
export const register = (username, password, email) => async (dispatch) => {
	try {
	} catch (error) {}
};
export const googlelogin = () => async (dispatch) => {
	try {
		let res = await axios.get("/users/auth/google");
		if (res) {
			console.log(res.data);
			dispatch(loginSuccess);
		} else {
			dispatch(loginFailure);
		}
	} catch (error) {}
};

export const fetch_user = () => async (dispatch) => {
	try {
		let res = await axios.get("/users/api/current_user");
		if (res) {
			console.log(res);
			dispatch(fetchUser(res.data._id));
		} else {
			dispatch(loginFailure);
			console.log("failed");
		}
	} catch (error) {
		console.log("error");
	}
};

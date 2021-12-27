import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSlice,
  current,
} from "@reduxjs/toolkit";
import { profileTypes } from "../constants/actionTypes";

const initialState = {
  profile: {
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    profileImage:
      "https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg",
  },
  //loggedIn: false,
  formSubmitted: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateProfileImage: (state, action) => {
      state.profile.profileImage = action.payload;
    },
    login: (state, action) => {
      //console.log("before", current(state));
      state.profile.age = 69;
      //console.log("after", current(state));
    },
    logout: (state, action) => {
      state = initialState;
    },
    signup: {
      reducer: (state, action) => {
        state.profile = action.payload.profile;
      },
      prepare: (userEmail) => ({
        payload: {
          profile: {
            firstName: "",
            lastName: "",
            age: 0,
            email: userEmail,
            profileImage: "",
          },
        },
      }),
    },
  },
  /*extraReducers: (builder) => {
    builder
      .addCase(incrementBy, (state, action) => {
        // action is inferred correctly here if using TS
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(decrement, (state, action) => {})
      // You can match a range of action types
      .addMatcher(
        isRejectedAction,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {}
      )
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  },
  },*/
});

export const { updateProfile, updateProfileImage, login, logout, signup } =
  profileSlice.actions;
export default profileSlice.reducer;

/*
const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

const addTodo = createAction(
  "todos/add",
  (text) =>
    (payload = {
      text,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    })
);

const addTodos = createAction("todos/add", function prepare(userEmail) {
  return {
    payload: {
      profile: {
        firstName: "",
        lastName: "",
        age: 0,
        email: userEmail,
        profileImage: "",
      },
    },
  };
});

const updateProfile = createAction(profileTypes.UPDATE_PROFILE);
const updateProfileImage = createAction(profileTypes.UPDATE_PROFILE_IMAGE);
const login = createAction(profileTypes.LOGIN);
const logout = createAction(profileTypes.LOGOUT);
const signup = createAction(profileTypes.SIGNUP, function prepare(userEmail) {
  return {
    payload: {
      profile: {
        firstName: "",
        lastName: "",
        age: 0,
        email: userEmail,
        profileImage: "",
      },
    },
  };
});

export default profileActions = {
  updateProfile,
  updateProfileImage,
  login,
  logout,
  signup,
};
*/
/*
export const profileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateProfile, (state, action) => {
      state.profile = action.payload;
    })
    .addCase(updateProfileImage, (state, action) => {
      state.profile.profileImage = action.payload;
    })
    .addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    }) fetch the users' data from database
    .addCase(login, (state, action) => {
      console.log("before", current(state));
      state.profile.age = 69;
      console.log("after", current(state));
    })
    .addCase(logout, (state, action) => {
      state = initialState;
    })
    .addCase(signup, (state, action) => {
      state.profile = action.payload;
    });
});
*/

// Selectors (getter)
export const selectProfile = (state) => state.profile;
// probably don't need these since we can just get profile
/*export const selectFirstName = (state) => state.profile.firstName;
export const selectLastName = (state) => state.profile.lastName;
export const selectEmail = (state) => state.profile.email;
export const selectProfileImage = (state) => state.profile.profileImage;
export const selectFormSubmitted = (state) => state.formSubmitted;*/

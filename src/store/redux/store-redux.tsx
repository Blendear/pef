import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
// import { AppDataOfCurrentUser, GlobalReduxContextsType } from "@/types";
import { hardcodedAppDataOfCurrentUser } from "@/data/hardcodedAppDataOfCurrentUser";

// Why context and appDataOfCurrentUser separately? Because contexts are for countering prop drilling only,
// and appDataOfCurrentUser is for reading/editing data of the current user
//
// One big data tree structure for stroing all the data of the current user
const appDataOfCurrentUser =
  // : AppDataOfCurrentUser
  hardcodedAppDataOfCurrentUser;

// Why not useContext? Because useContext forces children to rerender in some cases
// (when there's a non-useRef value, like useState, for example) so it's not an
// actual substitute for a state management tool like Redux. That's cleaner, actually
const contexts =
  // :
  // GlobalReduxContextsType
  {
    // ChildA: { keyNameA: "valueA" },
    // ChildB: { keyNameA: "valueB" },
  };

// For forcing rerenders of components. It's esepcially usefull when ChildA should force a rerender of ChildB, without rerendering the whole Parent
const forceRerender = {
  // ChildA: false,
  // ChildB: false,
  FeatureRanges: false,
  UserStoryAndBuildingBlocks: false,
};

const appDataOfCurrentUserSlice = createSlice({
  name: "appDataOfCurrentUserSlice",
  initialState: appDataOfCurrentUser,
  reducers: {
    setAppDataOfCurrentUser(state, action: PayloadAction<any>) {
      // NEVER directly write "state = ...", you must add a subproperty to the state object, like "state.fighters = ..."

      state.fighters = action.payload.eventsWithNeeds;
    },
  },
});

const contextsSlice = createSlice({
  name: "contextsSlice",
  initialState: contexts,
  reducers: {
    setContextKeyValue(
      state,
      action: PayloadAction<{
        contextName: string;
        keyName: string;
        newValue: any;
      }>
    ) {
      state[action.payload.contextName][action.payload.keyName] =
        action.payload.newValue;
    },
  },
});

const forceRerenderSlice = createSlice({
  name: "forceRerenderSlice",
  initialState: forceRerender,
  reducers: {
    forceRerender(state, action: PayloadAction<string>) {
      state[action.payload] = !state[action.payload];
    },
  },
});

const store = configureStore({
  reducer: {
    appDataOfCurrentUserReducer: appDataOfCurrentUserSlice.reducer,

    forceRerenderReducer: forceRerenderSlice.reducer,

    contextsReducer: contextsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const appDataOfCurrentUserSliceActions =
  appDataOfCurrentUserSlice.actions;
export const contextsSliceActions = contextsSlice.actions;
export const forceRerenderSliceActions = forceRerenderSlice.actions;

export default store;

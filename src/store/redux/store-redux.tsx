import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
// import { AppDataOfCurrentUser } from "@/types";
import { temporarilyHardcodedAppDataOfCurrentUser } from "@/data/temporarilyHardcodedAppDataOfCurrentUser";
import { appDataUniversalForAllUsers } from "@/data/appDataUniversalForAllUsers";

// Why not useContext? Because useContext forces children to rerender in some cases
// (when there's a non-useRef value, like useState, for example) so it's not an
// actual substitute for a state management tool like Redux. That's cleaner, actually
const contexts = {
  Global: {
    // For example "languageChosen", "mealIndexMArkedAsFavouriteForDinner" since it's used by every user
    appDataUniversalForAllUsers: appDataUniversalForAllUsers,
    // For example "myListOfMeals", which would be data that only this users have (created by a deciated dietetitna for example)
    // Static, non-user based webapps won't have it
    // DB based in the original app, but hardcoded at the beginning
    appDataOfCurrentUser: temporarilyHardcodedAppDataOfCurrentUser,
  },
  // ChildA: { keyNameA: "valueA" },
  // ChildB: { keyNameA: "valueB" },
};

// For forcing rerenders of components. It's esepcially usefull when ChildA should force a rerender of ChildB, without rerendering the whole Parent
const forceRerender = {
  // ChildA: false,
  // ChildB: false,
};

const contextsSlice = createSlice({
  name: "contextsSlice",
  initialState: contexts,
  reducers: {
    setContextKeyValue(
      state,
      action: PayloadAction<{
        contextName: string;
        keyNames: string[];
        newValue: any;
      }>
    ) {
      // One day: Remake it so that only "keynames" are passed alongaside "newValue",
      // main "contextName" can be derived from the keyNames
      const { contextName, keyNames, newValue } = action.payload;

      // Ensure the contextName exists
      if (!state[contextName]) {
        state[contextName] = {};
      }

      // Reference to the current level of the state
      let currentLevel = state[contextName];

      // Traverse the state to reach the deepest key
      for (let i = 0; i < keyNames.length; i++) {
        const key = keyNames[i];

        // Keep adding the keys to each other to create a path,
        // until the last key is reached
        if (i === keyNames.length - 1) {
          currentLevel[key] = newValue;
        } else {
          // One day: Uncomment this once we decide to create nested objects if they do not exist
          //
          // Create nested objects if they do not exist
          // if (!currentLevel[key]) {
          //   currentLevel[key] = {};
          // }

          // Move one level deeper in the state
          currentLevel = currentLevel[key];
        }
      }
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
    forceRerenderReducer: forceRerenderSlice.reducer,

    contextsReducer: contextsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const contextsSliceActions = contextsSlice.actions;
export const forceRerenderSliceActions = forceRerenderSlice.actions;

export default store;

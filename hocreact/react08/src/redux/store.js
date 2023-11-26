//Tạo store
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";
import { postReducer } from "./reducers/postReducer";
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  posts: postReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

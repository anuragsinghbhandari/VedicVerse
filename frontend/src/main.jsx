import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import store from "./App/store.js";
import Layout from "./Layout.jsx";

import {
  Login,
  Meta,
  Home,
  PrivateRoute,
  BookContainer,
  SelectBook,
  Translate,
  Translate2,
  VedBooks,
  PDFViewer,
  // ThreeCanvas,
  Intro,
  Sparks,
  QuizPage,
} from "./components/index.js";
import { Provider } from "react-redux";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route
            path=""
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="book"
            element={
              <PrivateRoute>
                <BookContainer />
              </PrivateRoute>
            }
          />
          <Route
            path="quiz"
            element={
              <>
                <QuizPage />
              </>
            }
          />
          <Route
            path="intro"
            element={
              <PrivateRoute>
                <Intro />
              </PrivateRoute>
            }
          />
          <Route
            path="vedbooks"
            element={
              <PrivateRoute>
                <VedBooks />
              </PrivateRoute>
            }
          />
          <Route
            path="animated-stories"
            element={
              <PrivateRoute>
                <Sparks />
              </PrivateRoute>
            }
          />
          <Route
            path="bookstype"
            element={
              <PrivateRoute>
                <SelectBook />
              </PrivateRoute>
            }
          />
          <Route
            path="uploadBook"
            element={
              <PrivateRoute>
                <PDFViewer />
              </PrivateRoute>
            }
          />

          <Route
            path="meta"
            element={
              <PrivateRoute>
                <Meta />
              </PrivateRoute>
            }
          />
          <Route
            path="translate"
            element={
              <PrivateRoute>
                <Translate2 />
              </PrivateRoute>
            }
          />
          <Route
            path="translate2"
            element={
              <PrivateRoute>
                <Translate />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="story"
            element={
              <PrivateRoute>
                <ThreeCanvas />
              </PrivateRoute>
            }
          /> */}
        </Route>
      </>
    )
  );

  return (
      <RouterProvider router={router} />
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  </StrictMode>
);

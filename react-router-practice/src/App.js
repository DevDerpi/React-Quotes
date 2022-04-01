import React, { Suspense } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const NewQuote = React.lazy(() => import("./Pages/NewQuotePage"));
const Quotes = React.lazy(() => import("./Pages/QuotesPage"));
const NotFound = React.lazy(() => import("./Pages/NotFoundPage"));
const FullScreenQuote = React.lazy(() => import("./Pages/FullScreenQuotePage"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div classname="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="/quotes/:quoteID/*" element={<FullScreenQuote />}>
            <Route
              path={``}
              exact
              element={
                <div className="centered">
                  <Link className="btn--flat" to={`comments`}>
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;

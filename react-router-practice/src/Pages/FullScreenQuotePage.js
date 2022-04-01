import { Fragment, useEffect } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

import { useParams, Outlet } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const FullScreenQuote = () => {
  const params = useParams();
  const { quoteID } = params;
  const {
    sendRequest,
    status,
    data: LoadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!LoadedQuote.text) {
    return <p>No Quote Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote author={LoadedQuote.author} text={LoadedQuote.text} />
      <Outlet />
    </Fragment>
  );
};
export default FullScreenQuote;

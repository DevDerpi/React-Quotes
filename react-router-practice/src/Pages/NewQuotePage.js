import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
const NewQuote = () => {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes", { replace: true });
    }
  }, [status, navigate]);
  const addNewQuoteHandler = (quote) => {
    sendRequest(quote);
  };
  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={addNewQuoteHandler}
    />
  );
  // return <h2>New Quote Form</h2>;
};
export default NewQuote;

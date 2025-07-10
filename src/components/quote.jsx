import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);

  const fetchQuote = () => {
    fetch('http://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => {
        setQuote({
          text: data.content,
          author: data.author,
        });
      })
      .catch(() => {
        setQuote({
          text: 'Unable to load quote at the moment.',
          author: 'System',
        });
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="different-section d-flex align-items-center justify-content-center mb-5">
      <div className="quote-card mb-5 mt-3 mx-3">
        <div className="quote-symbol">❝</div>
        <h2 className="quote-heading">Quote of the Day</h2>
        {quote ? (
          <blockquote className="quote-content">
            <p>{quote.text}</p>
            <footer>— {quote.author}</footer>
          </blockquote>
        ) : (
          <p className="quote-loading">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Quote;

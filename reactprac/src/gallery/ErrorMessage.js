import React from 'react';
import { Alert, Button } from 'react-bootstrap';

const ErrorMessage = ({ errorType, onBackToHome }) => {
  const renderMessage = () => {
    if (errorType === 'noResults') {
      return 'No results found. Please try another search.';
    } else if (errorType === 'serverError') {
      return 'Server not found.';
    }
  };

  return (
    <Alert variant="danger">
      <p>{renderMessage()}</p>
      {errorType === 'serverError' && (
        <Button variant="secondary" onClick={onBackToHome}>
          Back to Home
        </Button>
      )}
    </Alert>
  );
};

export default ErrorMessage;


import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Notification({ message, show }) {
  if (!show) return null;

  return (
    <div className="notification-card">
      <Card style={{ height: '100%', padding: '10px' }}>
        <Card.Body className="d-flex align-items-center  ">
          <FontAwesomeIcon icon={faCircleCheck}  style={{color: "#63E6BE",}} size="2xl" className="me-4" />
          <Card.Text className="mb-0">{message}</Card.Text>
         
        </Card.Body>
      </Card>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Notification;

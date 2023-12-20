import React, { useState } from 'react';
import '../style/User.css';

function User() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patient_name: '',
    patient_email: '',
    patient_phone_number: '',
    patient_blood_type: '',
    patient_health_information: ''
  });

  return <div></div>;
}

export default User;

import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import useBlockBack from '../hook/useBlockBack';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Stage3 = () => {
  const navigate = useNavigate();

  const {
    formData,
    setFormData,
    completedStages,
    setCompletedStages,
    theme,
  } = useOutletContext();

  useBlockBack();

  useEffect(() => {
    if (!completedStages.stage2) {
      navigate('/register/stage-2', { replace: true });
    }
  }, [completedStages.stage2, navigate]);

  const isValidEmail = (value) => EMAIL_REGEX.test(value);

  const isFormValid =
    isValidEmail(formData.email) && formData.agreement;

  const handleEmailChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleAgreementChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      agreement: e.target.checked,
    }));
  };

  const handleSubmit = () => {
  if (!isFormValid) return;

  setFormData((prev) => ({
    ...prev,
    submitted: true, 
  }));

  setCompletedStages((prev) => ({ ...prev, stage3: true }));

  navigate('/register/success');
};


  return (
    <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Stage 3 / 3: Additional Information
      </h2>

      <input
        type="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleEmailChange}
        className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
      />

      <label className="flex items-center mb-4 text-gray-700">
        <input
          type="checkbox"
          checked={formData.agreement || false}
          onChange={handleAgreementChange}
          className="mr-2"
        />
        I agree to the terms
      </label>

      <button
        disabled={!isFormValid}
        onClick={handleSubmit}
        className={`w-full ${theme.class} text-white py-2 rounded-md disabled:opacity-50 transition-colors duration-300`}
      >
        Submit
      </button>
    </div>
  );
};

export default Stage3;

import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import useBlockBack from '../hook/useBlockBack';

const Success = () => {
  const navigate = useNavigate();
  const { formData } = useOutletContext();

  const [seconds, setSeconds] = useState(5);

  useBlockBack();

  useEffect(() => {
    if (seconds === 0) {
      navigate('/register/welcome', {
        replace: true,
        state: { role: formData.role },
      });
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, navigate, formData.role]);

  return (
    <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Registration Successful!
      </h2>

      <p className="text-gray-600 text-center mb-6">
        Here are your submitted details
      </p>

      <div className="space-y-2 text-gray-700">
        {formData.role && (
          <p><strong>Role:</strong> {formData.role}</p>
        )}

        {formData.school && (
          <p><strong>School:</strong> {formData.school}</p>
        )}

        {formData.grade && (
          <p><strong>Grade:</strong> {formData.grade}</p>
        )}

        {formData.subject && (
          <p><strong>Subject:</strong> {formData.subject}</p>
        )}

        {formData.experience !== '' &&
          formData.experience !== undefined && (
            <p>
              <strong>Experience:</strong> {formData.experience} years
            </p>
        )}

        {formData.department && (
          <p><strong>Department:</strong> {formData.department}</p>
        )}

        {formData.research && (
          <p><strong>Research:</strong> {formData.research}</p>
        )}

        {formData.email && (
          <p><strong>Email:</strong> {formData.email}</p>
        )}
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        Redirecting in {seconds} second{seconds !== 1 && 's'}…
      </p>
    </div>
  );
};

export default Success;

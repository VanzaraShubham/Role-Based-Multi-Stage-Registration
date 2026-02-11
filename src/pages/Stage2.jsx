import { useEffect, useRef } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import useBlockBack from '../hook/useBlockBack';


const Stage2 = () => {
  const navigate = useNavigate();
  const firstRef = useRef();

  const {
    role,
    completedStages,
    setCompletedStages,
    formData,
    setFormData,
    theme,
  } = useOutletContext();

  useEffect(() => {
    if (!completedStages.stage1) {
      navigate('/register', { replace: true });
    }
  }, [completedStages.stage1, navigate]);

  useBlockBack();
  
  const validateForm = (data) => {
    switch (role) {
      case 'Student':
        return Boolean(data.school?.trim() && data.grade?.toString().trim());
      case 'Teacher':
        return Boolean(
          data.subject?.trim() &&
            data.experience !== '' &&
            Number(data.experience) >= 0
        );
      case 'Professor':
        return Boolean(data.department?.trim() && data.research?.trim());
      default:
        return false;
    }
  };

  const handleChange = (e) => {
    const updatedData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(updatedData);
  };

  const handleSubmit = () => {
    if (!validateForm(formData)) {
      firstRef.current?.focus();
      return;
    }

    setCompletedStages((prev) => ({ ...prev, stage2: true }));
    navigate('/register/stage-3');
  };

  const inputClass =
    'w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500';

  const renderForm = () => {
    switch (role) {
      case 'Student':
        return (
          <>
            <input
              ref={firstRef}
              name="school"
              placeholder="School Name"
              value={formData.school || ''}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="number"
              name="grade"
              placeholder="Grade"
              value={formData.grade || ''}
              onChange={handleChange}
              className={inputClass}
            />
          </>
        );

      case 'Teacher':
        return (
          <>
            <input
              ref={firstRef}
              name="subject"
              placeholder="Subject"
              value={formData.subject || ''}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="number"
              name="experience"
              placeholder="Years of Experience"
              value={formData.experience || ''}
              onChange={handleChange}
              className={inputClass}
            />
          </>
        );

      case 'Professor':
        return (
          <>
            <input
              ref={firstRef}
              name="department"
              placeholder="Department"
              value={formData.department || ''}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="research"
              placeholder="Research Area"
              value={formData.research || ''}
              onChange={handleChange}
              className={inputClass}
            />
          </>
        );

      default:
        return (
          <p className="text-red-500 text-sm mb-4">
            No role selected. Please go back to Stage 1.
          </p>
        );
    }
  };

  return (
    <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Stage 2 / 3: Role-Specific Details ({role})
      </h2>

      {renderForm()}

      <button
        onClick={handleSubmit}
        className={`w-full ${theme.class} text-white py-2 rounded-md transition-colors duration-300`}
      >
        Next
      </button>
    </div>
  );
};

export default Stage2;
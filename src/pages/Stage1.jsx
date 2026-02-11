import { useNavigate, useOutletContext } from 'react-router-dom';
import { useRef } from 'react';
import useBlockBack from '../hook/useBlockBack';

const ROLES = ['Student', 'Teacher', 'Professor'];

const Stage1 = () => {
  const navigate = useNavigate();
  const roleRef = useRef();
  useBlockBack();

  const {
    role,
    setRole,
    setCompletedStages,
    setFormData,
    theme,
  } = useOutletContext();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;

    setRole(selectedRole);

    setFormData((prev) => ({
      ...prev,
      role: selectedRole,
    }));
  };

  const handleSubmit = () => {
    if (!role) {
      roleRef.current?.focus();
      return;
    }

    setFormData((prev) => ({
      ...prev,
      role,
      school: '',
      grade: '',
      subject: '',
      experience: '',
      department: '',
      research: '',
    }));

    setCompletedStages((prev) => ({ ...prev, stage1: true }));
    navigate('/register/stage-2');
  };

  return (
    <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Stage 1 / 3: Role Selection
      </h2>

      <select
        ref={roleRef}
        value={role}
        onChange={handleRoleChange}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Role</option>
        {ROLES.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <button
        onClick={handleSubmit}
        className={`w-full ${theme.class} text-white py-2 rounded-md transition-colors duration-300`}
      >
        Next
      </button>
    </div>
  );
};

export default Stage1;

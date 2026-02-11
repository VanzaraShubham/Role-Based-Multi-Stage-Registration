import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { getThemeByProgress } from '../theme';
import { useMemo } from 'react';


const DashboardLayout = () => {
  const [role, setRole] = useState('');
  const [completedStages, setCompletedStages] = useState({
    stage1: false,
    stage2: false,
    stage3: false,
  });

  const [formData, setFormData] = useState({
    role: '',
    school: '',
    grade: '',
    subject: '',
    experience: '',
    department: '',
    research: '',
    email: '',
    agreement: false,
    submitted: false
  });

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const progress = useMemo(() => {
  const roleSelected = !!formData.role;

  const roleFieldsMap = {
    Student: ['school', 'grade'],
    Teacher: ['subject', 'experience'],
    Professor: ['department', 'research'],
  };

  const stage2Fields = roleFieldsMap[formData.role] || [];

  if (!roleSelected) return 0;

  let baseProgress = 33;

  const filledStage2 = stage2Fields.filter((field) => {
    const value = formData[field];
    return value !== '' && value !== null && value !== undefined;
  }).length;

  const stage2Progress =
    stage2Fields.length > 0
      ? (filledStage2 / stage2Fields.length) * 33
      : 0;

  let totalProgress = baseProgress + stage2Progress;

  const emailValid = EMAIL_REGEX.test(formData.email);

  if (emailValid) {
    totalProgress += 16; 
  }

  if (formData.agreement) {
    totalProgress += 17; 
  }

  if (totalProgress >= 100 && !formData.submitted) {
    return 99;
  }

  if (formData.submitted) {
    return 100;
  }

  return Math.round(totalProgress);
}, [formData]);

  const location = useLocation();
  const navigate = useNavigate();

  const { stage1, stage2, stage3 } = completedStages;

  useEffect(() => {
  const path = location.pathname;

  const shouldRedirect =
    (path.includes('stage-2') && !stage1) ||
    (path.includes('stage-3') && !stage2) ||
    (path.includes('success') && !stage3) ||
    (path.includes('welcome') && !stage3)

  if (!shouldRedirect) return;

  // eslint-disable-next-line react-hooks/set-state-in-effect
  setRole('');
  setCompletedStages({
    stage1: false,
    stage2: false,
    stage3: false,
  });
  setFormData({
    role: '',
    school: '',
    grade: '',
    subject: '',
    experience: '',
    department: '',
    research: '',
    email: '',
  });

  navigate('/register', { replace: true });

}, [location.pathname, stage1, stage2, stage3, navigate]);

  const theme = getThemeByProgress(progress);

  return (
    <>
      <header className="w-full bg-white shadow-md px-8 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Registration App</h1>
      </header>

      <div className="flex justify-center mt-4">
        <div className="w-full max-w-xl px-4">
          <ProgressBar progress={progress} color={theme.color} />

          <main>
            <Outlet
              context={{
                role,
                setRole,
                progress,
                // setProgress,
                completedStages,
                setCompletedStages,
                formData,
                setFormData,
                theme,
              }}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
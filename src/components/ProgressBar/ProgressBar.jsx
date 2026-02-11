const ProgressBar = ({ progress, color }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      
      <div className="flex justify-end mb-1">
        <span className="text-sm font-semibold text-gray-600">
          {progress}%
        </span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-in-out"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

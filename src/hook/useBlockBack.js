import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useBlockBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const preventBack = () => {
      window.history.go(1);
    };

    window.history.pushState(null, "", window.location.href);

    window.addEventListener("popstate", preventBack);

    return () => {
      window.removeEventListener("popstate", preventBack);
    };
  }, [navigate]);

  return null;
};

export default useBlockBack;

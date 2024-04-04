import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    let token = localStorage.getItem("token");
    setToken(token);
  }, []);

  if (!token) {
    return navigate("/welcome");
  }
  return children;
};

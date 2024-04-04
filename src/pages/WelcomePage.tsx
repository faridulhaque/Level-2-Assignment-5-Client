import LoginForm from "../components/welcome/LoginForm";
import RegisterForm from "../components/welcome/RegisterForm";
import { useState } from "react";

const WelcomePage = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        {showLogin ? (
          <LoginForm
            showLogin={showLogin}
            setShowLogin={setShowLogin}
          ></LoginForm>
        ) : (
          <RegisterForm
            showLogin={showLogin}
            setShowLogin={setShowLogin}
          ></RegisterForm>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;

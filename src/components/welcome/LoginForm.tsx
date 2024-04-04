import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/otherApi/authApi";
import { TWelcome, TWelcomeForm } from "../../types/welcomeTypes";
import { toast } from "react-toastify";

const LoginForm = ({ showLogin, setShowLogin }: TWelcome) => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value as string;
    const password = e.target.password.value as string;

    const data: TWelcomeForm = {
      email,
      password,
    };

    const result: any = await login(data);
    if (result?.data?.success) {
      const user = JSON.stringify(result?.data?.data?.user);
      const token = result?.data?.data?.token;



      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", user);
  

        toast.success(result?.data?.message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-body">
      <h2 className="card-title text-4xl my-5">Login here</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          required
          name="email"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          required
          name="password"
        />
        <label className="label">
          <small className="label-text-alt ">
            Don't have an account?{" "}
            <span
              onClick={() => setShowLogin(!showLogin)}
              className="link link-hover pointer"
            >
              Register now
            </span>
          </small>
        </label>
      </div>
      <div className="form-control mt-6">
        <button disabled={isLoading} className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

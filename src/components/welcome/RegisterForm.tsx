import { toast } from "react-toastify";
import { useRegisterMutation } from "../../services/otherApi/authApi";
import { TWelcome, TWelcomeForm } from "../../types/welcomeTypes";

const RegisterForm = ({ showLogin, setShowLogin }: TWelcome) => {
  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value as string;
    const password = e.target.password.value as string;

    if (password.length < 8) {
      return toast.error("Password must be at least 8 characters");
    }

    const data: TWelcomeForm = {
      email,
      password,
    };

    const result: any = await register(data);
    console.log(result)
    if (result?.data?.success) {
      toast.success(result?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-body">
      <h2 className="card-title text-4xl my-5">Register now</h2>
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
            Already registered?{" "}
            <span
              onClick={() => setShowLogin(!showLogin)}
              className="link link-hover pointer"
            >
              Login here
            </span>
          </small>
        </label>
      </div>
      <div className="form-control mt-6">
        <button disabled={isLoading} className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;

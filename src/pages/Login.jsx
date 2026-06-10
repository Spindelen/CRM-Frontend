import { useState } from "react";
import { Eye, EyeOff, Building2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(form.email);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <div className="text-center mb-8">
          <Building2
            size={42}
            className="mx-auto text-blue-600"
          />

          <h1 className="text-3xl font-bold mt-4">
            CRM Platform
          </h1>

          <p className="text-gray-500">
            Sign in to your account
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              className="w-full border rounded-lg p-3"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-4"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6">
          No account?{" "}
          <Link
            className="text-blue-600"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
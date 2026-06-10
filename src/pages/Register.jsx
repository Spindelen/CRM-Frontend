import { useState } from "react";
import { Building2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <div className="text-center mb-8">
          <Building2
            size={42}
            className="mx-auto text-blue-600"
          />

          <h1 className="text-3xl font-bold">
            Create Account
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />


          <input
            placeholder="Role"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                role: e.target.value,
              })
            }
          />

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-6">
          Already registered?{" "}
          <Link
            to="/login"
            className="text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
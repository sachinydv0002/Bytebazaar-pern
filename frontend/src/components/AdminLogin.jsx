import { useState } from "react";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

function AdminLogin() {
  const { isAdmin, loading, login, logout } = useAuthStore();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  if (isAdmin) {
    return (
      <button className="btn btn-ghost btn-sm" onClick={logout}>
        <LogOutIcon className="size-4" />
        Logout
      </button>
    );
  }

  return (
    <dialog id="admin_login_modal" className="modal">
      <div className="modal-box max-h-[calc(100vh-2rem)] w-[calc(100%-1rem)] max-w-md p-5 sm:w-11/12 sm:p-6">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" aria-label="Close admin login">X</button>
        </form>
        <h3 className="font-bold text-xl mb-6">Admin Login</h3>
        <form
          className="space-y-4"
          onSubmit={async (event) => {
            event.preventDefault();
            if (await login(credentials)) document.getElementById("admin_login_modal").close();
          }}
        >
          <input
            className="input input-bordered min-h-12 w-full text-base"
            placeholder="Username"
            autoComplete="username"
            value={credentials.username}
            onChange={(event) => setCredentials({ ...credentials, username: event.target.value })}
          />
          <input
            className="input input-bordered min-h-12 w-full text-base"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={credentials.password}
            onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
          />
          <button className="btn btn-primary w-full" disabled={loading}>
            {loading ? <span className="loading loading-spinner loading-sm" /> : <><LogInIcon className="size-4" />Sign in</>}
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop"><button>close</button></form>
    </dialog>
  );
}

export default AdminLogin;

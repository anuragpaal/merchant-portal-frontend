import { useAppDispatch } from "../../../shared/hooks/useAppDispatch";
import { logoutRequest } from "../../auth/store/authSlice";

const DashboardPage = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="p-6">
      <h1>Dashboard</h1>

      <button
        onClick={() =>
          dispatch(logoutRequest())
        }
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
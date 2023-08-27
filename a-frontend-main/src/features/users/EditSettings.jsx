import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import useTitle from "../../hooks/useTitle";
import EditSettingsForm from "./EditSettingsForm";
import { getUser } from "./usersSlice";

const EditSettings = () => {
  // Custom hook to set the page title
  useTitle("A: Edit Settings");

  const { isLoading } = useSelector(state => state.users);

  const dispatch = useDispatch();
  // Get user id parameter out of the URL
  const { id } = useParams();
  const { selectedUser } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  if (isLoading || !selectedUser) return <LoadingScreen />;

  // Content to be rendered
  const content = <EditSettingsForm user={selectedUser} />;

  return content;
};

export default EditSettings;

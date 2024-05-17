import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastProps = {
  theme: "colored",
  hideProgressBar: true,
  closeOnClick: true,
  autoClose: 1500,
};

const getMiAmigoDataOfUser = async (userName, setLoadingState) => {
  try {
    const response = await fetch(
      `/api/global-data-manager?userName=${userName}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    if (data.status !== 200) {
      throw data;
    } else {
      setLoadingState("finished");
      return data;
    }
  } catch (err) {
    console.error(err);
    toast.error(`${err.name} | ${err.message}`, toastProps);
  }
};

export default getMiAmigoDataOfUser;

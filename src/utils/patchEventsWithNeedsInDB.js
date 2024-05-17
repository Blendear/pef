import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastProps = {
  theme: "colored",
  hideProgressBar: true,
  closeOnClick: true,
  autoClose: 1500,
};

const patchEventsWithNeedsInDB = async (userName, newData) => {
  try {
    const response = await fetch(
      `/api/global-data-manager/update-events-with-needs-in-DB?userName=${userName}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );

    const data = await response.json();

    if (data.status !== 200) {
      throw data;
    } else {
      toast.success(data.message, toastProps);
      return data;
    }
  } catch (err) {
    console.error(err);
    toast.error(`${err.name} | ${err.message}`, toastProps);
  }
};

export default patchEventsWithNeedsInDB;

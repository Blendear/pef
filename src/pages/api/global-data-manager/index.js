import { db } from "@/features/FirebaseDB/authentication/lib/init-firebase";
import { getDoc, doc } from "firebase/firestore";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const userName = req.query.userName;
    const getADocument = async () => {
      const docRef = doc(db, "Mi Amigo", userName);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log(`No such document for user '${userName}'!`);
      }
      res.status(200).json({
        status: 200,
        data: docSnap.data(),
        coll: userName,
        testMessage: "Success, response is allright!",
      });
    };
    getADocument();
  } else {
    res.status(400).json({
      type: "incorrect-type-of-request",
      name: "Incorrect type of request",
      status: 400,
      message:
        "The request should be a GET request. The user's request was of a different type.",
      instance: "/global-data-manager",
    });
  }
};

export default handler;

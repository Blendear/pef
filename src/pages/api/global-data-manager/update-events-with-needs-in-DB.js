import { db } from "@/features/FirebaseDB/authentication/lib/init-firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const handler = async (req, res) => {
  if (req.method === "PATCH") {
    const userName = req.query.userName;
    const newData = req.body; // Assuming the new data is sent in the request body

    try {
      // Get a reference to the document
      const docRef = doc(db, "Mi Amigo", userName);

      // Retrieve the current state of the document
      const docSnap = await getDoc(docRef);

      // Check if the document exists
      if (!docSnap.exists()) {
        return res.status(404).json({
          status: 404,
          message: `Document not found for user '${userName}'`,
        });
      }

      // Extract the current data from the document
      const currentData = docSnap.data();

      // Update only the specified nested property "eventsWithNeeds.arrayOfEvents"
      const updatedData = {
        ...currentData,
        eventsWithNeeds: {
          ...currentData.eventsWithNeeds,
          chestWithAllDayLongEvents: [
            ...currentData.eventsWithNeeds.chestWithAllDayLongEvents,
            newData,
          ],
        },
      };

      // Update the document with the new data
      await updateDoc(docRef, updatedData);

      // Send success response
      res.status(200).json({
        status: 200,
        message:
          "Property 'eventsWithNeeds.arrayOfEvents' updated successfully",
      });
    } catch (err) {
      // Handle errors
      console.error(err);
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  } else {
    // Handle incorrect request type
    res.status(400).json({
      type: "incorrect-type-of-request",
      name: "Incorrect type of request",
      status: 400,
      message:
        "The request should be a PATCH request. The user's request was of a different type.",
      instance: "/global-data-manager",
    });
  }
};

export default handler;

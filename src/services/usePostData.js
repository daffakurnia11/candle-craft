import React, { useRef } from "react";
import { ref, child, push } from "firebase/database";
import { database } from "@/services/config";

function usePostData() {
  const error = useRef(null);
  const success = useRef(null);

  const postData = async (path, value) => {
    try {
      const rootReference = ref(database);
      const dbPath = child(rootReference, path);
      const dbPost = await push(dbPath, value);
      success.current = true;
    } catch (err) {
      error.current = err.message;
    }
  };

  return { postData };
}

export default usePostData;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { database } from "@/services/config";
import { child, get, ref } from "firebase/database";

const useGetData = (path) => {
  const [isLoading, setIsLoading] = useState(true);
  const snapshot = useRef(null);
  const error = useRef(null);

  const fetchData = async () => {
    try {
      const rootReference = ref(database);

      const dbGet = await get(child(rootReference, path));
      const dbValue = dbGet.val();
      const isExist = dbGet.exists();

      snapshot.current = dbValue;
      console.log(dbValue);
    } catch (err) {
      error.current = err.message;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    snapshot: snapshot.current,
    error: error.current,
  };
};

export default useGetData;

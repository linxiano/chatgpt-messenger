"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const ClientProvider = () => {
  return (
    <>
      <Toaster position="top-right" />
      {/* Possible to add more client libraries here! */}
    </>
  );
};

export default ClientProvider;

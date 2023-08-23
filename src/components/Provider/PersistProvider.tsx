'use client'
import React, { ReactNode } from 'react';
import { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

interface PersistProviderProps {
  children: ReactNode;
}

const PersistProvider: React.FC<PersistProviderProps> = ({ children }) => {
  return <PersistGate persistor={persistor}>{children}</PersistGate>;
};

export default PersistProvider;

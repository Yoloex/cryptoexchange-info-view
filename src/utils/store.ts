import { createContext, useContext } from "react";
import { CryptoContent } from "../types";

export const CryptoContext = createContext<CryptoContent>({details: [], setDetails: () => {}})

export const useCryptoContext = () => useContext(CryptoContext)
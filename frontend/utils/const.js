import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from './tiktok_clone.json';

export const CLUSTER =
  process.env.REACT_APP_CLUSTER === "devnet"
    ? "devnet";

export const SOLANA_HOST = process.env.REACT_APP_SOLANA_API_URL
  ? process.env.REACT_APP_SOLANA_API_URL
  : CLUSTER === "devnet"
    ? clusterApiUrl("devnet");

export const TIKTOK_PROGRAM_ID = new PublicKey(
  CLUSTER === 'devnet' 
  ? '84ycHNkVrLem741fXUGNTyufi2qNGMbLVcwkZDZmyNwb' 
  
);

export const TIKTOK_IDL = tiktok;
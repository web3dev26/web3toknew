import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from './tiktok_clone.json';

export const TIKTOK_PROGRAM_ID = new PublicKey(
  "84ycHNkVrLem741fXUGNTyufi2qNGMbLVcwkZDZmyNwb"
);

export const TIKTOK_IDL = tiktok;
/* eslint-disable no-useless-catch */
import api from "@/utils/services/api";
import { logout, updateUserProfile } from "@/utils";
import { ILogOut, IProfileModifyResponse } from "@/types/responses";
import { UserProfile } from "@/types/user";

export const logOut = async (token: string) => {
  try {
    api.resource = logout;

    const res = await api.post<ILogOut>({ body: { token } });

    return res;
  } catch (error) {
    throw error;
  }
};

export const editProfile = async (token: string, body: UserProfile) => {
  try {
    api.resource = updateUserProfile;
    api.token = token;

    const res = await api.post<IProfileModifyResponse>({ body });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Sumamos 1 al mes, ya que en JavaScript los meses empiezan desde 0 (enero) hasta 11 (diciembre).
  const year = date.getFullYear().toString();
  //
  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
};

// getWords in '()'
export const TitleRed = (Words: string): string[] => {
  const regex = /\(([^)]+)\)/g;
  const palabras: string[] = [];
  let match;
  while ((match = regex.exec(Words)) !== null) {
    palabras.push("(" + match[1] + ")");
  }
  return palabras;
};

// delete Words in '()'
export const ExtractWordsBetweenParentheses = (Words: string): string => {
  const regex2 = /\s*\([^)]+\)\s*/g;
  return Words.replace(regex2, " ");
};

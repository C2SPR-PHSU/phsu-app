import api from '@/utils/services/api';
import { test } from '@/utils';

export const getTest = async () => {
  api.resource = test;

  try {
    const res = await api.get();
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};

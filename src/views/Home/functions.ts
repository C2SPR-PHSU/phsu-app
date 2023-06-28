import api from '@/utils/services/api';
import { test } from '@/utils';

export const getTest = async () => {
  try {
    api.resource = test;

    const res = await api.get();
    console.log(res)

    return res;
  } catch (error) {
    throw error;
  }
};
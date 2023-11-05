/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from '../api';

/**
 * Finds all builds
 */
const getAllBuilds = async (search?: string): Promise<unknown> => {
  const response = await api
    .get(`/builds${search && search !== '' ? `?search=${search}` : ''}`)
    .catch((err: unknown) => {
      throw err;
    });
  return response;
};

/**
 * Finds all classes
 */
const getAllClasses = async (search?: string): Promise<unknown> => {
  const response = await api
    .get(`/classes${search && search !== '' ? `?search=${search}` : ''}`)
    .catch((err: unknown) => {
      throw err;
    });
  return response;
};

export default {
  getAllBuilds,
  getAllClasses,
};

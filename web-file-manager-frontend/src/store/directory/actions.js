import apiClient from '~/services/apiClient';
import {
  FETCH_DIRECTORY,
  SEARCH_DIRECTORY,
  DELETE_DIRECTORY_ITEM,
  RENAME_DIRECTORY_ITEM,
  RESET_DIRECTORY_DATA,
  RENAME_FILE_ITEM,
  DELETE_FILE_ITEM
} from './constants';
import { showErrorNotification } from '../app/actions';

export function fetchDirectory(directoryPath) {
  return dispatch => {
    const payload = apiClient('directory', { params: { directoryPath } });
    return dispatch({
      type: FETCH_DIRECTORY,
      payload
    }).catch(err => {
      dispatch(showErrorNotification(err.message));
      return Promise.reject(err);
    });
  };
}

export function searchDirectory(query) {
  return dispatch => {
    const payload = apiClient('directory/search', {
      params: { query }
    });
    return dispatch({
      type: SEARCH_DIRECTORY,
      payload
    });
  };
}

export function deleteDirectoryItem(directoryPath) {
  return dispatch => {
    const payload = apiClient('directory', {
      method: 'DELETE',
      params: { directoryPath }
    });
    return dispatch({
      type: DELETE_DIRECTORY_ITEM,
      payload,
      meta: {
        directoryPath
      }
    }).catch(err => {
      dispatch(showErrorNotification(err.message));
      return Promise.reject(err);
    });
  };
}

export function renameDirectoryItem(directoryPath, name) {
  return dispatch => {
    const payload = apiClient('directory/rename', {
      method: 'PUT',
      params: { directoryPath },
      body: { name }
    });

    return dispatch({
      type: RENAME_DIRECTORY_ITEM,
      payload,
      meta: {
        directoryPath
      }
    }).catch(err => {
      dispatch(showErrorNotification(err.message));
      return Promise.reject(err);
    });
  };
}

export function renameFileItem(filePath, name) {
  return dispatch => {
    const payload = apiClient('file/rename', {
      method: 'PUT',
      params: { filePath },
      body: { name }
    });

    return dispatch({
      type: RENAME_FILE_ITEM,
      payload,
      meta: {
        filePath
      }
    }).catch(err => {
      dispatch(showErrorNotification(err.message));
      return Promise.reject(err);
    });
  };
}

export function deleteFileItem(filePath) {
  return dispatch => {
    const payload = apiClient('file', {
      method: 'DELETE',
      params: { filePath }
    });
    return dispatch({
      type: DELETE_FILE_ITEM,
      payload,
      meta: {
        filePath
      }
    }).catch(err => {
      dispatch(showErrorNotification(err.message));
      return Promise.reject(err);
    });
  };
}

export function resetDirectoryData() {
  return {
    type: RESET_DIRECTORY_DATA
  };
}

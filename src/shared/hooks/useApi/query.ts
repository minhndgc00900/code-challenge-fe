import { useCallback } from 'react';

import { useQuery } from '@tanstack/react-query';
import { objectToQueryString } from '../../../shared/utils/url';
import { callAPI } from '../../../shared/apis/axiosClient';
import { ApiMethods } from '../../../shared/enums/api';

const useClientQuery = (url: string, options = {}, key?: string) => {
  const makeRequest = useCallback(
    () =>
      new Promise((resolve, reject) => {
        callAPI(ApiMethods.get, url, { params: options }).then(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          },
        );
      }),
    [url, objectToQueryString(options)],
  );
  return useQuery([key || `${url}?${objectToQueryString(options)}`], () =>
    makeRequest(),
  );
};

export default useClientQuery;

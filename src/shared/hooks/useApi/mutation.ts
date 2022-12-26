import { useMutation } from '@tanstack/react-query';
import { callAPI } from '../../../shared/apis/axiosClient';
import { ApiMethods } from '../../../shared/enums/api';
import { MutationProps } from '../../../shared/interfaces/api';

const useClientMutation = (
  method: ApiMethods,
  url: string,
  { onSuccess, onError }: MutationProps<any>,
) => {
  const makeRequest = (body: Object) => {
    return new Promise((resolve, reject) => {
      callAPI(method, url, body).then(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        },
      );
    });
  };

  return useMutation((body: Object) => makeRequest(body), {
    onError: (err: any) => {
      onError && onError(err);
    },
    onSuccess: (res: any) => {
      onSuccess(res);
    },
  });
};

export default useClientMutation;

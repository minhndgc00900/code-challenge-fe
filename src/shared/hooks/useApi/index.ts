/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import useClientQuery from './query';
import useClientMutation from './mutation';
import { ApiMethods } from '../../../shared/enums/api';
import { MutationProps } from '../../../shared/interfaces/api';

export default {
  get: (url: string, options = {}, key?: string) =>
    useClientQuery(url, options, key),
  post: (url: string, { onSuccess, onError }: MutationProps<any>) =>
    useClientMutation(ApiMethods.post, url, { onSuccess, onError }),
  put: (url: string, { onSuccess, onError }: MutationProps<any>) =>
    useClientMutation(ApiMethods.put, url, { onSuccess, onError }),
  patch: (url: string, { onSuccess, onError }: MutationProps<any>) =>
    useClientMutation(ApiMethods.patch, url, { onSuccess, onError }),
  delete: (url: string, { onSuccess, onError }: MutationProps<any>) =>
    useClientMutation(ApiMethods.delete, url, { onSuccess, onError }),
};

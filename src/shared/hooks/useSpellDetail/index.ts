import { useEffect, useState } from 'react';
import useApi from '../useApi';

const useDetail = (url: string) => {
  const { data: response, isLoading } = useApi.get(url);

  const [records, setRecords] = useState<any>();

  useEffect(() => {
    if (response) {
      setRecords(response as any);
    }
  }, [response]);

  return { records, isLoading };
};
export default useDetail;

import { TablePaginationConfig } from 'antd';
import { SorterResult } from 'antd/es/table/interface';
import { useEffect, useState } from 'react';
import { PaginationConfig } from '../../../shared/constants';
import useApi from '../useApi';

interface UseTableProps {
  dataTableUrl: string;
}

export default function useTable<T>({ dataTableUrl }: UseTableProps) {
  const [pagination, setPagination] = useState(PaginationConfig);
  const [records, setRecords] = useState<T[]>([]);
  const [queries, setQueries] = useState();
  const defaultFilter = {
    page: pagination.current,
    limit: pagination.pageSize,
    sort: undefined,
    dir: undefined,
  };
  const [stateQuery, setStateQuery] = useState<any>(defaultFilter);

  const { data: response, isLoading } = useApi.get(dataTableUrl, stateQuery);
  useEffect(() => {
    if (response) {
      const { results } = response as any;

      setRecords(results);

      // setPagination((prevPagination: TablePaginationConfig) => ({
      //   ...prevPagination,
      //   current: meta.pagination.page,
      //   pageSize: meta.pagination.limit,
      //   total: meta.pagination.totalPage,
      // }));
    }
  }, [response]);

  useEffect(() => {
    if (stateQuery && Object.keys(stateQuery).length) {
      setQueries(queries);
    }
  }, [stateQuery]);

  const handleChange = (
    pagination: TablePaginationConfig,
    _: any,
    sorter: SorterResult<object>,
  ) => {
    let sort = stateQuery.sort;
    let dir = stateQuery.dir;
    if (sorter.order) {
      const sortField = sorter.field;
      const sortDirections = sorter.order === 'ascend' ? 'asc' : 'desc';
      sort = `${sortField}`;
      dir = sortDirections;
    }
    setStateQuery((prev: any) => ({
      ...prev,
      // page: pagination.current,
      // limit: pagination.pageSize,
      sort,
      dir,
    }));
  };

  return {
    records,
    handleChange,
    pagination,
    isLoading,
    stateQuery,
    setStateQuery,
    queries,
  };
}

import { TablePaginationConfig } from 'antd';

export const PaginationConfig: TablePaginationConfig = {
  current: 1,
  pageSize: 10,
  pageSizeOptions: ['10', '20', '50', '100'],
  showSizeChanger: true,
  showQuickJumper: false,
};

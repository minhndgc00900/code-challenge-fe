import { PlusCircleOutlined } from '@ant-design/icons';
import { Table, Card, Tooltip, Button } from 'antd';
import classes from './table.module.css';

type Size = 'large' | 'middle' | 'small';

interface ICustomTableProps {
  loading?: boolean;
  size?: Size;
  rowSelection?: any;
  columns: object[];
  data: object[];
  pagination: any;
  onChange: (pagination: any, filters: any, sorter: any) => void;
  id?: string;
  onRow?: any;
  className?: string;
  rowKey?: any;
  components?: any;
  rowClassName?: any;
  addAction?: (type: DrawerType) => void;
  dataTestId?: string;
}

export type DrawerType = 'detail' | 'add' | 'edit' | 'close';

const tableTopAction = (tb: ICustomTableProps) => (
  <>
    {tb.addAction && (
      <Tooltip title="Add">
        <Button
          type="text"
          size="small"
          shape="circle"
          onClick={() => tb.addAction && tb.addAction('add')}
        >
          <PlusCircleOutlined />
        </Button>
      </Tooltip>
    )}
  </>
);
export default function CustomTable(tb: ICustomTableProps) {
  const {
    columns,
    data,
    onChange,
    pagination,
    className,
    components,
    id,
    loading,
    onRow,
    rowClassName,
    rowKey,
    rowSelection,
    size = 'middle',
    dataTestId,
  } = tb;

  return (
    <Table
      columns={columns}
      dataSource={data}
      data-testid={dataTestId}
      onChange={onChange}
      // size={size}
      id={id}
      loading={loading}
      rowSelection={rowSelection}
      // pagination={pagination}
      onRow={onRow}
      rowKey={rowKey}
      components={components}
      rowClassName={rowClassName}
      className={className}
    />
  );
}

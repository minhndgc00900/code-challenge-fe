import { Card, Col, Form, Row } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import useTable from '../../shared/hooks/useTable';
import { useNavigate } from 'react-router-dom';
import classes from './wishlist.module.css';
import CustomTable from '../../components/Table';
import { ColumnType } from 'antd/lib/table';
import { ButtonOK } from '../../components/Button';
import Title from 'antd/lib/typography/Title';

interface Spell {
  index: string;
  name: string;
  url: string;
}

function Wishlist() {
  const navigate = useNavigate();

  const likeItem: string[] =
    JSON.parse(localStorage.getItem('likeItem') as string) || [];

  const [wishList, setWishList] = useState<Spell[]>([]);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const data = useMemo(
    () => ({
      dataTableUrl: 'spells',
    }),
    [],
  );
  const { records, handleChange, pagination, isLoading } =
    useTable<Spell>(data);

  const columns: ColumnType<Spell>[] = [
    {
      dataIndex: 'name',
      title: 'Name',
    },
  ];

  useEffect(() => {
    if (records) {
      const res = records.filter((f) =>
        likeItem.some((item) => item === f.index),
      );
      setWishList(res);
    }
  }, [records]);

  // on select change of table
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const onRemoveItem = () => {
    const res = likeItem.filter((f) => !selectedRowKeys.includes(f));

    if (res) {
      localStorage.setItem('likeItem', JSON.stringify(res));
      const newWishList = records.filter((f) =>
        res.some((item) => item === f.index),
      );
      setWishList(newWishList);
    }
  };

  return (
    <>
      <div className={classes.page_header__primary}>
        <div className="page-heading">
          <Row>
            <Col className="page-heading__content" span={12}>
              <Title level={1}>Wishlist</Title>
            </Col>
            <Col span={12} className={classes.btn__redirect__container}>
              {selectedRowKeys.length !== 0 && (
                <ButtonOK
                  text="Remove"
                  onClick={onRemoveItem}
                  className={classes.btn__redirect}
                />
              )}
            </Col>
          </Row>
        </div>
      </div>
      <CustomTable
        columns={columns}
        data={wishList}
        rowClassName={() => 'row__spells'}
        className={classes.__ant_table}
        onChange={handleChange}
        pagination={pagination}
        rowSelection={rowSelection}
        loading={isLoading}
        rowKey={(record: Spell) => record.index}
        dataTestId="__wishlist"
        onRow={(record: Spell) => {
          return {
            onClick: () => {
              navigate(`/spells/${record.index}`);
            }, // click row
          };
        }}
      />
    </>
  );
}

export default Wishlist;

import { Card, Col, Form, Row, Space } from 'antd';
import React, { useMemo } from 'react';
import useTable from '../../shared/hooks/useTable';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './spells.module.css';
import CardC from '../../components/Card';
import useDetail from '../../shared/hooks/useSpellDetail';
import CustomTable from '../../components/Table';
import { ColumnType } from 'antd/lib/table';
import { useForm } from 'antd/lib/form/Form';
import { ButtonOK } from '../../components/Button';
import InputC from '../../components/Input';
import Title from 'antd/lib/typography/Title';

interface Spell {
  index: string;
  name: string;
  url: string;
}

function PortalPage() {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const data = useMemo(
    () => ({
      dataTableUrl: 'spells',
    }),
    [],
  );
  const { records, handleChange, pagination, isLoading, setStateQuery } =
    useTable<Spell>(data);

  const columns: ColumnType<Spell>[] = [
    {
      dataIndex: 'name',
      title: 'Name',
    },
  ];

  const onHandleFilter = (values: any) => {
    setStateQuery((prev: any) => ({
      ...prev,
      ...values,
    }));
  };

  return (
    <>
      <div className={classes.page_header__primary}>
        <div className="page-heading">
          <div className="page-heading__content">
            <Title level={1}>Spells</Title>
          </div>
        </div>
      </div>
      <Card className="table-filter">
        <Form
          autoComplete="off"
          layout="vertical"
          form={form}
          onFinish={onHandleFilter}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} sm={18} md={18} lg={18}>
              <InputC
                useLabel
                name="name"
                label="Name"
                className={classes.__input}
              />
            </Col>

            <Col
              className="gutter-row"
              xs={24}
              sm={6}
              md={6}
              lg={6}
              style={{ display: 'flex' }}
            >
              <ButtonOK
                className={classes.btn__search}
                text="Search"
                htmlType="submit"
                loading={isLoading}
              />
            </Col>
          </Row>
        </Form>
      </Card>
      <CustomTable
        columns={columns}
        data={records}
        rowClassName={() => 'row__spells'}
        className={classes.__ant_table}
        onChange={handleChange}
        pagination={pagination}
        loading={isLoading}
        dataTestId={'__spells'}
        rowKey={(record: Spell) => record.index}
        onRow={(record: Spell) => {
          return {
            onClick: () => {
              navigate(`/spells/${record.index}`);
            }, // click row
          };
        }}
      />
      {/* <div className={`site-card-wrapper ${classes.custom_card____wrapper}`}>
        <Row gutter={[16, 16]}>
          {records.map((item: Spell, index: number) => (
            <CardC
              key={index}
              item={item.name}
              onClick={() => onHandleNavigate(item)}
            />
          ))}
        </Row>
      </div> */}
    </>
  );
}

export default PortalPage;

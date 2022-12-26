import { useLocation } from 'react-router-dom';
import { ISpellDetail } from '../../shared/interfaces/spell';
import { Divider, Typography, Form, Card, Row, Col, Tag } from 'antd';
import { useEffect, useState } from 'react';
import classes from './details.module.css';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import useDetail from '../../shared/hooks/useSpellDetail';

const { Title, Paragraph } = Typography;

const SpellDetail = (props: any) => {
  const { pathname } = useLocation();
  const [form] = Form.useForm();
  const { records } = useDetail(pathname);
  const [like, setLike] = useState<boolean>(false);
  const likeItem: string[] =
    JSON.parse(localStorage.getItem('likeItem') as string) || [];

  useEffect(() => {
    if (records && likeItem.includes(records.index)) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [records]);

  useEffect(() => {
    form.setFieldsValue({
      ...records,
    });
  }, []);

  const onHandleLike = (currentStatus: boolean) => {
    setLike(currentStatus);
    if (currentStatus) {
      localStorage.setItem(
        'likeItem',
        JSON.stringify([...likeItem, records?.index]),
      );
    } else {
      localStorage.setItem(
        'likeItem',
        JSON.stringify(
          likeItem.filter((item: string) => item !== records?.index),
        ),
      );
    }
  };

  return (
    <>
      <div className="page_header__primary">
        <div className="page-heading">
          <div className="page-heading__content">
            <Title level={1} data-testid="__spellName">
              {records?.name}{' '}
              <span
                onClick={() => onHandleLike(!like)}
                style={{ cursor: 'pointer' }}
              >
                {like ? (
                  <HeartFilled className={classes.__heart_filled} />
                ) : (
                  <HeartOutlined />
                )}
              </span>
            </Title>
          </div>
        </div>
      </div>
      <Card>
        <Form layout="vertical">
          <Row gutter={16}>
            <Col className="gutter-row" xs={12} sm={8} md={6} lg={6}>
              <Form.Item
                label={<span className={classes.plain__text}>level</span>}
              >
                <span className="ant-form-text" data-testid="__level">
                  {records?.level}
                </span>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={12} sm={8} md={6} lg={6}>
              <Form.Item
                label={
                  <span className={classes.plain__text}>casting time</span>
                }
              >
                <span className="ant-form-text" data-testid="__castingTime">
                  {records?.casting_time}
                </span>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={12} sm={8} md={6} lg={6}>
              <Form.Item
                label={<span className={classes.plain__text}>range/area</span>}
              >
                <span className="ant-form-text" data-testid="__range">
                  {records?.range}
                </span>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={12} sm={8} md={6} lg={6}>
              <Form.Item
                label={<span className={classes.plain__text}>components</span>}
              >
                <span className="ant-form-text" data-testid="__components">
                  {records?.components.join(', ')}
                </span>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={12} sm={8} md={6} lg={6}>
              <Form.Item
                label={<span className={classes.plain__text}>duration</span>}
              >
                <span className="ant-form-text" data-testid="__duration">
                  {records?.duration}
                </span>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={12} sm={8} md={6} lg={6}>
              <Form.Item
                label={<span className={classes.plain__text}>school</span>}
              >
                <span className="ant-form-text" data-testid="__school">
                  {records?.school.name}
                </span>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={12} sm={8} md={6} lg={6}>
              <Form.Item
                label={<span className={classes.plain__text}>attack/save</span>}
              >
                <span className="ant-form-text" data-testid="__attack">
                  {records?.dc?.dc_type?.name}
                </span>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={12} sm={8} md={6} lg={6}>
              <Form.Item
                label={
                  <span className={classes.plain__text}>damage/effect</span>
                }
              >
                <span className="ant-form-text" data-testid="__damage">
                  {records?.damage?.damage_type.name}
                </span>
              </Form.Item>
            </Col>
          </Row>
          <Divider className={classes.divider} />
          {records?.desc.map((item: any, index: number) => (
            <Paragraph
              key={index}
              className={classes.__paragraph}
              data-testid={`__desc${index}`}
            >
              {item}
            </Paragraph>
          ))}
          <div className={classes.other__information}>
            <Row gutter={[0, 15]}>
              <Col>
                <p className={classes.class__type}>
                  Available For:{' '}
                  {records?.classes.map((item: any, index: number) => (
                    <Tag
                      className={classes.tag__custom}
                      key={index}
                      data-testid={`__class${index}`}
                    >
                      {item?.name}
                    </Tag>
                  ))}
                </p>
              </Col>
            </Row>
          </div>
        </Form>
      </Card>
    </>
  );
};

export default SpellDetail;

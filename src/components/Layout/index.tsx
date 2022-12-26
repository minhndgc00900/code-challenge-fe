import { Breadcrumb, Col, Layout, Menu, Row } from 'antd';
import { ButtonOK } from 'components/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { hyphenToUpper } from '../../shared/utils';
import classes from './layout.module.css';

const { Header, Content, Footer } = Layout;

const LayoutCustom = (props: any) => {
  const { children } = props;
  const { pathname } = useLocation();

  const navigation = useNavigate();

  const pathList = pathname.split('/').filter((it: string) => it !== '');

  const onRedirectToWishlist = () => {
    navigation('/wishlist');
  };

  return (
    <Layout style={{ minHeight: '100vh' }} className={classes.__layout}>
      <Header className={classes.__header}>
        <Row>
          <Col md={6} sm={6} xs={24}>
            {' '}
            <a href="/">
              <div className={classes.__logo}>
                <img
                  src="https://images.ctfassets.net/swt2dsco9mfe/1qU2YMq2MSczf9KGme5gu7/a580e2f158f2c08faad3a9d4463af0bc/dnd-hub-logo.png?fm=avif"
                  width={'100%'}
                  height={'100%'}
                />
              </div>
            </a>
          </Col>
        </Row>
      </Header>
      <Content className={classes.custom_card____wrapper}>
        <Row>
          <Col span={12}>
            <Breadcrumb style={{ margin: '16px 0', padding: '0px 24px' }}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              {pathList.map((path: string, index: number) => {
                const name = hyphenToUpper(path);
                const isActive = path === pathList[pathList.length - 1];

                return isActive ? (
                  <Breadcrumb.Item key={index}>{name}</Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item href={`/${path}`} key={index}>
                    {name}
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>
          </Col>
          <Col span={12} className={classes.btn__redirect__container}>
            <ButtonOK
              text="Wishlist"
              onClick={onRedirectToWishlist}
              className={classes.btn__redirect}
            />
          </Col>
        </Row>

        <Layout
          style={{ padding: '24px 0' }}
          className={classes.content__layout}
        >
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer className={classes.__footerLayout}>
        <div className={classes.footer__copyright}>
          ©2022 Dungeons &amp; Dragons | Wizards of the Coast LLC, a subsidiary
          of Hasbro, Inc. All Rights Reserved.
        </div>
      </Footer>
    </Layout>
  );
};

export default LayoutCustom;

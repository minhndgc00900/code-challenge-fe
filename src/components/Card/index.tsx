import { Card, Col } from 'antd';

type Props = {
  item: any;
  onClick?: (event: any) => void;
};

const CardC = (props: Props) => {
  const { item, onClick } = props;

  return (
    <Col span={6} onClick={onClick}>
      <Card
        headStyle={{ display: 'none' }}
        bodyStyle={{
          textAlign: 'center',
          fontSize: '1rem',
          fontWeight: '400',
          cursor: 'pointer',
        }}
        title="Spell Name"
        bordered={false}
      >
        {item}
      </Card>
    </Col>
  );
};

export default CardC;

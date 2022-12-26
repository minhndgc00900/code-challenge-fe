import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import CardC from '.';

describe('Test Card', () => {
  const onClickCard = () => {
    return;
  };

  describe('Card component', () => {
    it('renders card correctly', () => {
      const tree = renderer
        .create(<CardC item="test" onClick={onClickCard} />)
        .toJSON();
      expect(tree).toMatchInlineSnapshot(`
        <div
          className="ant-col ant-col-6"
          onClick={[Function]}
          style={{}}
        >
          <div
            className="ant-card"
          >
            <div
              className="ant-card-head"
              style={
                {
                  "display": "none",
                }
              }
            >
              <div
                className="ant-card-head-wrapper"
              >
                <div
                  className="ant-card-head-title"
                >
                  Spell Name
                </div>
              </div>
            </div>
            <div
              className="ant-card-body"
              style={
                {
                  "cursor": "pointer",
                  "fontSize": "1rem",
                  "fontWeight": "400",
                  "textAlign": "center",
                }
              }
            >
              test
            </div>
          </div>
        </div>
      `);
    });
  });
});

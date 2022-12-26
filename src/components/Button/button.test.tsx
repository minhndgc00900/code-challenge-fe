import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { ButtonOK } from '.';

describe('Test Button', () => {
  const onCheckOkButton = () => {
    return;
  };

  describe('Button OK', () => {
    it('renders btn correctly', () => {
      const tree = renderer
        .create(<ButtonOK text="test" onClick={onCheckOkButton} />)
        .toJSON();
      expect(tree).toMatchInlineSnapshot(`
        <button
          className="ant-btn ant-btn-primary"
          disabled={false}
          onClick={[Function]}
          type="button"
        >
          <span>
            test
          </span>
        </button>
      `);
    });
  });
});

import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import InputC from '.';
import { render, screen } from '@testing-library/react';

describe('Test Input component', () => {
  it('renders input correctly', () => {
    const { asFragment } = render(<InputC useLabel name="name" label="Name" />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="ant-form-item __label"
        >
          <div
            class="ant-row ant-form-item-row"
            data-testid="__input"
          >
            <div
              class="ant-col ant-form-item-label"
            >
              <label
                class="ant-form-item-no-colon"
                for="name"
                title="Name"
              >
                Name
              </label>
            </div>
            <div
              class="ant-col ant-form-item-control"
            >
              <div
                class="ant-form-item-control-input"
              >
                <div
                  class="ant-form-item-control-input-content"
                >
                  <input
                    class="ant-input"
                    id="name"
                    placeholder="Name"
                    type="text"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  it('To check if label exist', async () => {
    render(<InputC useLabel name="name" label="Name" />);
    const __spellTable = await screen.findByTestId('__input');
    expect(__spellTable.getElementsByTagName('label').length).not.toBe(0);
  });
});

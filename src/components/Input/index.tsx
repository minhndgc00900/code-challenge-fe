import type { FocusEventHandler, ReactNode } from 'react';
import { Form, Input, InputNumber } from 'antd';
import classes from './input.module.css';

type Size = 'large' | 'middle' | 'small';
type NamePath = string | number | (string | number)[];
type Props = {
  refInput?: any;
  name: NamePath;
  type?: string;
  readOnly?: boolean;
  disabled?: boolean;
  useLabel?: boolean;
  label?: string;
  colon?: boolean;
  className?: string;
  rules?: object[];
  size?: Size;
  min?: number;
  max?: number;
  rows?: number;
  maxLength?: number;
  showCount?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onInputNumberChange?: any;
};

const InputC = (props: Props) => {
  const isRequired = props.rules
    ? props.rules.filter((r: any) => r.required === true).length > 0
    : false;

  let InputContent: JSX.Element;

  switch (props.type) {
    case 'number':
      InputContent = (
        <InputNumber
          type="number"
          placeholder={props.label}
          className={props.className}
          readOnly={props.readOnly}
          disabled={props.disabled}
          size={props.size}
          min={props.min}
          max={props.max}
          onChange={props.onInputNumberChange}
        />
      );
      break;
    case 'password':
      InputContent = (
        <Input.Password
          placeholder={props.label}
          className={props.className}
          readOnly={props.readOnly}
          disabled={props.disabled}
          size={props.size}
          prefix={props.prefix}
          suffix={props.suffix}
        />
      );
      break;
    case 'textarea':
      InputContent = (
        <Input.TextArea
          ref={props.refInput}
          placeholder={props.label}
          className={props.className}
          readOnly={props.readOnly}
          disabled={props.disabled}
          size={props.size}
          rows={props.rows}
          maxLength={props.maxLength}
          showCount={props.showCount}
        />
      );
      break;
    default:
      InputContent = (
        <Input
          ref={props.refInput}
          placeholder={props.label}
          className={props.className}
          readOnly={props.readOnly}
          disabled={props.disabled}
          size={props.size}
          onBlur={props.onBlur}
          prefix={props.prefix}
          suffix={props.suffix}
        />
      );
  }

  return (
    <Form.Item
      label={props.useLabel ? props.label : ''}
      colon={props.colon || false}
      name={props.name}
      required={isRequired}
      rules={props.rules}
      className={classes.__label}
      data-testid="__input"
    >
      {InputContent}
    </Form.Item>
  );
};

export default InputC;

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import CommonForm from './CommonForm';
import '../../../common/reduxFormI18n';

const renderField = ({
  input,
  label,
  type,
  required,
  className,
  inputClassName,
  meta: { touched, error },
}) => (
  <CommonForm
    label={label}
    className={className}
    inputClassName={inputClassName}
    touched={touched}
    required={required}
    error={error}
  >
    {type === 'textarea' ? (
      <textarea {...input} className="form-control" />
    ) : (
      <input
        {...input}
        type={type}
        className={type === 'checkbox' ? '' : 'form-control'}
      />
    )}
  </CommonForm>
);

const TextField = ({
  name,
  label,
  type,
  className,
  inputClassName,
  required,
  validate,
}) => (
  <Field
    name={name}
    type={type}
    component={renderField}
    required={required}
    className={className}
    inputClassName={inputClassName}
    label={label}
    validate={validate}
  />
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  validate: PropTypes.arrayOf(PropTypes.func),
};

TextField.defaultProps = {
  label: '',
  type: 'text',
  className: '',
  required: false,
  inputClassName: undefined,
  validate: undefined,
};

export default TextField;

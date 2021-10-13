import { Select } from 'antd';
const { Option } = Select;

export default function LocaleSelector({ locales, locale, onChange, ...rest }) {
  return (
    <Select
      defaultValue={locale}
      onChange={(value) => {
        onChange && onChange(value);
      }}
      {...rest}
    >
      {locales &&
        locales.map(({ value, title }) => (
          <Option value={value} key={value}>
            {title}
          </Option>
        ))}
    </Select>
  );
}

import { Select } from 'antd';
import intl from 'react-intl-universal';

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
        locales.map(({ value, localeKey }) => (
          <Option value={value} key={value}>
            {intl.get(localeKey)}
          </Option>
        ))}
    </Select>
  );
}

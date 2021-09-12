import { AVAILABLE_CURRENCIES } from "../../types/currencies";
import { InputLabel, Select } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { labels } from "../../types/helper/labels";

interface IProps {
  name: string;
  control?: any;
  defaultValue?: string;
}

export const ControlledCurrencySelect = ({
  name,
  control,
  defaultValue,
}: IProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <>
          <InputLabel htmlFor="age-native-simple">{labels[name]}</InputLabel>
          <Select {...field} native>
            <option aria-label="None" value="" />
            {AVAILABLE_CURRENCIES.map(({ id }) => (
              <option value={id} key={id}>
                {id}
              </option>
            ))}
          </Select>
        </>
      )}
    />
  );
};

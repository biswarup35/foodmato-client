import * as React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useDebounce } from "usehooks-ts";

type Props = {
  onChange: (value: string[]) => void;
};

const ListOccasions: React.FC<Props> = ({ onChange }) => {
  const [map, setMap] = React.useState(new Map());
  const debuncedMap = useDebounce(map, 300);
  React.useEffect(() => {
    const data = Array.from(debuncedMap).filter(([, value]) => value === true);
    const value = data.reduce<string[]>((acc, [key, value]) => {
      return acc.concat(key);
    }, []);
    onChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debuncedMap]);
  return (
    <FormGroup>
      {[
        "Birthday Celebration",
        "Baby Shower",
        "House Warming",
        "Society Event",
      ].map((item, index) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              size="small"
              name={item.replace(/\s/g, "_")}
              style={{
                height: "1.8rem",
              }}
              onChange={(e) => {
                if (map.has(e.target.name)) {
                  map.delete(e.target.name);
                }
                setMap(
                  (prev) =>
                    new Map([
                      ...Array.from(prev),
                      [e.target.name, e.target.checked],
                    ])
                );
              }}
            />
          }
          label={item}
        />
      ))}
    </FormGroup>
  );
};

export default ListOccasions;

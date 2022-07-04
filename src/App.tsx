import * as React from "react";
import { Container, Stack, useMediaQuery, Theme } from "@mui/material";
import { useGetRestaurantsQuery } from "./services/restaurantsApi";
import Filter from "./components/Filter";
import Main from "./components/views/Main";
import FrequentlyOrdered from "./components/views/FrequentlyOrdered";
import { useAppSelector } from "./app/hooks";
import useMakeQueryString from "./hooks/useMakeQueryString";

function App() {
  const filter = useAppSelector((state) => state.filter);
  const param = useMakeQueryString(filter);
  const { data } = useGetRestaurantsQuery(param, {
    refetchOnMountOrArgChange: true,
  });
  const mdUp = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));

  React.useEffect(() => {
    console.log("Filters", filter);
  }, [filter]);
  return (
    <div>
      {/* Frequently Ordered section */}
      <FrequentlyOrdered />
      <Container id="container">
        <Stack direction="row">
          {mdUp && <Filter />}
          <Main data={data} />
        </Stack>
      </Container>
    </div>
  );
}

export default App;

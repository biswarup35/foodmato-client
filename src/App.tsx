import * as React from "react";
import { Container, Stack, useMediaQuery, Theme } from "@mui/material";
import { useGetRestaurantsQuery } from "./services/restaurantsApi";
import Filter from "./components/Filter";
import Main from "./components/views/Main";
import FrequentlyOrdered from "./components/views/FrequentlyOrdered";

function App() {
  const { data } = useGetRestaurantsQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const mdUp = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));

  React.useEffect(() => {
    console.table(data);
  }, [data]);
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

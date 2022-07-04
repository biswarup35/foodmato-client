import * as React from "react";
import { Box, Container } from "@mui/material";
import StyledFab from "../StyledFab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "../Slider";
import TextHeading from "../TextHeading";
import useSlider from "../../hooks/useSlider";
import { useGetRestaurantsQuery } from "../../services/restaurantsApi";
import OrderedCard from "../OrderedCard";
import CardContainer from "../CardContainer";

const FrequentlyOrdered = () => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const { data } = useGetRestaurantsQuery("?rating_gte=4");
  const handleScrollLeft = React.useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.scroll({
        left: sliderRef.current.scrollLeft - 400,
        behavior: "smooth",
      });
    }
  }, []);
  const handleScrollRight = React.useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.scroll({
        left: sliderRef.current.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  }, []);

  useSlider(sliderRef);
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.custom.colors.background,
        pb: 4,
      })}
    >
      <Container>
        <TextHeading sx={{ pl: 2, py: 2 }} variant="h6">
          Most Frequently Ordered
        </TextHeading>
        <Box
          sx={{
            position: "relative",
            ml: 2,
          }}
        >
          <Slider ref={sliderRef}>
            {data &&
              data.map((item) => (
                <CardContainer
                  key={item.id}
                  style={{
                    display: "inline-block",
                  }}
                >
                  <OrderedCard name={item.name} cover={item.cover} />
                </CardContainer>
              ))}
          </Slider>
          {data && (
            <>
              <StyledFab
                sx={{
                  left: -20,
                  pl: 1,
                }}
                size="small"
                onClick={handleScrollLeft}
              >
                <ArrowBackIosIcon />
              </StyledFab>
              <StyledFab
                sx={{
                  right: -20,
                }}
                size="small"
                onClick={handleScrollRight}
              >
                <ArrowForwardIosIcon />
              </StyledFab>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default FrequentlyOrdered;

import { Stack, Chip, styled } from "@mui/material";

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: 0,
}));

const SortByChips = () => {
  return (
    <Stack direction="row" spacing={1} flex="1">
      <StyledChip label="4+ rating" onClick={() => {}} onDelete={() => {}} />
      <StyledChip
        label="Non-Vegetarian"
        onClick={() => {}}
        onDelete={() => {}}
      />
    </Stack>
  );
};

export default SortByChips;

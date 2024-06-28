import { Box, Button, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import CardItem from "./card-item/CardItem";
import { ICardItem } from "../../assets/types/cards";

function CardsLayout() {
  const [cards, setCards] = useState<ICardItem[]>([]);
  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    setCards([
      {
        id: 0,
        description: "A beautiful scenery.",
        heading: "A scenery 0",
      },
    ]);
  }, []);

  const onAddCardHandler = () => {
    const newCard: ICardItem = {
      id: counter,
      description: "A beautiful scenery.",
      heading: `A scenery ${counter}`,
    };
    setCards((prev) => [newCard, ...prev]);
    setCounter((prev) => prev + 1);
  };

  const onDeleteHandler = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <Stack>
      <Box py={1}>
        <Button variant="contained" size="small" onClick={onAddCardHandler}>
          Add card
        </Button>
      </Box>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
            <CardItem details={card} onDelete={onDeleteHandler} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default CardsLayout;

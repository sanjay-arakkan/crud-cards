import { Box, Button, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import CardItem from "./card-item/CardItem";
import { ICardItem } from "../../assets/types/cards";

function CardsLayout() {
  const [cards, setCards] = useState<ICardItem[]>([]);

  useEffect(() => {
    setCards([
      {
        id: 1,
        description: "desc",
        heading: "heading",
      },
    ]);
  }, []);

  const onAddCardHandler = () => {
    const newCard: ICardItem = {
      id: 100,
      description: "desc",
      heading: "heading",
    };
    setCards((prev) => [newCard, ...prev]);
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
            <CardItem
              description={card.description}
              heading={card.heading}
              imageUri={card?.imageUri}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default CardsLayout;

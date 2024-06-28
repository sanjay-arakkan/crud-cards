import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ICardItem } from "../../../assets/types/cards";

interface CardItemProps {
  details: ICardItem;
  onDelete: (id: number) => void;
}

function CardItem({ details, onDelete }: CardItemProps) {
  const { description, id, heading, imageUri } = details;

  return (
    <Card>
      <CardMedia
        component="img"
        alt="image"
        height="200px"
        image={
          imageUri ? imageUri : "https://images4.alphacoders.com/383/38324.jpg"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Edit</Button> */}
        <Button size="small" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CardItemProps {
  imageUri?: string;
  heading: string;
  description: string;
}

function CardItem({ description, heading, imageUri }: CardItemProps) {
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
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;

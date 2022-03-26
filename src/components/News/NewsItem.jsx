import "./newsitem.css";
import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const NewsItem = ({
  title,
  description,
  link,
  source_id,
  pubDate,
}) => {
  return (
    <div className="news-app">
      <Card
        className="news-item"
        sx={{ maxWidth: 345 }}
        style={{ backgroundColor: "#1E1E1E" }}
      >

        <CardContent className="news-content">
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>

          <Typography variant="subtitle1" >
            {description}
          </Typography>
        </CardContent>

        <CardActions className="news-actions">
          <a href={link} target="_blank">
            <Button size="small">Learn More</Button>
          </a>
          <Typography variant="body1" >
            Source: {source_id}
          </Typography>
          <Typography variant="body2" >
            Published: {pubDate}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsItem;

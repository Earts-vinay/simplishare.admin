import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, IconButton, Box, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomButton from "../Custom/CustomButton";
import fontFamily from "../../utils/fonts";
import colors from "../../utils/colors";

const posts = [
  {
    id: 1,
    date: "DD/MM/YYYY",
    title: "Fun, festive",
    description: "🎉 Get ready to ring in the New Year with the ultimate party of the year! 🥂✨...",
  },
  {
    id: 2,
    date: "DD/MM/YYYY",
    title: "Fun, festive",
    description: "🎉 Get ready to ring in the New Year with the ultimate party of the year! 🥂✨...",
  },
  {
    id: 3,
    date: "DD/MM/YYYY",
    title: "Fun, festive",
    description: "🎉 Get ready to ring in the New Year with the ultimate party of the year! 🥂✨...",
  },
];

const Drafts = () => {
  return (
    <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <Typography sx={{ fontFamily }}> Gen AI / Generate Post / All Posts</Typography>
   
    </Box>
     <Box sx={{ mt: 2, padding: '10px', backgroundColor: 'white', borderRadius: '10px' }}>
    <Grid container spacing={2} sx={{ padding: 3 }}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card sx={{  borderRadius: 2,  boxShadow: 'none',
            border: `1px solid ${colors.semigray}`, }}>
            <CardContent
              sx={{
                backgroundColor: "#f7ede4",
                padding: "10px",
                textAlign: "left",
                fontSize: "14px",
                
                fontFamily
              }}
            >
              Scheduled on : <span style={{ fontWeight: "bold" }}>{post.date}</span>
            </CardContent>
            <CardMedia
              component="div"
              sx={{
                height: 160,
                backgroundColor: "#d3d3d3",
                borderRadius: "4px",
                marginX: "15px",
                marginY:"10px"
              }}
            />
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold",fontFamily }}>
                {post.title}
              </Typography>
              <Typography variant="body2" sx={{py:1,fontFamily}}>{post.description}</Typography>
              <Grid container justifyContent="flex-end" spacing={1} sx={{ marginTop: 1 }}>
                <Grid item>
                  <IconButton size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
    </Container>
  );
};

export default Drafts;

import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Box,
  Divider,
  Stack,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fonts';

// Example data array
const instagramData = [
  {
    id: 1,
    image: '/assets/images/instagram_feed.png',
    date: '27-01-24',
    time: '11:20 am',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    hashtags: '#brandname #onstore #emotion #sales #pricediscount',
    likes: 2885,
    comments: 523,
    shares: 18775,
  },
  {
    id: 2,
    image: '/assets/images/instagram_feed.png',
    date: '27-01-24',
    time: '03:20 pm',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    hashtags: '#brandname #onstore #emotion #sales #pricediscount',
    likes: 2885,
    comments: 523,
    shares: 18775,
  },
  {
    id: 3,
    image: '/assets/images/instagram_feed.png',
    date: '27-01-24',
    time: '03:20 pm',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    hashtags: '#brandname #onstore #emotion #sales #pricediscount',
    likes: 2885,
    comments: 523,
    shares: 18775,
  },
  {
    id: 4,
    image: '/assets/images/instagram_feed.png',
    date: '27-01-24',
    time: '03:20 pm',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    hashtags: '#brandname #onstore #emotion #sales #pricediscount',
    likes: 2885,
    comments: 523,
    shares: 18775,
  },
  // Add more posts here
];

const Instagram = () => {
  return (
    <Grid item xs={12} md={3}>
      <Paper elevation={0} sx={{ p: 1, borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
        <Box sx={{ display: 'flex', alignItems: "center", gap: "10px", marginY:"8px" }}>
          <img src="/assets/icons/instagram.svg" alt="" />
          <Typography variant="h6" sx={{ fontFamily }}>
            Instagram
          </Typography>
        </Box>
        {instagramData.map((post) => (
          <Box key={post.id} sx={{ mb: 1.5, backgroundColor: colors.lightgray, p: 1, borderRadius: "10px" }}>
            <Stack direction="row" spacing={2} alignItems="center" mb={1}>
              <Box>
                <img src={post.image} alt="" style={{ width: "100px", height: "70px", objectFit: "cover" }} />
                <Typography sx={{ fontSize: "9px", color: colors.white, backgroundColor: colors.black, marginTop: "0px", fontFamily, textAlign: "center" }}>
                  {post.date} | {post.time}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "12px", fontFamily }} >{post.description}</Typography>
                <Typography
                  color="textSecondary"
                  sx={{ fontSize: "10px", fontFamily }}
                >
                  {post.hashtags}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "18px" }}>

                  <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                    <img src="/assets/icons/avg_likes.svg" alt="" />
                    <Typography sx={{ fontSize: "13px", paddingLeft: "5px", fontFamily }}>
                      {post.likes}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                    <img src="/assets/icons/engagement.svg" alt="" />
                    <Typography sx={{ fontSize: "13px", paddingLeft: "5px", fontFamily }}>
                      {post.comments}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                    <img src="/assets/icons/reached.svg" alt="" />
                    <Typography sx={{ fontSize: "13px", paddingLeft: "5px" }}>
                      {post.shares}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        ))}
      </Paper>
    </Grid>
  );
};

export default Instagram;

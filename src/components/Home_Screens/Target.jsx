import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fonts';
import Chart from "react-apexcharts";

// Data for stats and chart
const statsData = {
  username: "@target",
  stats: [
    { label: "FOLLOWERS", img: "/assets/icons/followers.svg", value: "6M", change: "1.7%" },
    { label: "FOLLOWING", img: "/assets/icons/following.svg", value: "4.9K", change: "0.3%" },
    { label: "TOTAL POSTS", img: "/assets/icons/total_post.svg", value: "2,884", change: "0.3%" },
    { label: "REELS", img: "/assets/icons/reels.svg", value: "35", change: "1.7%" },
    { label: "STORIES", img: "/assets/icons/stories.svg", value: "1.2K", change: "5.3%" },
    { label: "TAGGED", img: "/assets/icons/tagged.svg", value: "64K", change: "6.3%" },
    { label: "AVG LIKES", img: "/assets/icons/avg_likes.svg", value: "156K", change: "1.7%" },
    { label: "ENGAGEMENT", img: "/assets/icons/engagement.svg", value: "1.9K", change: "1.6%" },
    { label: "REACHED", img: "/assets/icons/reached.svg", value: "252K", change: "0.3%" },
  ],
  chartData: {
    categories: ["November", "December", "January"],
    series: [
      { name: "Followers", data: [80, 60, 70] },
      { name: "Following", data: [40, 50, 30] },
      { name: "Total Posts", data: [70, 90, 50] },
    ],
  },
};

const Target = () => {
  const chartOptions = {
    chart: { type: "area", height: 350, toolbar: { show: false } },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    xaxis: { categories: statsData.chartData.categories },
    colors: ["#6A5ACD", "#FF4500", "#1E90FF"],
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.2 },
    },
    legend: { position: "bottom" },
  };

  const chartSeries = statsData.chartData.series;

  return (
    <Box sx={{width:"33%"}}>
      <Box  sx={{ p: 1, borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px",backgroundColor:colors.white }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/assets/icons/target_icon.svg" alt="" />
          <Typography variant="h6" sx={{fontFamily}}>
            {statsData.username}
          </Typography>
        </Box>
        <Chart options={chartOptions} series={chartSeries} type="area" height={220} />
        <Box sx={{ backgroundColor: colors.lightgray, padding: "7px", borderRadius: "10px",fontFamily }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              border: '2px solid #FF4500',
              backgroundColor: colors.white,
              borderRadius: "10px",
              py: 1,
              
            }}
          >
            {statsData.stats.slice(0, 3).map((stat, index) => (
              <Box key={index}>
                <Box sx={{ display: "flex", gap: "5px", padding: "4px", alignItems: "center" }}>
                  <Typography variant="h6" fontWeight="bold" textAlign="center" sx={{fontFamily}}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" color={colors.darkgray} sx={{fontFamily}} >
                    +{stat.change}
                  </Typography>
                </Box>
               <Box sx={{display:"flex",alignItems:"center",gap:"3px"}}>
               <img src={stat.img} alt={stat.label} style={{ width: "18px", height: "18px" }} />
                <Typography variant="caption" color={colors.red} sx={{fontFamily}}>
                  {stat.label}
                </Typography>
               </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              borderRadius: "10px",
              padding: "5px",
            }}
          >
            {statsData.stats.slice(3, 6).map((stat, index) => (
              <Box key={index}>
                <Box sx={{ display: "flex", gap: "5px", padding: "5px", alignItems: "center" }}>
                 
                  <Typography variant="h6" fontWeight="bold" textAlign="center" sx={{fontFamily}}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" color={colors.darkgray} sx={{fontFamily}}>
                    +{stat.change}
                  </Typography>
                </Box>
                <Box sx={{display:"flex",alignItems:"center",gap:"3px"}}>
               <img src={stat.img} alt={stat.label} style={{ width: "18px", height: "18px" }} />
                <Typography variant="caption" color={colors.darkgray} sx={{fontFamily}}>
                  {stat.label}
                </Typography>
               </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              borderRadius: "10px",
            }}
          >
            {statsData.stats.slice(6, 9).map((stat, index) => (
              <Box key={index}>
                <Box sx={{ display: "flex", gap: "5px", padding: "5px", alignItems: "center" }}>     
                  <Typography variant="h6" fontWeight="bold" textAlign="center" sx={{fontFamily}}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" color={colors.darkgray} sx={{fontFamily}}>
                    +{stat.change}
                  </Typography>
                </Box>
                <Box sx={{display:"flex",alignItems:"center",gap:"3px"}}>
               <img src={stat.img} alt={stat.label} style={{ width: "18px", height: "18px" }} />
                <Typography variant="caption" color={colors.darkgray} sx={{fontFamily}}>
                  {stat.label}
                </Typography>
               </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Target;

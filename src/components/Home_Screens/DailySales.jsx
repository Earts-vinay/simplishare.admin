import React from "react";
import { Box, Card, CardContent, Grid, Typography, Paper } from "@mui/material";
import Chart from "react-apexcharts";
import fontFamily from "../../utils/fonts";
import colors from "../../utils/colors";

const salesData = [
  { store: "Store 1", sales: 688000, returns: 25000 },
  { store: "Store 2", sales: 238000, returns: 15000 },
  { store: "Store 3", sales: 728000, returns: 30000 },
  { store: "Store 4", sales: 728000, returns: 30000 },
  { store: "Store 5", sales: 728000, returns: 30000 },

];

const chartOptions = {
  chart: {
    type: "bar",
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: { position: "top" },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => `${(val / 1000).toFixed(0)}k`,
    style: { colors: ["#000"] },
  },
  xaxis: {
    categories: salesData.map((data) => data.store),
    labels: {
      formatter: (val) => `${(val / 1000).toFixed(0)}k`,
    },
  },
  colors: ["#9b5de5", "#3CC3DF", "#ff6b6b", "#39c5bb", "#94e08a"],
};

const chartSeries = [
  {
    name: "December",
    data: salesData.map((data) => data.sales),
  },
];

const DailySales = () => {
  return (
    <Box sx={{ width: "33%", height: 'calc(100% - 8px)', overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Box sx={{ px: 2,pt:2, flexShrink: 0 }}>
        <Box sx={{ display: 'flex', alignItems: "center", gap: "10px" }}>
          <img src="/assets/icons/daily_sales_icon.svg" alt="" />
          <Typography variant="h6" sx={{ fontFamily }}>
            Daily Sales
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flexShrink: 0 }}>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={250}
        />
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: "auto", maxHeight: 500, px: 2 }}>
        {salesData.map((data, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 0.7,
              paddingX: "10px",
              paddingY: "0px",
              backgroundColor: "#f5f5f5",
              gap: "15px"
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundColor: chartOptions.colors[index],
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
            <CardContent sx={{ padding: "5px !important" }}>
              <Typography sx={{ fontFamily, fontWeight: "bold" }}>
                {data.store}
              </Typography>
              <Typography sx={{ fontFamily, fontSize: "12px" }}>
                Total Sales:{" "}
                <strong>
                  {data.sales.toLocaleString("en-IN")}
                </strong>
              </Typography>
              <Typography sx={{ fontFamily, fontSize: "12px" }}>
                Total Returns:{" "}
                <strong>
                  {data.returns.toLocaleString("en-IN")}
                </strong>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default DailySales;


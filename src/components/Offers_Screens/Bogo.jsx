
import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Switch } from "@mui/material";
import fontFamily from "../../utils/fonts";
import colors from "../../utils/colors";

const offers = [
  { id: 1, title: "5% off up to ₹300.", details: "Applicable for minimum purchase of ₹100.00", active: true },
  { id: 2, title: "10% off up to ₹10000.", details: "Applicable for minimum purchase of ₹10,000.00", active: true },
];

const Bogo = () => {
  const [offerList, setOfferList] = useState(offers);

  const toggleOffer = (id) => {
    setOfferList((prevOffers) =>
      prevOffers.map((offer) =>
        offer.id === id ? { ...offer, active: !offer.active } : offer
      )
    );
  };

  return (
    <>
      {offerList.map((offer) => (
        <Card key={offer.id} sx={{ boxShadow: "none",borderBottom:`1px solid ${colors.lightgray}`,padding:"0px" }}>
          <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",padding:"0px" }}>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" sx={{fontFamily}}>{offer.title}</Typography>
              <Typography  sx={{fontFamily, color:colors.darkgray}}>{offer.details}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center",gap:"50px" }}>
              <Typography sx={{ mr: 1,fontFamily }}>{offer.active ? "Active" : "Inactive"}</Typography>
              <Switch checked={offer.active} onChange={() => toggleOffer(offer.id)} color="error" />
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Bogo;

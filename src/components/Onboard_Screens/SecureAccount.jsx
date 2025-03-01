import React, { useState, useEffect } from "react";
import { Switch, Box, Typography, Button, TextField } from "@mui/material";
import fontFamily from "../../utils/fonts"
import { useLocation } from "react-router-dom";

const SetUpTwoFactor = () => {
  const [authenticatorEnabled, setAuthenticatorEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setAuthenticatorEnabled(false);
    setSmsEnabled(false);
  }, [location.pathname]);

  return (
    <Box>
      <Box sx={{ p: 5 }}>
        <Typography sx={{ textAlign: "center", fontSize: "30px", fontFamily, fontWeight: "bold" }}>
          Setup Two-factor Authentication
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ textAlign: "center", fontSize: "14px", fontFamily, width: "50%", py: 1 }}>
            Enhance your security by setting up two-factor authentication (2FA) using an authenticator app or SMS on your mobile phone.
          </Typography>
        </Box>

        {/* Authenticator App */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 4 }}>
          <Box sx={{ pb: 2 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "500", fontFamily }}>Authenticator App</Typography>
            <Typography sx={{ fontSize: "14px", color: "#999", maxWidth: "400px", fontFamily }}>
              Receive a temporary one-time code using an app like Authy, 1Password, Microsoft Authenticator, or Google Authenticator.
            </Typography>
          </Box>
          <Switch
            checked={authenticatorEnabled}
            onChange={() => {
              setAuthenticatorEnabled(!authenticatorEnabled);
              setSmsEnabled(false);
            }}
            sx={{ "& .MuiSwitch-thumb": { bgcolor: authenticatorEnabled ? "red" : "gray" } }}
          />
        </Box>

        {authenticatorEnabled && (
          <Box sx={{ mt: 2, p: 3, border: "1px solid #EEE", borderRadius: "8px", textAlign: "center" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", fontFamily }}>Enable Two-factor Authentication via App</Typography>
            <Typography sx={{ fontSize: "14px", color: "#666", fontFamily, mt: 1 }}>
              Scan this QR code with the two-factor authentication app on your phone.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <img src="/mnt/data/image1.png" alt="QR Code Setup" style={{ width: "250px" }} />
            </Box>
            <Typography sx={{ mt: 2, fontSize: "14px", fontFamily }}>
              If you can't use QR code, <strong>enter this text code instead.</strong>
            </Typography>
            <TextField value="ARVIND4MX9RC9U2498NN4XNY4N" fullWidth sx={{ mt: 1 }} disabled />
            <TextField placeholder="Enter six-digit code" fullWidth sx={{ mt: 2 }} />
            <Button variant="contained" sx={{ mt: 2, bgcolor: "red" }}>Finish</Button>
          </Box>
        )}

        {/* Text Message */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #EEE", pt: 2, mt: 3 }}>
          <Box>
            <Typography sx={{ fontSize: "20px", fontWeight: "500", fontFamily }}>Text Message</Typography>
            <Typography sx={{ fontSize: "14px", color: "#999", maxWidth: "350px", fontFamily }}>
              Get a one-time unique passcode via SMS (text message).
            </Typography>
          </Box>
          <Switch
            checked={smsEnabled}
            onChange={() => {
              setSmsEnabled(!smsEnabled);
              setAuthenticatorEnabled(false);
            }}
            sx={{ "& .MuiSwitch-thumb": { bgcolor: smsEnabled ? "red" : "gray" } }}
          />
        </Box>

        {smsEnabled && (
          <Box sx={{ mt: 2, p: 3, border: "1px solid #EEE", borderRadius: "8px", textAlign: "center" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", fontFamily }}>Enable Two-factor Authentication via SMS</Typography>
            <Typography sx={{ fontSize: "14px", color: "#666", fontFamily, mt: 1 }}>
              You'll receive an SMS with an authentication code.
            </Typography>
            <TextField placeholder="Enter authentication code" fullWidth sx={{ mt: 2 }} />
            <Button variant="contained" sx={{ mt: 2, bgcolor: "red" }}>Verify Code</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SetUpTwoFactor;

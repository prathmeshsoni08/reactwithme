import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login({ handleClick, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear previous errors
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    let isValid = true;

    // Email validation
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    // Stop if form validation fails
    if (!isValid) {
      return;
    }

    // Hardcoded login credentials
    const correctEmail = "prathmeshsoni810@gmail.com";
    const correctPassword = "12345@Ps";

    // Check credentials
    if (email === correctEmail && password === correctPassword) {
      onLogin();
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Card
        sx={{
          width: "900px",
          maxWidth: "100%",
          display: "flex",
          borderRadius: 2,
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          overflow: "hidden",
        }}
      >
        {/* LEFT SIDE - LOGIN FORM */}
        <CardContent
          sx={{
            width: "50%",
            padding: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              marginBottom: 1,
            }}
          >
            Welcome back
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 3 }}
          >
            Please enter your details
          </Typography>

          {/* Login error */}
          {loginError && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              {loginError}
            </Alert>
          )}

          {/* FORM */}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email address"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              error={Boolean(emailError)}
              helperText={emailError}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              error={Boolean(passwordError)}
              helperText={passwordError}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            {/* Remember + Forgot password */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 1,
              }}
            >
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Remember me"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "14px",
                  },
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: "#673ab7",
                  cursor: "pointer",
                }}
                onClick={() => handleClick("forgetps")}
              >
                Forgot password?
              </Typography>
            </Box>

            {/* Login button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                marginTop: 2,
                padding: 1.3,
                backgroundColor: "#673ab7",
                "&:hover": {
                  backgroundColor: "#512da8",
                },
              }}
            >
              Sign in
            </Button>
          </Box>

          {/* Google button */}
          <Button
            variant="outlined"
            fullWidth
            sx={{
              marginTop: 2,
              padding: 1.3,
              color: "#333",
              borderColor: "#ddd",
            }}
          >
            Sign in with Google
          </Button>

          {/* Sign up */}
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              marginTop: 3,
              color: "text.secondary",
            }}
          >
            Don't have an account?{" "}
            <Box
              component="span"
              sx={{
                color: "#673ab7",
                cursor: "pointer",
                fontWeight: 600,
              }}
              onClick={() => handleClick("signup")}
            >
              Sign up
            </Box>
          </Typography>
        </CardContent>

        {/* RIGHT SIDE - IMAGE */}
        <Box
          sx={{
            width: "50%",
            backgroundColor: "#a88bdd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://illustrations.popsy.co/amber/digital-nomad.svg"
            alt="Login illustration"
            sx={{
              width: "85%",
              height: "85%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default Login;

import { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link } from "react-router-dom";

import signupSchema from "../schemas/signupSchema";

function Signup() {
  // Form values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation errors
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("CREATE ACCOUNT BUTTON CLICKED");

    const formData = {
      fullName,
      email,
      password,
      confirmPassword,
      terms,
    };

    console.log("Form Data:", formData);
    // Validate using Zod
    const result = signupSchema.safeParse(formData);

    // If validation fails
    if (!result.success) {
      console.log("ZOD ERRORS:", result.error);
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        fullName: fieldErrors.fullName?.[0] || "",
        email: fieldErrors.email?.[0] || "",
        password: fieldErrors.password?.[0] || "",
        confirmPassword: fieldErrors.confirmPassword?.[0] || "",
        terms: fieldErrors.terms?.[0] || "",
      });

      return;
    }

    console.log("Signup data:", result.data);
    console.log("Going to login...");

    navigate("/login", { replace: true });
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
          width: "1000px",
          maxWidth: "100%",
          display: "flex",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        }}
      >
        {/* LEFT SIDE - IMAGE */}

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
            alt="Signup illustration"
            sx={{
              width: "85%",
              height: "85%",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* RIGHT SIDE - SIGNUP FORM */}

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
            Create an account
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginBottom: 2,
            }}
          >
            Create your TaskFlow account to get started.
          </Typography>

          {/* FORM */}

          <Box component="form" onSubmit={handleSubmit}>
            {/* Full Name */}

            <TextField
              label="Full name"
              fullWidth
              margin="normal"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />

            {/* Email */}

            <TextField
              label="Email address"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            {/* Password */}

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
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

            {/* Confirm Password */}

            <TextField
              label="Confirm password"
              type={showConfirmPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            {/* Terms and Conditions */}

            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={terms}
                  onChange={(event) => setTerms(event.target.checked)}
                />
              }
              label="I agree to the Terms and Conditions"
              sx={{
                marginTop: 1,
                "& .MuiFormControlLabel-label": {
                  fontSize: "14px",
                },
              }}
            />

            {/* Terms Error */}

            {errors.terms && (
              <Typography
                variant="caption"
                color="error"
                sx={{
                  display: "block",
                  marginTop: -0.5,
                  marginLeft: 1,
                }}
              >
                {errors.terms}
              </Typography>
            )}

            {/* Create Account Button */}

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
              <Link to="/login">Create account</Link>
            </Button>
          </Box>

          {/* Google Signup */}

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
            Sign up with Google
          </Button>

          {/* Login Link */}

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              marginTop: 3,
              color: "text.secondary",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#673ab7",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
export default Signup;

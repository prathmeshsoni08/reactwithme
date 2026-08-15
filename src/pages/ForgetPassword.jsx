import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function ForgotPassword() {
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
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        }}
      >
        {/* LEFT SIDE */}
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
            Forgot password?
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginBottom: 3,
              lineHeight: 1.6,
            }}
          >
            Don't worry. Enter your email address and we'll send you a link to
            reset your password.
          </Typography>

          <TextField
            label="Email address"
            type="email"
            fullWidth
            margin="normal"
          />

          <Button
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
            Send reset link
          </Button>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              marginTop: 3,
            }}
          >
            Remember your password?{" "}
            <Box
              component="span"
              sx={{
                color: "#673ab7",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <Link
                to="/login"
                style={{
                  color: "#673ab7",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Back to login
              </Link>
            </Box>
          </Typography>
        </CardContent>

        {/* RIGHT SIDE */}
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

export default ForgotPassword;

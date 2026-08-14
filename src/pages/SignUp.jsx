import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";

function SignUp({ setOpenPage }) {
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
            alt="Login illustration"
            sx={{
              width: "85%",
              height: "85%",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* RIGHT SIDE - FORM */}
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

          <TextField label="Full name" fullWidth margin="normal" />

          <TextField
            label="Email address"
            type="email"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Confirm password"
            type="password"
            fullWidth
            margin="normal"
          />

          <FormControlLabel
            control={<Checkbox size="small" />}
            label="I agree to the Terms and Conditions"
            sx={{
              marginTop: 1,
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
              },
            }}
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
            Create account
          </Button>

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

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              marginTop: 3,
              color: "text.secondary",
            }}
          >
            Already have an account?{" "}
            <Box
              component="span"
              sx={{
                color: "#673ab7",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => setOpenPage("login")}
            >
              Login
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default SignUp;

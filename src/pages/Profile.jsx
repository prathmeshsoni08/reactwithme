import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function Profile() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f7f5fb",
        padding: 4,
      }}
    >
      {/* PROFILE HEADER */}
      <Card
        sx={{
          borderRadius: 4,
          marginBottom: 3,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: 160,
            backgroundColor: "#673ab7",
            position: "relative",
          }}
        />

        <CardContent
          sx={{
            padding: 4,
            marginTop: -8,
            position: "relative",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "center", md: "flex-end" }}
            justifyContent="space-between"
            spacing={3}
          >
            {/* PROFILE IMAGE */}
            <Box
              sx={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                padding: 1,
                boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
              }}
            >
              <Box
                component="img"
                src="profile.svg"
                alt="Profile"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </Box>

            {/* PROFILE NAME */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h4" fontWeight={700}>
                Prathmesh Soni
              </Typography>

              <Typography color="text.secondary" sx={{ marginTop: 0.5 }}>
                Frontend Developer
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                Building useful and creative web applications with React.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#673ab7",
                "&:hover": {
                  backgroundColor: "#512da8",
                },
              }}
            >
              Edit Profile
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* MAIN CONTENT */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        {/* PERSONAL INFORMATION */}
        <Card
          sx={{
            flex: 2,
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ padding: 4 }}>
            <Typography variant="h5" fontWeight={700} sx={{ marginBottom: 3 }}>
              Personal Information
            </Typography>

            <Stack spacing={2}>
              <TextField
                label="Full Name"
                value="Prathmesh Soni"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />

              <TextField
                label="Email Address"
                value="prathmesh@example.com"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />

              <TextField
                label="Phone Number"
                value="+91 98765 43210"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />

              <TextField
                label="Role"
                value="Frontend Developer"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />

              <TextField
                label="Location"
                value="India"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Stack>

            <Button
              variant="contained"
              sx={{
                marginTop: 3,
                backgroundColor: "#673ab7",
                "&:hover": {
                  backgroundColor: "#512da8",
                },
              }}
            >
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* PROFILE SUMMARY */}
        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ padding: 4 }}>
            <Typography variant="h5" fontWeight={700} sx={{ marginBottom: 3 }}>
              Profile Summary
            </Typography>

            <Stack spacing={2}>
              <Box
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "#f3effc",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Tasks Created
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ color: "#673ab7" }}
                >
                  24
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "#e8f5e9",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Tasks Completed
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ color: "#2e7d32" }}
                >
                  16
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "#fff3e0",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Tasks In Progress
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ color: "#ef6c00" }}
                >
                  8
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      {/* ACCOUNT SECTION */}
      <Card
        sx={{
          marginTop: 3,
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ padding: 4 }}>
          <Typography variant="h5" fontWeight={700}>
            Account
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 1 }}
          >
            Manage your TaskFlow account settings.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ marginTop: 3 }}
          >
            <Button variant="outlined">Change Password</Button>

            <Button
              variant="outlined"
              sx={{
                color: "#d32f2f",
                borderColor: "#d32f2f",
              }}
            >
              Delete Account
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Profile;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function Completed() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f7f5fb",
        padding: 4,
      }}
    >
      {/* HEADER */}
      <Card
        sx={{
          borderRadius: 4,
          padding: 3,
          marginBottom: 3,
          backgroundColor: "#2e7d32",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Box>
            <Typography variant="h4" fontWeight={700}>
              Completed Tasks 🎉
            </Typography>

            <Typography
              variant="body1"
              sx={{
                marginTop: 1,
                opacity: 0.9,
              }}
            >
              Great work! Here are the tasks you have successfully completed.
            </Typography>

            <Typography variant="h3" fontWeight={700} sx={{ marginTop: 2 }}>
              16
            </Typography>

            <Typography variant="body2">Total tasks completed</Typography>
          </Box>

          <Box
            component="img"
            src="completed.svg"
            alt="Completed tasks"
            sx={{
              width: 230,
              maxWidth: "100%",
            }}
          />
        </Stack>
      </Card>

      {/* STATISTICS */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ marginBottom: 3 }}
      >
        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
            backgroundColor: "#e8f5e9",
          }}
        >
          <CardContent>
            <Typography color="text.secondary">Completed Tasks</Typography>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: "#2e7d32",
                marginTop: 1,
              }}
            >
              16
            </Typography>

            <Typography variant="body2">All completed tasks</Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
            backgroundColor: "#e3f2fd",
          }}
        >
          <CardContent>
            <Typography color="text.secondary">Completed This Week</Typography>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: "#1976d2",
                marginTop: 1,
              }}
            >
              7
            </Typography>

            <Typography variant="body2">Tasks completed this week</Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
            backgroundColor: "#fff3e0",
          }}
        >
          <CardContent>
            <Typography color="text.secondary">Completion Rate</Typography>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: "#ef6c00",
                marginTop: 1,
              }}
            >
              67%
            </Typography>

            <Typography variant="body2">Overall task completion</Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* RECENTLY COMPLETED */}
      <Typography variant="h5" fontWeight={700} sx={{ marginBottom: 2 }}>
        Recently Completed
      </Typography>

      <Stack spacing={2}>
        <Card
          sx={{
            borderRadius: 3,
            transition: "0.2s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
            },
          }}
        >
          <CardContent>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              spacing={2}
            >
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  Login Page Design
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  Login page UI was completed successfully.
                </Typography>

                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  Assigned to: <b>Prathmesh</b>
                </Typography>
              </Box>

              <Box
                sx={{
                  textAlign: {
                    xs: "left",
                    sm: "right",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#2e7d32",
                    fontWeight: 700,
                  }}
                >
                  COMPLETED
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  15 August 2026
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        <Card
          sx={{
            borderRadius: 3,
            transition: "0.2s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
            },
          }}
        >
          <CardContent>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              spacing={2}
            >
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  Signup Page
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  Signup form and validation screen completed.
                </Typography>

                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  Assigned to: <b>Prathmesh</b>
                </Typography>
              </Box>

              <Box
                sx={{
                  textAlign: {
                    xs: "left",
                    sm: "right",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#2e7d32",
                    fontWeight: 700,
                  }}
                >
                  COMPLETED
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  14 August 2026
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        <Card
          sx={{
            borderRadius: 3,
            transition: "0.2s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
            },
          }}
        >
          <CardContent>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              spacing={2}
            >
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  Forgot Password Page
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  Password reset screen and navigation completed.
                </Typography>

                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  Assigned to: <b>Prathmesh</b>
                </Typography>
              </Box>

              <Box
                sx={{
                  textAlign: {
                    xs: "left",
                    sm: "right",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#2e7d32",
                    fontWeight: 700,
                  }}
                >
                  COMPLETED
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  13 August 2026
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      {/* BOTTOM MESSAGE */}
      <Card
        sx={{
          marginTop: 3,
          borderRadius: 3,
          backgroundColor: "#ffffff",
        }}
      >
        <CardContent>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
          >
            <Box>
              <Typography variant="h5" fontWeight={700}>
                Keep up the great work! 🚀
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                You have completed 16 tasks so far.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2e7d32",
                "&:hover": {
                  backgroundColor: "#1b5e20",
                },
              }}
            >
              View Tasks
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Completed;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function Dashboard() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f7f5fb",
        padding: 4,
      }}
    >
      {/* WELCOME SECTION */}
      <Card
        sx={{
          borderRadius: 4,
          padding: 3,
          marginBottom: 3,
          backgroundColor: "#673ab7",
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
              Good Morning, Prathmesh 👋
            </Typography>

            <Typography
              variant="body1"
              sx={{
                marginTop: 1,
                opacity: 0.9,
              }}
            >
              Ready to get your work done today?
            </Typography>

            <Button
              variant="contained"
              sx={{
                marginTop: 3,
                backgroundColor: "#ffb74d",
                color: "#222",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#ffa726",
                },
              }}
            >
              Create New Task
            </Button>
          </Box>

          <Box
            component="img"
            src="dashboard.svg"
            alt="Working illustration"
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
            backgroundColor: "#e8e0ff",
          }}
        >
          <CardContent>
            <Typography color="text.secondary">Total Tasks</Typography>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ color: "#673ab7", marginTop: 1 }}
            >
              24
            </Typography>

            <Typography variant="body2">Tasks created</Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
            backgroundColor: "#fff0d9",
          }}
        >
          <CardContent>
            <Typography color="text.secondary">In Progress</Typography>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ color: "#ef6c00", marginTop: 1 }}
            >
              8
            </Typography>

            <Typography variant="body2">Tasks currently active</Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
            backgroundColor: "#dcf5e5",
          }}
        >
          <CardContent>
            <Typography color="text.secondary">Completed</Typography>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ color: "#2e7d32", marginTop: 1 }}
            >
              16
            </Typography>

            <Typography variant="body2">Tasks completed</Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* MAIN CONTENT */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        {/* RECENT ACTIVITY */}
        <Card
          sx={{
            flex: 2,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight={700} sx={{ marginBottom: 2 }}>
              Recent Activity
            </Typography>

            <Stack spacing={2}>
              <Box
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "#f3effc",
                }}
              >
                <Typography fontWeight={600}>Login Page completed</Typography>

                <Typography variant="body2" color="text.secondary">
                  You completed the Login Page task.
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "#fff4e5",
                }}
              >
                <Typography fontWeight={600}>New task assigned</Typography>

                <Typography variant="body2" color="text.secondary">
                  API integration task was assigned to you.
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "#e8f5e9",
                }}
              >
                <Typography fontWeight={600}>Signup page completed</Typography>

                <Typography variant="body2" color="text.secondary">
                  Signup flow was successfully completed.
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        {/* UPCOMING TASKS */}
        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight={700} sx={{ marginBottom: 2 }}>
              Upcoming Tasks
            </Typography>

            <Stack spacing={2}>
              <Box
                sx={{
                  padding: 2,
                  borderLeft: "5px solid #673ab7",
                  backgroundColor: "#f7f3ff",
                }}
              >
                <Typography fontWeight={600}>Design Dashboard</Typography>

                <Typography variant="body2" color="text.secondary">
                  Due tomorrow
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: 2,
                  borderLeft: "5px solid #ff9800",
                  backgroundColor: "#fff8ed",
                }}
              >
                <Typography fontWeight={600}>Connect API</Typography>

                <Typography variant="body2" color="text.secondary">
                  Due in 3 days
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: 2,
                  borderLeft: "5px solid #4caf50",
                  backgroundColor: "#f1f8f2",
                }}
              >
                <Typography fontWeight={600}>Test Application</Typography>

                <Typography variant="body2" color="text.secondary">
                  Due in 5 days
                </Typography>
              </Box>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  marginTop: 1,
                  color: "#673ab7",
                  borderColor: "#673ab7",
                }}
              >
                View All Tasks
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      {/* BOTTOM SECTION */}
      <Card
        sx={{
          marginTop: 3,
          borderRadius: 3,
          backgroundColor: "#fff",
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
                Keep going! 🚀
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                You have completed 67% of your tasks this week.
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
              View Progress
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Dashboard;

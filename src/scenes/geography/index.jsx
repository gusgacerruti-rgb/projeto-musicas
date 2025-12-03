import { Box, useTheme, Paper, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import Popularity from "../../components/Popularity";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockGeographyData } from "../../data/mockData";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Create a list of bands with their countries sorted by listener count
  const bandCountries = mockGeographyData
    .sort((a, b) => b.value - a.value)
    .map((item) => ({
      country: item.id,
      band: item.band,
      listeners: item.value,
    }));

  // Get unique bands with stats
  const bandStats = mockGeographyData.reduce((acc, item) => {
    const existing = acc.find((b) => b.band === item.band);
    if (existing) {
      existing.countries.push(item.id);
      existing.totalListeners += item.value;
    } else {
      acc.push({
        band: item.band,
        countries: [item.id],
        totalListeners: item.value,
      });
    }
    return acc;
  }, []);

  bandStats.sort((a, b) => b.totalListeners - a.totalListeners);

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box display="grid" gridTemplateColumns="2fr 1fr" gap="20px" mb="20px">
        {/* Chart */}
        <Box
          height="75vh"
          border={`1px solid ${colors.grey[100]}`}
          borderRadius="4px"
        >
          <Popularity />
        </Box>

        {/* Band List */}
        <Paper
          sx={{
            background: colors.primary[400],
            borderRadius: "4px",
            overflow: "hidden",
            maxHeight: "75vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ p: 2, background: colors.primary[300], borderBottom: `1px solid ${colors.grey[300]}` }}>
            <Typography variant="h6" sx={{ color: colors.grey[100], fontWeight: "bold" }}>
              Band Popularity
            </Typography>
          </Box>
          <List
            sx={{
              overflowY: "auto",
              flex: 1,
              p: 0,
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: colors.primary[300],
              },
              "&::-webkit-scrollbar-thumb": {
                background: colors.grey[300],
                borderRadius: "4px",
              },
            }}
          >
            {bandStats.map((stat, index) => (
              <Box key={stat.band}>
                <ListItem
                  sx={{
                    py: 1.5,
                    px: 2,
                    "&:hover": {
                      background: colors.primary[300],
                    },
                  }}
                >
                  <Box sx={{ width: "100%" }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.grey[100],
                          fontWeight: "bold",
                          fontSize: "13px",
                        }}
                      >
                        {index + 1}. {stat.band}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.greenAccent[400],
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        {(stat.totalListeners / 1000000).toFixed(2)}M
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colors.grey[300],
                        fontSize: "11px",
                      }}
                    >
                      {stat.countries.length} country{stat.countries.length > 1 ? "ies" : ""}
                    </Typography>
                  </Box>
                </ListItem>
                {index < bandStats.length - 1 && (
                  <Divider sx={{ background: colors.grey[300], opacity: 0.3 }} />
                )}
              </Box>
            ))}
          </List>
        </Paper>
      </Box>

      {/* Detailed Country List */}
      <Paper
        sx={{
          background: colors.primary[400],
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <Box sx={{ p: 2, background: colors.primary[300], borderBottom: `1px solid ${colors.grey[300]}` }}>
          <Typography variant="h6" sx={{ color: colors.grey[100], fontWeight: "bold" }}>
            All Countries & Bands
          </Typography>
        </Box>
        <List
          sx={{
            p: 0,
          }}
        >
          {bandCountries.map((item, index) => (
            <Box key={`${item.country}-${item.band}`}>
              <ListItem
                sx={{
                  py: 1.5,
                  px: 2,
                  "&:hover": {
                    background: colors.primary[300],
                  },
                }}
              >
                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.grey[100],
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      {item.country}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colors.grey[300],
                        fontSize: "12px",
                      }}
                    >
                      {item.band}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.blueAccent[400],
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    {(item.listeners / 1000).toFixed(0)}K
                  </Typography>
                </Box>
              </ListItem>
              {index < bandCountries.length - 1 && (
                <Divider sx={{ background: colors.grey[300], opacity: 0.3 }} />
              )}
            </Box>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Geography;

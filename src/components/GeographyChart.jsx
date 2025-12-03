import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Create unique band list for legend display
  const uniqueBands = [...new Set(data.map((d) => d.band))].sort();
  
  // Map each band to a specific color
  const bandColorMap = {
    "Sleep Token": "#e74c3c",
    "Avenged Sevenfold": "#3498db",
    Korn: "#2ecc71",
    "Imagine Dragons": "#f39c12",
    "Bullet For My Valentine": "#9b59b6",
    "My Chemical Romance": "#1abc9c",
    "Linkin Park": "#e67e22",
    "Bring Me The Horizon": "#34495e",
    "Ratos De Porão": "#c0392b",
  };

  // Transform data to include colors based on band
  const processedData = data.map((item) => ({
    ...item,
    bandColor: bandColorMap[item.band] || "#95a5a6",
  }));

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <ResponsiveChoropleth
        data={processedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        colors="nivo"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        borderWidth={1.5}
        borderColor="#ffffff"
        tooltip={({ feature }) => {
          const geoData = data.find((d) => d.id === feature.id);
          return (
            <div
              style={{
                background: colors.primary[400],
                padding: "8px 12px",
                borderRadius: "4px",
                border: `1px solid ${colors.grey[300]}`,
              }}
            >
              <strong>{feature.properties.name}</strong>
              <br />
              {geoData && (
                <>
                  Band: <strong>{geoData.band}</strong>
                  <br />
                  Listeners: <strong>{geoData.value.toLocaleString()}</strong>
                </>
              )}
            </div>
          );
        }}
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 8,
                  itemWidth: 150,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemTextColor: colors.grey[100],
                  itemOpacity: 0.85,
                  symbolSize: 16,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#ffffff",
                        itemOpacity: 1,
                      },
                    },
                  ],
                  data: uniqueBands.map((band) => ({
                    id: band,
                    label: band,
                    color: bandColorMap[band] || "#95a5a6",
                  })),
                },
              ]
            : undefined
        }
      />
    </div>
  );
};

export default GeographyChart;

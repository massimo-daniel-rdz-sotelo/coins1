import { useContext } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ContexAutor } from "../context/ContexAutor";

export const Favorites = () => {
  const navigate = useNavigate();
  const { favoriteCoins, toggleFavorite } = useContext(ContexAutor);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        Monedas Favoritas
      </Typography>

      {favoriteCoins.length === 0 ? (
        <Typography align="center" color="text.secondary">
          Todavía no tienes monedas favoritas.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {favoriteCoins.map((coin) => (
            <Card
              key={coin.id}
              elevation={2}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: 3,
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <IconButton
                aria-label={`Quitar ${coin.name} de favoritos`}
                aria-pressed="true"
                onClick={() => toggleFavorite(coin)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 1,
                  color: "white",
                  backgroundColor: "#9333ea",
                  "&:hover": {
                    backgroundColor: "#7e22ce",
                  },
                }}
              >
                <StarIcon />
              </IconButton>
              <CardActionArea
                onClick={() => navigate("/detail/" + coin.id)}
                sx={{
                  p: 3,
                  pt: 6,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  component="img"
                  src={coin.image}
                  alt={coin.name}
                  sx={{
                    width: 72,
                    height: 72,
                    objectFit: "contain",
                    mx: "auto",
                    mb: 2,
                  }}
                />
                <CardContent sx={{ p: 0, width: "100%" }}>
                  <Typography variant="h6" fontWeight="bold" noWrap>
                    {coin.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "medium",
                      mb: 1,
                    }}
                  >
                    {coin.symbol}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary.main"
                    fontWeight="bold"
                  >
                    ${coin.current_price?.toLocaleString()} USD
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
};

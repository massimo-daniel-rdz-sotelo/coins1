import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ContexAutor } from "../context/ContexAutor";

export const Home = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const { favoriteCoins, setFavoriteCoins, toggleFavorite } =
    useContext(ContexAutor);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }

        return response.json();
      })

      .then((data) => {
        setCoins(data);
        setFavoriteCoins((currentFavorites) =>
          currentFavorites
            .map((favorite) =>
              typeof favorite === "string"
                ? data.find((coin) => coin.id === favorite)
                : favorite,
            )
            .filter(Boolean),
        );
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, [setFavoriteCoins]);

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
        Criptomonedas
      </Typography>

      {/* Grilla CSS estricta: 4 columnas exactas e iguales en pantallas medianas/grandes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // 1 columna en celulares
            sm: "repeat(2, 1fr)", // 2 columnas en tablets
            md: "repeat(4, 1fr)", // EXACTAMENTE 4 columnas en escritorio
          },
          gap: 3, // Espaciado simétrico entre tarjetas
        }}
      >
        {coins.map((coin) => {
          const isFavorite = favoriteCoins.some(
            (favorite) =>
              (typeof favorite === "string" ? favorite : favorite.id) ===
              coin.id,
          );

          return (
          <Card
            key={coin.id}
            elevation={2}
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: 3,
              position: "relative",
              height: "100%", // Garantiza la misma altura en todas las tarjetas
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
              aria-label={
                isFavorite
                  ? `Quitar ${coin.name} de favoritos`
                  : `Añadir ${coin.name} a favoritos`
              }
              aria-pressed={isFavorite}
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
              {isFavorite ? <StarIcon /> : <StarBorderIcon />}
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
                <Typography variant="h6" color="primary.main" fontWeight="bold">
                  ${coin.current_price?.toLocaleString()} USD
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          );
        })}
      </Box>
    </Container>
  );
};

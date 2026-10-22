import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Container,
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Paper,
} from "@mui/material";

export const Detail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los detalles de la moneda");
        }
        return response.json();
      })
      .then((data) => {
        setCoin(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  if (!coin) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  const priceChange = coin.market_data?.price_change_percentage_24h || 0;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
        <CardContent sx={{ p: 4 }}>
          {/* Encabezado: Avatar, Nombre, Símbolo y Rank */}
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Avatar
              src={coin.image?.large}
              alt={coin.name}
              sx={{ width: 64, height: 64 }}
            />
            <Box flexGrow={1}>
              <Typography variant="h4" component="h1" fontWeight="bold">
                {coin.name}{" "}
                <Typography
                  component="span"
                  variant="h6"
                  color="text.secondary"
                >
                  ({coin.symbol?.toUpperCase()})
                </Typography>
              </Typography>
              <Chip
                label={`Ranking #${coin.market_cap_rank ?? "N/A"}`}
                color="primary"
                size="small"
                sx={{ mt: 0.5 }}
              />
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Tarjetas informativas de mercado */}
          <Typography variant="h6" gutterBottom fontWeight="medium">
            Información de Mercado
          </Typography>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="text.secondary">
                Precio Actual
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                ${coin.market_data?.current_price?.usd?.toLocaleString()} USD
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="text.secondary">
                Capitalización de Mercado
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                ${coin.market_data?.market_cap?.usd?.toLocaleString()} USD
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="text.secondary">
                Cambio en 24 Horas
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                color={priceChange >= 0 ? "success.main" : "error.main"}
              >
                {priceChange > 0
                  ? `+${priceChange.toFixed(2)}%`
                  : `${priceChange.toFixed(2)}%`}
              </Typography>
            </Grid>
          </Grid>

          {/* Sección de Descripción Mejorada */}
          {coin.description?.en && (
            <Paper
              elevation={0}
              sx={{
                mt: 4,
                p: 3,
                backgroundColor: "#f8fafc",
                borderRadius: 3,
                border: "1px solid #e2e8f0",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                sx={{ mb: 1.5 }}
              >
                Acerca de {coin.name}
              </Typography>

              <Divider sx={{ mb: 2.5 }} />

              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
                sx={{
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                  maxHeight: "350px", // Limita el alto si el texto es excesivamente largo
                  overflowY: "auto",
                  pr: 1.5,
                  // Estilos para las etiquetas HTML dentro del texto de CoinGecko
                  "& p": {
                    mb: 2,
                    "&:last-child": { mb: 0 },
                  },
                  "& a": {
                    color: "primary.main",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "color 0.2s",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "primary.dark",
                    },
                  },
                  // Barra de scroll personalizada
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#cbd5e1",
                    borderRadius: "10px",
                  },
                }}
                dangerouslySetInnerHTML={{ __html: coin.description.en }}
              />
            </Paper>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

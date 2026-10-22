import React from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const About = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Botón opcional para regresar */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        sx={{ mb: 3, textTransform: "none", fontWeight: "bold" }}
      >
        Volver al Inicio
      </Button>

      {/* Contenedor / Div Principal de la vista About */}
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, sm: 5, md: 6 },
          borderRadius: 5,
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          border: "1px solid #e2e8f0",
          boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
        }}
      >
        {/* Encabezado */}
        <Box textAlign="center" mb={5}>
          <Chip
            label="Acerca de la Plataforma"
            color="primary"
            variant="outlined"
            sx={{ mb: 2, fontWeight: "bold" }}
          />
          <Typography
            variant="h3"
            component="h1"
            fontWeight="800"
            sx={{
              background: "linear-gradient(45deg, #1976d2, #9c27b0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "700px", mx: "auto", fontWeight: 400 }}
          >
            Tu panel centralizado para explorar, monitorear y analizar el
            mercado cripto en tiempo real.
          </Typography>
        </Box>

        {/* Sección destacada: Para qué sirve la página */}
        <Box
          sx={{
            p: { xs: 3, sm: 4 },
            mb: 6,
            backgroundColor: "#0f172a",
            color: "#ffffff",
            borderRadius: 4,
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.3)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            color="#38bdf8"
          >
            ¿Para qué sirve esta página?
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, opacity: 0.9, fontSize: "1.05rem" }}
          >
            Esta aplicación web permite consultar de forma rápida e intuitiva el
            estado del mercado de criptomonedas. Está diseñada para ofrecer
            información financiera clave en dólares (USD), desde precios
            actualizados y variaciones en las últimas 24 horas hasta la
            capitalización de mercado y descripciones históricas de cada activo
            digital.
          </Typography>
        </Box>

        {/* Módulos de Funcionalidades */}
        <Typography variant="h5" fontWeight="bold" align="center" mb={4}>
          ¿Qué puedes hacer aquí?
        </Typography>

        <Grid container spacing={3} mb={6}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 3,
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                textAlign: "center",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#e0f2fe",
                  color: "#0284c7",
                  width: 56,
                  height: 56,
                  mx: "auto",
                  mb: 2,
                }}
              >
                <ShowChartIcon fontSize="large" />
              </Avatar>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Precios al Momento
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monitorea el valor actual en USD de las principales
                criptomonedas del mercado en una cuadrícula clara.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 3,
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                textAlign: "center",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#f3e8ff",
                  color: "#9333ea",
                  width: 56,
                  height: 56,
                  mx: "auto",
                  mb: 2,
                }}
              >
                <StorageIcon fontSize="large" />
              </Avatar>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Análisis Individual
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Haz clic en cualquier moneda para examinar su ranking,
                porcentaje de cambio y trasfondo en detalle.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 3,
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                textAlign: "center",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#dcfce7",
                  color: "#16a34a",
                  width: 56,
                  height: 56,
                  mx: "auto",
                  mb: 2,
                }}
              >
                <SecurityIcon fontSize="large" />
              </Avatar>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Datos Verificados
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Información obtenida directamente de la API pública y oficial de
                CoinGecko.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Stack de Tecnologías */}
        <Box textAlign="center" pt={2}>
          <Typography
            variant="caption"
            color="text.secondary"
            fontWeight="bold"
            sx={{ letterSpacing: 1.5, display: "block", mb: 2 }}
          >
            TECNOLOGÍAS DE LA APLICACIÓN
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            gap={1}
          >
            <Chip
              label="React"
              size="small"
              variant="outlined"
              color="primary"
            />
            <Chip
              label="Material UI (MUI)"
              size="small"
              variant="outlined"
              color="primary"
            />
            <Chip
              label="React Router"
              size="small"
              variant="outlined"
              color="primary"
            />
            <Chip
              label="CoinGecko API"
              size="small"
              variant="outlined"
              color="primary"
            />
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

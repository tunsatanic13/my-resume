import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  Toolbar,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";
import { typePhoneNumber, FormantPhoneNumber } from "../Components/MaskedInput";

export const PageHome = () => {
  const [state, setState] = React.useState<{
    value: string;
    fristTick: number;
    lastTick: number;
    numberLength: number;
  }>({
    value: "",
    fristTick: 3,
    lastTick: 6,
    numberLength: 10,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, ...typePhoneNumber(event.target.value) }));
    const formattedPhoneNumber = FormantPhoneNumber(
      event.target.value,
      state.fristTick,
      state.lastTick,
      state.numberLength
    );
    setState((s) => ({ ...s, value: formattedPhoneNumber }));
  };

  return (
    <Container maxWidth="md">
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Comany Name
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "50vh" }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              แบบฟอร์มกรอกเบอร์โทรศัพท์
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <TextField
                id="outlined-basic"
                label="Telephone"
                variant="outlined"
                onChange={handleChange}
                value={state.value}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => setState((s) => ({ ...s, value: "" }))}
            >
              Clear
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default PageHome;

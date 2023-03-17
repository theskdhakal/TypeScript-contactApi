import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./App.css";
import { ContactList } from "./components/ContactList";
import { useApi } from "./hooks/useApi";
import React from "react";
import CircularStatic from "./components/LoadingSpin";

//types:number,string,  boolean, object,array[], ()=>void,any
// const Func (a:number, b:number)=>{

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  const { data, loading, error, fetchContact } = useApi();

  React.useEffect(() => {
    fetchContact();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"center"}
        flexWrap={"wrap"}
        alignItems={"center"}
        gap={2}
        mt={4}
      >
        {data?.map((item) => (
          <ContactList key={item.id} item={item} />
        ))}
        {loading && <CircularStatic />}
        {error && <Typography>asdadsf</Typography>}
      </Stack>
    </ThemeProvider>
  );
}

export default App;

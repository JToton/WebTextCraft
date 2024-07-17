const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Update the path to use path.join for cross-platform compatibility
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ensure all routes are handled by the client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

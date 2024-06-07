import express from "express";
import "dotenv/config";
import path from "path";
const app = express();
const port = process.env.PORT || 5500;

// Ejs Configuration
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/dashboard", (req, res) => {
  res.render("pages/dashboard");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

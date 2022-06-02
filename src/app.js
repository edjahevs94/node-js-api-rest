import express from "express";
import projectsRoutes from "./routes/projects.routes.js"
import tasksRoutes from "./routes/tasks.routes.js"

const app = express();

//añadir middlewares para poder entender los objetos json
//que me puede enviar el cliente en formato body
app.use(express.json());

app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;
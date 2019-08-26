const express = require("express");

const server = express();

server.use(express.json());

let requestsNumber = 0;
const projects = [];

//crud - create[post], read[get], update[put], delete[delete]

//Middleware que checa se o projeto existe
function checkProjectsExists(req, res, next) {
	const { id } = req.params;
	const exist = projects.find(p => p.id == id);
	if (!exist) {
		return res.status(400).send({ error: "Projeto não encontrado" });
	}
	return next();
}

//Contador de log no numeros de requisições de projetos
function logRequest(req, res, next) {
	requestsNumber++;
	console.log(`Número de requisições foi de: ${requestsNumber}`);
	return next();
}

server.use(logRequest);

// A rota recebe um id e title dentro do corpo de cadastrar um novo projeto dentro de um array;
server.post("/projects", (req, res) => {
	const { id, title } = req.body;
	projects.push({ id, title, tasks: [] });
	return res.send(projects);
});

// Rota que lista todos projetos e suas tarefas;
server.get("/projects", (req, res) => {
	return res.json(projects);
});

// A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;
server.put("/projects/:id", checkProjectsExists, (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	const projectsPut = projects.find(p => p.id == id);
	projectsPut.title = title;
	return res.send(projectsPut);
});

// A rota deve deletar o projeto com o id presente nos parâmetros da rota;
server.delete("/projects/:id", checkProjectsExists, (req, res) => {
	const { id } = req.params;
	const DelProject = projects.findIndex(p => p.id == id);
	projects.splice(DelProject, 1);
	return res.send();
});

// A rota recebe um campo title e armazena uma nova tarefa no array de tarefas de um projeto especifico;
server.post("/projects/:id/tasks", checkProjectsExists, (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	const PostProject = PostProject.find(p => p.id == id);
	projects.tasks.push(title);
	return res.json(projects);
});

server.listen(3000);

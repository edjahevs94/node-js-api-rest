import {Project} from "../models/Project.js"
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const projects = await Project.findAll();
        //console.log(projects)
        res.json(projects);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}

export const getProject = async (req, res) => {
    try {
        const {id} = req.params;
        const project= await Project.findOne({
            where: {
                id : id
            }
        })
        if (!project) return res.status(404).json({message : 'Project does not exist'});

        res.json(project);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}

export const createProject = async (req, res) => {
    
    try {
        const {name, priority, description} = req.body;
        const newProject= await Project.create({
            name: name,
            description: description,
            priority: priority
        })

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newProject);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
    
}

export const updateProject = async (req,res) => {
    
    try {
        const {id} = req.params;
        const {name, priority, description} = req.body;

        //console.log(id);
        //console.log(req.body);
        //res.send('updating projects');
        const project= await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        //para guardar las modificaciones al objeto en la base de datos
        await project.save();
        res.json({message: "Project Updated"});
    } catch (error) {
       return res.status(500).json({message: error.message}); 
    }
    
}

export const deleteProject = async (req,res) => {
    try {
        console.log(req.params.id);
        const {id} = req.params;
        await Project.destroy({
            where: {
                id : id
            }
        });
        res.json({message: "Project Deleted"});
        
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    
}

export const getProjectTasks = async (req, res) => {
    try {
        const {id} = req.params;
        const tasks = await Task.findAll({
            where : {
                projectId : id
            }
        })
        
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    
}

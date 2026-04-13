const Project = require("../models/project.model");

// CREATE PROJECT
exports.createProject = async (req, res) => {

  try {

    const project = await Project.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json(project);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};


// GET ALL PROJECTS
exports.getProjects = async (req, res) => {

  try {

    const projects = await Project.find();

    res.json(projects);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// GET SINGLE PROJECT
exports.getProjectById = async (req, res) => {

  try {

    const project = await Project.findById(req.params.id);

    res.json(project);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// UPDATE PROJECT
exports.updateProject = async (req, res) => {

  try {

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(project);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// DELETE PROJECT
exports.deleteProject = async (req, res) => {

  try {

    await Project.findByIdAndDelete(req.params.id);

    res.json({ message: "Project deleted successfully" });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

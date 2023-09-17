import { Task } from "../models/task.js"
export const newTask = async (req, res, next) => {
    const { title, description } = req.body;

    await Task.create({
        title,
        description,
        user: req.user,
    });

    res.status(201).json({
        sucess: true,
        message: "Task Created Sucessfully",
    });
};

export const myTask = async (req, res) => {
    const userid = req.user._id;

    const task = await Task.find({ user: userid });

    res.status(200).json({
        sucess: true,
        task,
    });
};

export const updateTask = async (req, res, next) => {

    const task = await Task.findById(req.params.id);

    if (!task)
        return res.json({
            sucess: false,
            message: "Invalid Id",
        });

            task.isCompleted = !task.isCompleted;

    await task.save();

    res.status(200).json({
        sucess: true,
        message: "task updated",
    });
};

export const deleteTask = async (req, res, next) => {

    const task = await Task.findById(req.params.id);

    if (!task)
        return res.status(404).json({
            sucess: false,
            message: "Invalid Id",

        });
    await task.deleteOne();

    res.status(200).json({
        sucess: true,
        message: "task deleted"
    });
};
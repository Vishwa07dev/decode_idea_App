/**
 * Write the logic to create the controllers for the idea reesoures
 */
const ideas = require("../models/ideas.model")

let id = 3 //initial count of the id

/**
 * Create the controller for fetching all the ideas
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 * Return list of all the ideas
 */

exports.getAllIdeas = (req,res)=>{

    // First read all the ideas from the idea model file

    //return all those ideas
    res.status(200).send(ideas)

}

/**
 * Controller that fetches idea based on the id
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas/2
 */
exports.getIdeaBasedOnId = (req, res)=>{

    //We need to first read the idea id from the req path param
    idea_id = req.params.id

    // Using id, check if the idea with that id is present
    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }else{
        res.status(404).send({
            message : "Idea with the given idea id not found"
        })
    }

    //If preset return the id
}

/**
 * Controller to create a new idea
 */
exports.createIdea = (req, res)=>{

    // I need to read the request body
    idea_object = req.body
    id++
    idea_object["id"] = id  //setting the id in the new created idea object
    ideas[id] = idea_object

    // Add the new object provided in the ideas object

    // Return the response
    res.status(201).send(idea_object)
}

/**
 * Controller for updating the idea
 */
exports.updateIdea = (req, res)=>{
  
    //Read the idea id
    idea_id = req.params.id

    //Check if that idea id is present
    if(ideas[idea_id]){
        idea_obj = req.body
        ideas[idea_id] = idea_obj
        res.status(200).send(idea_obj)

    }else{
        return res.status(404).send({
            message : "Idea id you wanted to update doesn't exist!"
        })
    }

    // Read the new idea body and replace it

    // Return the updated idea

}

exports.deleteIdea = (req, res)=>{

    //Fetch the idea and see if it's present
    idea_id = req.params.id

    if(ideas[idea_id]){
        delete ideas[idea_id]
        res.status(200).send({
            message : "Yay, you idea has been successfully deleted"
        })
    }else{
       return res.status(404).send({
        message : "Idea id you wanted to delete is already not present boss !"
       })
    }

   
}
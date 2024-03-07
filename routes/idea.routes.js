
const idea_controller = require("../controllers/idea.contollers")

/**
 * Route for 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 */

module.exports = (app)=>{

    app.get("/ideaApp/api/v1/ideas",idea_controller.getAllIdeas)

}
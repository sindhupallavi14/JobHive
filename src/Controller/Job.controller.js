export default class JobController{
    getHomePage(req,res)
    {
      res.render("HomePage");
    }

    getJobs(req,res){
      res.render("Jobs")
    }

    getRegisterForm(Req,res){
      res.render("register")
    }
}
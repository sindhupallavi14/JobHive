export default class JobController{
    getHomePage(req,res)
    {
      res.render("HomePage");
    }

    getJobs(req,res){
      res.render("Jobs")
    }
    getRegisterForm(req,res){
      res.render("register")
    }

    getLoginForm(req,res)
    {
       res.render("login")
    }

    getJobDetails(req,res)
    {
       res.render("Job-Details")
    }

    getApplicants(req,res)
    {
      res.render("Applicants")
    }
}
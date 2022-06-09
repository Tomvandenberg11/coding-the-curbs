export const errorRoute = async (req, res) =>{
    res.render("error", {
      title: "There was a problem loading the application",
    });
  }
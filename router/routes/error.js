export const errorRoute = async (req, res) =>{
    res.render("error", {
      title: "There is an error"
    });
  }
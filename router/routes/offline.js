export const offlineRoute = async (req, res) =>{
  res.render("offline", {
    title: "You are Offline"
  });
}
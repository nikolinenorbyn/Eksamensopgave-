
//Gør sådan så at jeg kan slette matchet
router.delete("/", (req, res) => {
    
    matchView.myMatch = []
    res.json({"message": "Du har slettet dit match"})
});

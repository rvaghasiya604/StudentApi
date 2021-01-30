const express = require('express');
const Student = require('./model/student');
const router = express.Router();

router.get("/students",async (req,res)=>{

    const student = await Student.find();
    res.send(student);
});


router.post("/students",async(req,res)=>{
    try {
        const student = new Student({
            name:req.body.name,
            ERNO:req.body.ERNO,
            Study:req.body.Study,
            Marks:req.body.Marks,
            City:req.body.City,
            Contact:req.body.Contact
    
        });
    
        await student.save();
        res.send(student);
    } catch (error) {
        res.status(400).send(error);
    }
    
});


router.patch("/students/:id",async(req,res)=>{
    try {

        const student = await Student.findOne({_id:req.params.id});
        student.name = req.body.name;
        student.ERNO = req.body.ERNO;
        student.Study = req.body.Study;
        student.Marks = req.body.Marks;
        student.City = req.body.City;
        student.Contact = req.body.Contact;


        await student.save();
        res.send(student);

    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete("/students/:id",async(req,res)=>{

    try {
        await Student.deleteOne({_id:req.params.id});
        res.send("deleted");

    } catch (error) {
        res.status(404).send({error:"Student is not found!!"});
        
    }
});

module.exports = router;
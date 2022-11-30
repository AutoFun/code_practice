// Do
// function doThing(){

// }

// doThing()

// const items=[1,2,3]
// items.forEach(console.log)

// const m=new Map()
// const a=[1,2,3]
// [...m.values()].forEach(console.log)

// const count=2
// (function doSomething(){
//     //do something amazing
// })

// class SomeClassExample{
//     static STATIC_PROPERTY="value";
// }

// function doSomething(){
//     const someConstExample="immutable value";
//     let someConstExample="mutable value";
// }


/**
 * 
 * Analysis the codebase of gourp 4 BE
 * 
 * class.js
 * 
 * node.js
 * 
 * Koa.js :ctx
*/
exports.index= async(ctx)=>{
    const findResult=await Course.find();
    findResult.map((item)=>{});

    ctx.body=findResult;
}

exports.store=async(ctx)=>{
    const {body} =ctx.request;
    const latest=await Course.find().sort({_id:-1}).limit(1)
    let newId=''
    if(latest.length!==0){
        const latestId=latest[0]._id
        newId='${latestId*1+1}'
    } else {
        newId='1'
    }
    const newData={
        ...body,id:newId  //the last two: body, id
    }
    const course=new Course(newData);
    try {
        const courseInfo= await course.save();
        ctx.status=201;
        ctx.body=courseInfo;
    } catch(e){
        ctx.body;
    }
};

const Course= require("..//../../model/class");
const User= require("..//../../model/user");
const StudentEnrollment= require("..//../../model/studentClassEnrollment");
const Teacher = require('../../../model/teacher')
const Classroom = require('../../../model/Classroom')
const Lesson = require('../../../model/Lesson')
const TeacherAllocation = require('../../../model/teacherAllocation')

/**
 * Course
 * User
 * StudentEnrollment
 * Teacher
 * Classroom
 * Lesson
 * TeacherAllocation
 * 
 * User : Teacher,Student
 * Course:
 * Lesson:
 * Classroom
*/

exports.delete=async(ctx)=>{
    const {id}=ctx.params;
    const {n}=await Course.deleteOne({id:id});
    const {b}=await Lesson.deleteMany({classId:id});
    const {c}=await TeacherAllocation.deleteOne({classId:id});
    const {d}=await StudentEnrollment.deleteMany({course_id:id});

    if(n===0){
        ctx.body={
            message:`${id} not found`,
        };
        ctx.status=404;
    } else{
        ctx.body{
            message:`${id} deleted!`,
        };
    }
};

exports.show= async(ctx)=>{
    const {id}=ctx.params; // ctx.params, ctx is very important in Koa.js
    const searchResult=await Course.find({id:id}); //[] or {}
    ctx.body=searchResult;
};


/**
 * 
 * getClassesByTeacher
 * 
 * Course.aggregate
 * 
 * $match
 * $project
 * $lookup
 * 
 * 
*/
exports.getClassesByTeacher=async(ctx)=>{
    const {id}=ctx.params;
    try{
        const res=await Course.aggregate([  // Course.aggregate : 
            {
                $match: {  //$match
                  teacher_id:id
                }
              },
              {
                $lookup: {   //$lookup
                  from: 'teachers',
                  localField: 'teacher_id',
                  foreignField: 'id',
                  as: 'teachers',
                }
              },
              {
                $lookup: {
                  from: 'classrooms',
                  localField: 'classRoom_id',
                  foreignField: 'id',
                  as: 'classrooms',
                }
              },
              {
                $project: { //$project : should be the output set
                  _id:1,
                  id:1,
                  name:1,
                  start_date:1,
                  end_date:1,
                  teachers: {
                    id:1,
                    name:1,
                  },
                  classrooms: {
                    id:1,
                    name:1,
                  }
                }
              }
        ])

        if(!res){
            ctx.body={
                message:"404 not found"
            }
            ctx.status=404;
        } else{
            ctx.body=res;
        }catch(e){
            ctx.body=3;
        }
    }
}




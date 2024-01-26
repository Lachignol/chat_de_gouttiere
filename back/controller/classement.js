const Courses = require("../model/course");
const ChronoUsers = require("../model/chrono_user");

exports.getClassement = async (req, res) => {
  try {
    let id = req.params.id;
    let allFinalTime = await Courses.findById(id);
    const createObjectClassementUsers = allFinalTime.chrono.map((el) => {
      const obj = {};
      obj["userName"] = el.userName;
      obj["userId"] = el.userId;
      obj["finaleTime"] = el.finaleTime;
      return obj;
    });

    const classementUsers = createObjectClassementUsers.sort((a, b) =>
      a.finaleTime > b.finaleTime ? 1 : -1
    );
    // a utiliser pour ordre decroissant .sort((a, b) => a - b)
    console.log(classementUsers);
    res.status(200).json(classementUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

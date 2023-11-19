import { validationResult } from "express-validator";
import { Users } from "./../../models/users.model.js";

const appControllers = {
  getStartPage(req, res) {
    res.render("form", {
      title: "my title",
      greeting: "",
    });
  },

  async getUser(req, res) {
    const user = await Users.findOne({
      where: {
        id: req.query.get_id,
      },
    });

    res.status(200).send(user.name);
  },

  async addUser(req, res) {
    const errors = validationResult(req);

    try {
      if (!errors.isEmpty()) {
        res.render("form", {
          title: "Registration form",
          errors: errors.array(),
          data: req.body,
        });
      } else {
        //   res.send('Thank you for your registration!');
        await Users.create({
          name: req.body.name,
          email: req.body.email,
        });
        res.status(200).render("layout", {
          title: "layout page",
          greeting: "Thank you for your registration!",
        });
      }
    } catch (err) {
      console.error(err);
    }

    // if (errors.isEmpty()) {
    // //   res.send('Thank you for your registration!');
    //   res.render('layout', {
    //     title: 'Intro page',
    //     greeting: 'Thank you for your registration!',
    //   });
    // } else {
    //   res.render('form', {
    //     title: 'Registration form',
    //     errors: errors.array(),
    //     data: req.body,
    //   });
    // }
  },
};

export { appControllers };

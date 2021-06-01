import { User } from '../model/user.js';

export const postUserController = async (req, res) => {
  const { firstName, email, password } = req.body;
  //get user info

  try {
    const newUser = new User({
      firstName,
      email,
      password,
    });
    const res = await newUser.save()

    if (res) {
      return res.json({
        status: 'success',
        message: 'Created successfully',
        data: res,
      });
    }
    res.status(500).json({
      status: 'fail',
      message: 'Opps!! something went wrong',
    });
  } catch (err) {
    console.log(err);
  }
};

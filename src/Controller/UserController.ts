import { Request, Response } from 'express';
import User from '../Schema/user';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();
    return res.json(users);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const user = await User.find({ _id: req.params.id });
    return res.json(user);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body);
    return res.json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });

    return res.json(user);
  }

  public async destroy(req: Request, res: Response): Promise<any> {
    await User.findOneAndDelete({ _id: req.params.id });
  }
}

export default new UserController();

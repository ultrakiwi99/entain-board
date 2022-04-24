import {Express, Request, Response} from "express";
import {DBStorage} from "../../types/types";

export const registerApiRoutes = (app: Express, storage: DBStorage) => {
  app.post('/login', async (req: Request, res: Response) => {
    const {name} = req.body;
    if (name) {
      storage.addUser(name);
      res.status(200);
    } else {
      res.status(400);
    }

    res.end();
  });
}

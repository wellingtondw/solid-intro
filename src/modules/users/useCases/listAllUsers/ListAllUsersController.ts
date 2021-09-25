import { Request as ExpressRequest, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest extends ExpressRequest {
  headers: {
    user_id: string;
  };
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: IRequest, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.json(users);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };

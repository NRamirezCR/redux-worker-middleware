import { Middleware } from "redux";

declare function createWorkerMiddleware(
  worker: Worker,
  meta?: string
): Middleware;
export default createWorkerMiddleware;

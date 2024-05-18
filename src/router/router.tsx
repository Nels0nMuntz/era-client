import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import { Board, NotFound, Participants, Registration } from "@/pages";
import { APP_PATHS } from "./paths";

export const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />}>
      <Route path={APP_PATHS.board.path} element={<Board />} />
      <Route path={APP_PATHS.registration.path} element={<Registration />} />
      <Route path={APP_PATHS.participants.path} element={<Participants />} />
      <Route path='/' element={<Navigate to={APP_PATHS.board.path} replace />} />
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

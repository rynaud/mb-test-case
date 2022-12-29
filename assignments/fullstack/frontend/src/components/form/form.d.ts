import { Dispatch, SetStateAction } from "react";
import { Socket } from "socket.io-client";

export interface FormTypes {
  username: String;
  message: String;
  type: Boolean;
}

export interface FormFunctionTypes {
  socket: Socket;
  setData: Dispatch<SetStateAction<FormTypes[]>>;
}

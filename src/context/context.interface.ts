import { Context } from "telegraf";

export interface SessionData{
  numberRequested: boolean
  userName: string
  userLogin?: string
}

export interface IBotContext extends Context {
  session: SessionData;
}
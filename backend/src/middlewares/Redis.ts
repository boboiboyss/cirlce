import { NextFunction, Request, Response } from "express";
import { redisClient } from "../libs/redis";

export async function RedisCheck(req : Request, res : Response, next : NextFunction) {
    const result = await redisClient.get("THREADS_DATA");
    if(result) return res.json(JSON.parse(result))

    next()
}
/*
 * Project: c:\Users\tnguyen\interviews\beers_app
 * Created Date: <<filecreated('dddd MMMM Do YYYY'
 * Author: Thang         

Thang Nguyen
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 Your Company
 */

import { Request, Response } from "express"

/**
 * The method to do health of the api
 */
const globalControllers = {
    healthyCheck(req: Request, res: Response) {
        res.sendStatus(200);
    }
}

export default globalControllers;
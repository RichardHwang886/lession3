import { Controller, Get, Post, Res, Req, Param, Query, Body } from '@nestjs/common';
import { S001Service } from './s001.service';
import { Response, Request } from 'express';

@Controller('c001')
export class C001Controller {
    constructor(private svc: S001Service){

    }

    @Get("hello")
    getHello(): string {
        return this.svc.getHello();
    }
    @Post("hellop/:name/:hobby")
    getHellop(@Res() res:Response, @Req() req:Request,
              @Param('name') userName ,@Param('hobby') hobby,
              @Query() query, @Query('q1') q1,
              @Body() body) {
         //console.log("C001Controller -> getHellop -> req", req)
        // console.log('res:', res);
        let s = this.svc.getHello(userName);
       // return res.status(200).send(s);
        let ret ={result:s, hobby, userName, q1,query, body,statusCode: 200};

        let q2 = query.q2;   // query['q2']
        let q3 = query['q3'];
        console.log("C001Controller -> @Query -> q3", q3)
        console.log("C001Controller -> @Query -> q2", q2)
      //  return res.status(200).json( JSON.stringify(ret));
        return res.status(200).json( ret);
      //  return this.svc.getHello();
    }

    @Get('getFakerData')
    getFakerData(@Res() res:Response){
        let ret = this.svc.fakerData();
        return res.status(200).json(ret);

    }
}

const userService = require('../service/user');

const jwt = require('jsonwebtoken');
require('dotenv').config();

class UserController {
  /*/////////////////////////////////////////////*/
  async login(req, res) {
    try
    {
      const { username } = req.body;
      const { password } = req.body;
      const user = await userService.login(username,password);
      if(user)
      {
       
       /*---*/
       const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 604800});  
       const refreshToken = jwt.sign({user}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1y'});
       /*----*/
        res.status(201).json({user: user,accessToken: accessToken, refreshToken: refreshToken});
        //console.log(user);
       // console.log('AccessToken is :' +accessToken);
        //console.log('RefreshToken is :' +refreshToken);
      }
      else
      {
        res.status(404).json({message: 'This username and/or password  not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
 
  }
  
  /*/////////////////////////////////////////////*/
  async createUser(req, res) {
    try {
     const body = req.body;
     //const salt = genSaltSync(10);
     //body.password = hashSync(body.password, salt);

      const id = await userService.createUser(body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllUser(req, res) {
    try {
      const groups = await userService.getAllUser();
      res.status(201).json(groups);
    } catch (err) {
      console.error(err);
    }
  };

  async findUserByFonction(req, res) {
    try {
      const user = await userService.findUserByFonction();
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
    }
  };

  async getOneUser(req, res) {
    try {
      const {id} = req.params;
      const groups = await userService.getOneUser(id);
      if(groups)
      {
        res.status(201).json(groups);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeUser(req, res) {
    try {
      const {id} = req.params;
      const count = await userService.removeUser(id);
      if(count > 0)
      {
        res.status(201).json({message : 'Successfuly deleted'});
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async updateUser(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const groups = await userService.updateUser(id,changes);
      if(groups)
      {
        res.status(201).json(groups);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async passwordInit(req, res) {
    try {
      const {username} = req.params;
      const changes = req.body;

      const groups = await userService.updateUser(username,changes);
      if(groups)
      {
        res.status(201).json(groups);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findUser(req, res) {
    try {
      const {username} = req.params;
      const user = await userService.findUser(username);
      if(user)
      {
        res.status(201).json(user);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

 
  /*async login(req, res) {
    try
    {
      const { username } = req.body;
      const { password } = req.body;
      const user = await userService.login(username,password);
      if(user)
      {
        //const result = compareSync( password, user.password );
       /*user.password = undefined;
        const jsontoken = jwt({user : user},process.env.JWT_KEY,{
          expiresIn : "1h"
        });*/
        // token: jsontoken
       /* res.status(201).json({user: user});
      }
      else
      {
        res.status(404).json({message: 'This username and/or password  not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
 
  }*/
}
module.exports = new UserController();
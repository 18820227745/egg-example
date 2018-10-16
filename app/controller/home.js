'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async name() {
    this.ctx.body = 'hi, my name is egg';
  }
}

module.exports = HomeController;

const boom = require('@hapi/boom');
const { models } = require('../../database/sequelize');

class OrderService {
  constructor() {}

  async findAll() {
    return await models.Order.findAll();
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: ['customer']
    });

    if (!order) throw boom.notFound(`Order id: ${id} not found`);
    return order;
  }

  async create(data){
    const newOrder = await models.Order.create(data, {
      include: ['customer']
    })

    return newOrder
  }

  async update(id, changes){
    const order = await this.findOne(id)
    const response = await order.update(changes)
    return response;
  }

  async delete(id){
    const order = this.findOne(id)
    await order.destroy()
    return {success: `Orden con id: ${id} eliminado`}
  }

}

module.exports = OrderService;

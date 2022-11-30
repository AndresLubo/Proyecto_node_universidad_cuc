const boom = require('@hapi/boom');
const { models } = require('../../database/sequelize');

class CustomerService {
  constructor() {}

  async findAll() {
    const response = await models.Customer.findAll({
      include: ['direction'],
    });

    return response;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id, {
      include: ['direction'],
    });

    if (!customer) throw boom.notFound(`Customer id: ${id} not found`);

    return customer;
  }

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['direction'],
    });

    return newCustomer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    let rta = await customer.update(changes, {
      include: ['direction']
    });
    return rta;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { success: `Elemento con id ${id} eliminado` };
  }
}

module.exports = CustomerService;

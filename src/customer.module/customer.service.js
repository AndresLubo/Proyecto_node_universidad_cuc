const boom = require('@hapi/boom');

class CustomerService {
  constructor(){}

  async findAll(){
    return []
  }

  async findOne(id){
    return []
  }

  async create(newCustomer){
    return newCustomer
  }

  async update(id, changes){
    return `Customer id: ${id} update`
  }

  async delete(id){
    return `Customer id: ${id} delete`
  }
}

module.exports = CustomerService

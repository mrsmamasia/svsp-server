const boom = require('boom')

const genericCrud = (model) => ({
    async get({ params: { id }}, res) {
        try {
            const item = await  model.findById(id)
            return res.status(200).send(item)
        } catch (err) {
          throw boom.boomify(err)
        }
    },
    async getAll(req, res) {
        try {
            const items = await  model.find()
            return res.status(200).send(items)
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async create({ body }) {
        try {
            const item = new model(body)
            const newItem = await item.save()
            return res.status(200).send(newItem)
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async update({ params: { id }, body }) {
        try {
            const item = await  model.findByIdAndUpdate(id,body,{new:true})
            return res.status(200).send(item)
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async delete({ params: {id}}) {
        try {
            await model.findByIdAndDelete(id)
            return res.status(200).send({ status: 'OK', message: 'Продукт удален'})
    } catch (err) {
        throw boom.boomify(err)
    }},
})

module.exports = genericCrud
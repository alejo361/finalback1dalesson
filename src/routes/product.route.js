import { Router } from "express";
import { ProductModel } from "../models/product.model.js";


const route = Router()
const model = new ProductManager(ProductModel)

route.get('/', async (req, res) => {
    const result = await model.findByQuery()
    if (!result) return res.json({ mensage: 'No se encontro nada', payload: result })
    res.json({payload: result})
})

export default route
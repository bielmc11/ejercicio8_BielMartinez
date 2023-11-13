const inmueblesModel = require('../models/inmuebles.model')

const getInmuebles = async (req, res) =>{
    try{
        const result = await inmueblesModel.find()
        res.json(result)

    }catch(error){
        res.json({Errro: error.message})
    }
}


const postInmueble = async (req,res) =>{
    try{
        const result = await inmueblesModel.create(req.body)
        res.json(result)
    }catch(error){
        res.json({Errro: error.message})
    }
}

const updateInmueble = async (req, res) =>{
    try{
        const { productId } = req.params
        const result = await inmueblesModel.findByIdAndUpdate(productId, req.body, {new:true});
        res.json(result)

    } catch(error){
        res.json({Errro: error.message})
    }
}

const deleteInmueble= async (req, res) =>{
    try{ 
        const { productId } = req.params;
        const result = await inmueblesModel.findOneAndDelete(productId);
        res.json(result)

    }catch(error){
        res.json({Error: error.message})
    }
}

module.exports = {
    getInmuebles,
    postInmueble,
    updateInmueble,
    deleteInmueble
}
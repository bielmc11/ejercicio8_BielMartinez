const inmueblesModel = require('../models/inmuebles.model')

const checkId = async (req,res,next) =>{
    const { productId } = req.params;
    try{
        const result = await inmueblesModel.findById(productId);
        if(!result){
            res.json({Error: 'No se encontro el Id del inmueble'})
        }  
        next();
    }catch(error){
        res.json({Error: error.message})
    }
}

module.exports = { checkId }
const router = require('express').Router();
const inmueblesController = require('../../controllers/inmuebles.controller');
const { checkId } = require('../../middleware/inmuebles.middleware');
 
//GET
router.get('/', inmueblesController.getInmuebles)
//POST
router.post('/', inmueblesController.postInmueble) 
//PUT
router.put('/:productId', checkId ,inmueblesController.updateInmueble);
//DELETE
router.delete('/:productId', checkId ,inmueblesController.deleteInmueble)


module.exports = router;
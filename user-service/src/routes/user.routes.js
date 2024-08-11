const express = require('express')
const router = express.Router()

 
const {
    uploadAvatar, 
    uploadImages,
    getProfile,
    editProfile,
    getAvatar,
    updateAvatar,
    

} = require('../controllers/user.controller')


router.get('/:id', getProfile)
router.get('/avatar/:id', getAvatar)

router.put('/',  editProfile)
router.put('/avatar',  updateAvatar)


//router.post('/avatar', uploadAvatar)
//router.post('/images', uploadImages)

module.exports = router
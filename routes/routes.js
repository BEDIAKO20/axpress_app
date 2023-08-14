const express = require("express")

const {
    get_home,
    get_about,
    get_aboutMe,
    get_services,
 
}  = require("../Controller/contrroller")

const router = express.Router();

router.route("/").get(get_home)
router.route("/about").get(get_about)
router.route("/aboutme").get(get_aboutMe)
router.route("/services").get(get_services)

module.exports =  router
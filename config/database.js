module.exports = {
 url : 'mongodb://127.0.0.1:27017/person',
    url2:  'mongodb://'+process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +process.env.OPENSHIFT_APP_NAME

}

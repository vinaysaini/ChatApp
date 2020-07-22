'use strict';

var Models = require('../Models');

var create = async (objToSave) => {
	return await new Models.Groups(objToSave).save();
};

var createMany = async(arrToSave) => {
	return await Models.Groups.insertMany(arrToSave);
}

var find = async (criteria, projection, options) => {
	options.lean = true;
	return await Models.Groups.find(criteria, projection, options);
};

var update = async (criteria, dataToSet, options) => {
	options.lean = true;
	options.new = true;
	return await Models.Groups.findOneAndUpdate(criteria, dataToSet, options);
};

var getPopulate = async (query, projection, option, populateQuery) => {
	return await Models.Groups.find(query, projection, option).populate(populateQuery).exec();
};

module.exports = {
    create,
    createMany,
    find,
    update,
    getPopulate
};
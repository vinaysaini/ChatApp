'use strict';

var Models = require('../Models');

var create = async (objToSave) => {
	return await new Models.Contacts(objToSave).save();
};

var createMany = async (arrToSave) => {
	return await Models.Contacts.insertMany(arrToSave);
}

var find = async (criteria, projection, options) => {
	options.lean = true;
	return await Models.Contacts.find(criteria, projection, options);
};

var update = async (criteria, dataToSet, options) => {
	options.lean = true;
	options.new = true;
	return await Models.Contacts.findOneAndUpdate(criteria, dataToSet, options);
};

var getPopulate = async (query, projection, option, populateQuery) => {
	return await Models.Contacts.find(query, projection, option).populate(populateQuery).exec();
};

var aggregate = async (pipeline) => {
	return await Models.Contacts.aggregate(pipeline);
}

module.exports = {
	create,
	createMany,
    find,
    update,
	getPopulate,
	aggregate
};
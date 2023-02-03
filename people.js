const express = require('express');
const mongoose = require('mongoose');
const app = express();

//populate database:

const { MongoClient } = require("mongodb");
const { application } = require('express');
const uri = "mongodb://localhost/people";
const client = new MongoClient(uri);


//retreive data


//render page with data
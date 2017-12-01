const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');
//const axios = require('axios');
//const data = require('./JavaScriptLibraries.json');
const assert = require('assert');
const app = express();

// const stitch = require('mongodb-stitch');

const statusCodes = require('./common/statusCodes.js');

app.use(bodyParser.json());
app.use(CORS());
app
  .use(express.static(path.join(__dirname, 'app/docs')))
  .get('/', (req, res) => res.render('index.html'));
/*
const client = new stitch.StitchClient('marktestapi-nsape');
const db = client.service('mongodb', 'mongodb-atlas').db('api');
client
  .login()
  .then(() =>
    db
      .collection('stories')
      .updateOne(
        { owner_id: client.authedId() },
        { $set: { number: 43 } },
        { upsert: true }
      )
  )
	.then(() => db.collection('stories').find({}))
	//.then(() => db.collection('stories').find({ owner_id: client.authedId() }))
  .then(docs => {
    console.log('Found docs', docs);
    console.log('[MongoDB Stitch] Connected to Stitch');
  })
  .catch(err => {
    console.error(err);
	});
*/	

const MongoClient = require('mongodb').MongoClient;

var readDocuments = function(db, collection, filter = {}) {
  // Get the documents collection
  const table = db.collection(collection);
  //console.log('collection:', collection)
  const cursor = table.find();
  // console.log('find:', find)
  //return cursor.toArray((err, documents) => {
  //	assert.equal(null, err);
  //	return documents;
  //});
  return cursor;
};
var writeDocument = function(db, collection, document) {
  // Get the documents collection
  var table = db.collection(collection);
  return table.writeDocument(document);
};
/*
const stichClient = new stitch.StitchClient('marktestapi-nsape');
const stichDB = stichClient.service('mongodb', 'mongodb-atlas').db('api');
app.get('/stichStories', (req, res) => {
  stichClient
    .login()
    .then(() => stichDB.collection('stories').find({}))
    .then(docs => {
      res.status(statusCodes.success).json(docs);
    })
    .catch(err => {
      console.error(err);
    });
});
*/
const uriTestDb =
  //          'mongodb://kamala:dxvfqh980zvcjLzr@cluster1-shard-00-00-jfwyi.mongodb.net:27017,cluster1-shard-00-01-jfwyi.mongodb.net:27017,cluster1-shard-00-02-jfwyi.mongodb.net:27017/api?ssl=true&replicaSet=Cluster1-shard-0&authSource=admin';
  'mongodb://MarkDataManager:dxvfqh980zvcjLzr@cluster0-shard-00-00-tntzd.mongodb.net:27017,cluster0-shard-00-01-tntzd.mongodb.net:27017,cluster0-shard-00-02-tntzd.mongodb.net:27017/api?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
const localDb = 'mongodb://localhost:27017/api';
app.get('/stories', (req, res) => {
  let data;
  MongoClient.connect(
    uriTestDb,
    //	localDb
    function(err, db) {
      console.log(`error: ${err}`);
      assert.equal(null, err);
      console.log('Connected successfully to server');
      readDocuments(db, 'stories').toArray((err, documents) => {
        assert.equal(null, err);
        data = documents;
        console.log('stories data:', data);
        res.status(statusCodes.success).json(data);
        db.close();
      });
    }
  );
});

app.post('/stories', (req, res) => {
  MongoClient.connect(uriTestDb, function(err, db) {
    assert.equal(null, err);
    console.log('Connected successfully to server');
    writeDocument(db, 'stories', req.body);
  });
});

app.get('/users/:name', (req, res) => {
  //console.log('req type',req.type)
  console.log('name req params name', req.params.name);
  const user = data.filter(user => user.name === req.params.name)[0];
  //console.log('movie:',movie)
  res.send(user);
});

app.get('/users', (req, res) => {
  let data;
  MongoClient.connect(uriTestDb, function(err, db) {
    assert.equal(null, err);
    console.log('Connected successfully to server');
    readDocuments(db, 'users').then(response => {
      data = response;
      console.log('users data:', data);
      res.send(data);
      db.close();
    });
  });
});
app.post('/users', (req, res) => {
  let data;
  MongoClient.connect(uriTestDb, function(err, db) {
    assert.equal(null, err);
    console.log('Connected successfully to server');
    writeDocument(db, 'users', req.body);
  });
});

app.get('/users/:name', (req, res) => {
  //console.log('req type',req.type)
  console.log('name req params name', req.params.name);
  const user = data.filter(user => user.name === req.params.name)[0];
  //console.log('movie:',movie)
  res.send(user);
});
const port = 5001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

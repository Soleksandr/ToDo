import express from 'express'; // framework
import fs from 'fs'; // filesystem
import bodyParser from 'body-parser';
import * as dataMethods from './data/index';

const PORT = 8000;
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

const indexHandler = (req, res) => {
  fs.readFile('./static/index.html', (err, data) => {
    if (!err) {
      res
        .set('Content-Type', 'text-html')
        .send(data);
    }
    console.error(err);
  });
};

app.get('/', indexHandler);

app.get('/todos', (req, resp) => {
  resp
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(dataMethods.getData()));
});

app.post('/todo', (req, resp) => {
  resp
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(dataMethods.addTodo(req.body.caption)));
});

app.post('/toggletodo/:todoId', (req, resp) => {
  resp
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(dataMethods.toggleCompletion(req.params.todoId)));
});

app.post('/deletetodo/:id', (req, res) => {
  res
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(dataMethods.removeTodo(req.params.id)));
});

app.all('*', indexHandler);

export default () => {
  app.listen(PORT, () => {
    console.log(`app listening ${PORT}`);
  });
};

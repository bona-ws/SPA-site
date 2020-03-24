"use strict";

exports.ok = (values, res) => {
  var data = {
    status: 200,
    data: values
  };

  res.json(data);
  res.end();
};

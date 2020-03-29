exports.ok = (values, res) => {
  if (values.length > 0) {
    const data = {
      status: 200,
      data: values
    };
    res.json(data);
  } else res.json(null);

  res.end();
};

const http = new HTTP();

http.get("https://jsonplaceholder.typicode.com/users", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

const data = {
  title: "custom post",
  body: "this is a custom post"
};

http.post("https://jsonplaceholder.typicode.com/posts", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

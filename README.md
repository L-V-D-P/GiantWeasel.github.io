<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My test page</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&display=swap" rel="stylesheet">
</head>
<body>
    <p id="msg"></p>
    <p>my name is</p>
    <h1>Giant Weasel</h1>
    <img src="/images/image.png" alt="test image">
    <p>just a weasel.</p>
    <!--<p>making a list with</p>
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    <p>list elements</p>-->
    <a href="https://en.wikipedia.org/wiki/Weasel" target="_blank">About weasels</a>
    <button>change user</button>
    <script src="/scripts/main.js"></script>
</body>
</html>

html{
  font-family: "Assistant", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  color: black;
  background-color: aquamarine;
}

h1{
    margin: 0;
    padding: 20px 0;
    text-shadow: 2px 2px 3px grey;
    font-size: 60px;
    text-align: center;
}

img{
    width: 453px;
    display: block;
    margin: 0 auto;
    border-radius: 15%;
}

p, li{
    display: flex;
    font-size: 16px;
    line-height: 2;
    letter-spacing: 1px;
    justify-content: center;
    align-items: center;
}

body{
    width: 600px;
    margin: 0 auto;
    background-color: darkslategray;
    border-radius: 6px;
    padding: 0 20px 20px 20px;
    border: 5px solid black;
}

a{
    display: flex;
    font-family: "Assistant", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: italic;
    color: black;
    letter-spacing: 1px;
    text-shadow: 1px 1px 10px aquamarine;
    justify-content: center;
    align-items: center;
}

button {
    display: block;
    margin: 30px auto 0;
}


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function testVariable() {
            debugger
            var strText = document.getElementById("txtName").value;
            var strText1 = document.getElementById("txtEmail").value;
            document.getElementById("p1").innerHTML = strText;
            document.getElementById("p2").innerHTML = strText1;

        }
    </script>
</head>

<body>
    <form>

        <input type="text" name="Name" id="txtName" placeholder="Name">
        <input type="text" name="Email" id="txtEmail" placeholder="Email">
        <input type="button" value="Submit" id="btnSubmit" onclick="testVariable()">
    </form>
    <div>
        <p id="p1"></p>
        <p id="p2"></p>
    </div>
</body>

</html>
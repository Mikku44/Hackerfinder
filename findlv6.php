<!DOCTYPE html>
<html lang="en">

<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CXDD1608B6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CXDD1608B6');
</script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secureit | lv.6</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: 'VT323';
        }
    </style>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5759479769709455"
        crossorigin="anonymous"></script>
</head>

<body class="bg-black text-white">


    <div id="timer" class="right-10 bottom-5 fixed text-xl">00:00s</div>
    <button class="left-0 fixed" id="lev" value="6">lv.6</button>
    <div class="right-0 fixed">version 1.0 beta</div>
    <div class="flex flex-col  justify-center text-center  p-10">
        <h1 class=" text-6xl center">Secureit.fun</h1>

        waiting for update....<br>
        Note : new level will update in Sunday night.

        <!-- <form class="mt-10 flex flex-col gap-5  justify-center" action="login.php" enctype="multipart/form-data">
            <h1>Note :we have to use other way to protect data.**</h1>
            <div><label for="username">Username</label> <input id="username" name="username" required
                    class="text-green-800 px-2 ring-1 ring-gray-200 rounded-sm" type="text"></div>
            <div><label for="password">Password</label> <input id="password" name="username" required
                    class="text-green-800 px-2 ring-1 ring-gray-200 rounded-sm" type="password"></div>
            <div class="pointer"><a href="forgot.html"><input class="cursor-pointer underline " type="button" value="Forgot password"></a></div>
            <div><input type="submit" id="submit" class="ring-1 ring-gray-200 px-28 hover:text-black hover:bg-white"
                    value="login"></div>
        </form> -->
       
    </div>
</body>
<script>


    function ctrlShiftKey(e, keyCode) {
        return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }

    
    document.onkeydown = (e) => {
        // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
        if (
            event.keyCode === 123 ||
            ctrlShiftKey(e, 'I') ||
            ctrlShiftKey(e, 'J') ||
            ctrlShiftKey(e, 'C') ||
            (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
        )
            return false;
    };

    // Disable right-click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

   
</script>
<script src="node_modules/devtools-detector/lib/devtools-detector.js"></script>

<script id="login">


    devtoolsDetector.addListener(function (isOpen) {
        msg = isOpen
            ? 'devtools status: open'
            : 'devtools status: close';
        // alert(msg);
        login.remove();
        alert('Hacking Detected!!')
        window.location.reload();
    });
    devtoolsDetector.launch();

    document.onkeydown = (e) => {
        // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
        if (
            event.keyCode === 123 ||
            ctrlShiftKey(e, 'I') ||
            ctrlShiftKey(e, 'J') ||
            ctrlShiftKey(e, 'C') ||
            (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
        )
            return false;
    };

    // Disable right-click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    submit.addEventListener('click', (e) => {
        if (username == 'Ohiyo') {
            if (password == 'mikey') {
                window.location.href = '/ohiyo.html';
            }
        }
        else {
            alert('Please enter username and password again.');
        }
    })
</script>
<script src="app.js"></script>

</html>
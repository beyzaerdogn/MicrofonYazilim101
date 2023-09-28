// JavaScript source code
< !DOCTYPE html >
    <html lang="en">
        <head>
            <style>
                .ortala {
                    display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
      }
                .buyuk-top {
                    width: 320px;
                height: 320px;
                background-color: black;
      }
                .kucuk-top {
                    width: 160px;
                height: 160px;
                background-color: white;
      }
                .sekiz {
                    font - size: 100px;
      }
                body {
                    height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
      }
            </style>
            <script>
                const messages = ["Message1", "Message2", "Message3"];
                let randomCount = Math.floor(Math.random() * 3);
                console.log(messages[randomCount]);
            </script>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Static Template</title>
        </head>
        <b

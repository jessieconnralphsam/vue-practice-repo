<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>
        <div id="practice">
            <practice-component></practice-component>
        </div>
        @vite('resources/js/components/practice/practice.js')
    </body>
</html>

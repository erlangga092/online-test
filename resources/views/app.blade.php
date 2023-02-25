<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="{{ asset('assets/css/volt.css') }}" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

  <style>
    tbody:before {
      line-height: 0.5em;
      content: ".";
      display: block;
    }

    .form-select {
      /* padding: .625rem 1rem; */
      font-size: 16px;
    }
  </style>

  @viteReactRefresh
  @vite('resources/js/app.jsx')
  @inertiaHead
</head>

<body>
  @inertia

  <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('assets/js/smooth-scroll.polyfills.min.js') }}"></script>
  <script src="{{ asset('assets/js/simplebar.min.js') }}"></script>
  <script src="{{ asset('assets/js/volt.js') }}"></script>
</body>

</html>

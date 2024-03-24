{
  'plugins'[
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@utils': './utils',
          '@components': './components',
          '@assets': './assets',
          '@styles': './styles',
          '@scss': './scss',
        },
      },
    ]
  ];
}

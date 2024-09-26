export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  logger: {
    level: 'debug', // Уровень логирования (может быть 'trace', 'debug', 'info', 'warn', 'error', 'fatal')
    exposeInContext: true, // Отображать логи в контексте запроса
  },
});

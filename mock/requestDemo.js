import mockjs from 'mockjs';

export default {
  'GET /api/synergy/requestDemo': (req, res) => {
    setTimeout(() => {
      res.send(
        mockjs.mock({
          code: '200',
          'data|3': [
            {
              id: /[a-z][A-Z][0-9][a-z][a-z][0-9][0-9]/,
              time: '@date("yyyy-MM-dd HH:mm")',
              'type|1': ['TIMELINE_FACT', 'TIMELINE_BASIS', 'TIMELINE_RESULT', 'TIMELINE_DECISION'],
              content: '@cparagraph(1)',
            },
          ],
        }),
      );
    }, 500);
  },
};

import { Input, Markup, Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import { Command } from './command.class';
import { IBotContext } from '../context/context.interface';

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) => {
      const caption =
        `Приветствую тебя, ${ctx.message.from.first_name}👋. \n` +
        'Меня зовут Анар 👨‍🎓 \n\n' +
        'Я сертифицированный фитнес тренер и фитнес блоггер, который натурально пришел к телу своей мечты и помогу сделать это тебе🫵\n\n' +
        'Опираясь на отзывы и результаты моих клиентов, я с уверенностью могу сказать, что мой подход к работе, мои тренировочные методики, позволяют решить любую задачу:\n' +
        '-избавиться от лишних килограмм\n' +
        '-выработать правильные пищевые привычки\n' +
        '-забыть суставные боли, боли в спине\n' +
        '-подтянуть тонус в мышцах\n' +
        '-укрепить мышечный корсет\n' +
        '-рекомпозировать тело\n' +
        '-наборать массу\n' +
        '-увеличить силовые показатели\n\n' +
        'Для этого, я создал несколько форматов совместной работы, которые должны ускоренно привести тебя к твоей цели!';

      ctx.replyWithPhoto(
        // { source: '../src/assets/2023-11-15-14.51.00.jpg' },
        Input.fromLocalFile('assets/2023-11-15-14.51.00.jpg', 'welcome-anar'),
        {
          caption: caption,
          parse_mode: 'Markdown',
          ...Markup.keyboard([
            Markup.button.callback('Диагностика', 'diagnostics_button'),
            Markup.button.callback(
              'Индивидуальная программа',
              'individual_programm_button'
            ),
            Markup.button.callback(
              'Персональное ведение',
              'personal_management_button'
            ),
            // Markup.button.callback('Отзывы', 'reviews_button'),
          ]).resize(),
        }
      );
    });

    // Диагностика
    this.bot.hears('Диагностика', async (ctx) => {
      const diagnosticText =
        'Диагностика рассчитан на новичков 🌚 и на тех кто давно ходит в зал🎓 но так и не пришел к своему желаемому результату😞\n' +
        'Что такое диагностика?🤨\n' +
        'Диагностика - это возможность\n\n' +
        '✅ выявить ошибки в твоем образе жизни!\n' +
        '✅подобрать оптимальный маршрут для достижения твоей цели!\n\n' +
        'Чтобы путь к цели стал для тебя максимально быстрым, безопасным и эффективным.\n' +
        'Как проводится диагностика?🧐\n' +
        'Она длится 7️⃣ дней\n' +
        'Ее цель:\n' +
        '🔘Собрать полную и достоверную информацию о твоем образе жизни.\n' +
        '🔘Составить план по достижению твоей цели.\n' +
        'Во время диагностики, мы отслеживаем 6️⃣ показателей!\n\n' +
        '1️⃣ПИТАНИЕ 🍞🍳\n' +
        '2️⃣АКТИВНОСТЬ🧘\n' +
        '3️⃣СОН 😴\n' +
        '4️⃣ДИСЦИПЛИНА 📈📆\n' +
        '5️⃣МОТИВАЦИЯ 💯\n' +
        '6️⃣СТРЕСС 😣\n\n' +
        'А в конце мы делаем созвон📲, где вы получаете оценку о своем образе жизни, тренировках, питании и САМОЕ ценное,❗️ДЕЙСТВИЯ❗️\n' +
        'которые необходимо делать, что бы достигнуть цели!📈\n' +
        'Переходи по кнопкам далее⏭️';

      await ctx.reply(
        diagnosticText,
        Markup.keyboard([
          Markup.button.callback('Узнать стоимость', 'cost_button'),
          Markup.button.callback('Оставить заявку', 'request_button'),
          Markup.button.callback('Назад в меню', 'back_button'),
        ]).resize()
      );
    });

    // Индивидуальная программа
    this.bot.hears('Индивидуальная программа', async (ctx) => {
      const individualProgrannText =
        ' 1️⃣ Что входит в услугу?\n\n' +
        '1.1 Мы составляем индивидуальную программу на 12 тренировочных дней, исходя из твоих целей и задач, подберем наиболее удобные и эффективные упражнения для целевых групп мышц.\n\n' +
        '2️⃣ Что входит в программу?\n\n' +
        '2.1 Тренировочный день состоит из\n' +
        '5-6 базовых упражнений, к каждому упражнению прилагается видео с авторской техника выполнения, в которой показано эффективное выполнения упражнения, на целевую мышечную группу.\n\n' +
        '2.2 В таблице есть возможность отслеживать свой прогресс, так как есть возможность фиксировать рабочие веса, количество сетов, и повторы.\n\n' +
        '2.3 Также если возникают вопросы по технике выполнения или питанию я всегда готов помочь, нужно только скинуть технику выполнения и мы вместе её оценим.\n\n' +
        '3️⃣ Что вы получите после 12 тренировочных дней:\n\n' +
        'Ты однозначно получишь полное понимание, как работают мышцы во время упражнения, что необходимо делать чтобы включить их в работу максимально.\n' +
        'И через месяц ты не будешь сомневаться, что твои результаты не за горами.';

      await ctx.reply(
        individualProgrannText,
        Markup.keyboard([
          Markup.button.callback('Узнать стоимость', 'cost_button'),
          Markup.button.callback('Оставить заявку', 'request_button'),
          Markup.button.callback('Назад в меню', 'back_button'),
        ]).resize()
      );
    });

    // Персональное ведение
    this.bot.hears('Персональное ведение', async (ctx) => {
      const individualProgrannText =
        ' 1️⃣ Что входит в Персональное ведение?\n\n' +
        '1.1 Мы составляем индивидуальную программу исходя из твоих целей и задач, подберем наиболее удобные и эффективные упражнения для целевых групп мышц.\n\n' +
        '1.2 Также разберем твой рацион питания, т.к результат напрямую зависит от того что ты потребляешь и в каких количества.\n\n' +
        '2️⃣ Как проходят занятия?\n\n' +
        '2.1 Расписание тренировок зависит только от вас. Приходите в зал или занимайтесь дома в любое удобное вам время.\n\n' +
        '2.2 Далее, открываете программу, и по очереди выполняете каждое упражнения, и обязательно перед выполнением, открываете ссылку на упражнение с правильной техникой выполнения,  изучаешь ее и начинаешь тренировку.\n\n' +
        'А чтобы тренировочный процесс был наиболее эффективным, необходимо присылать видео отчет с техникой выполнения. При необходимости я буду вносить корректировки пока техника не дойдет до идеала.\n\n';

      await ctx.reply(
        individualProgrannText,
        Markup.keyboard([
          Markup.button.callback('Узнать стоимость', 'cost_button'),
          Markup.button.callback('Оставить заявку', 'request_button'),
          Markup.button.callback('Назад в меню', 'back_button'),
        ]).resize()
      );
    });

    // Узнать стоимость
    this.bot.hears(['Узнать стоимость', 'Оставить заявку'], async (ctx) => {
      const text =
        'Что бы записаться на консультацию, оставь свой контактный телефон для связи в телеграм.\n\n' +
        'Напишу тебе в ближайшее время.\n' +
        '📬📩\n\n' +
        'Поделиться номером ты можешь, нажав на кнопку "Отправить номер"';

      // await ctx.telegram.sendMessage(ctx.chat.id, text, {
      //   parse_mode: 'Markdown',
      //   reply_markup: {
      //     one_time_keyboard: true,
      //     keyboard: [
      //       [
      //         {
      //           text: 'Share Phone Number',
      //           request_contact: true,
      //         },
      //         {
      //           text: 'Cancel',
      //         },
      //       ],
      //     ],
      //     force_reply: true,
      //   },
      // });

      await ctx.reply(
        text,
        Markup.keyboard([
          Markup.button.contactRequest('Отправить номер'),
          Markup.button.callback('Назад в меню', 'back_button'),
        ]).resize()
      );
    });

    // Оставить заявку
    // this.bot.hears('', (ctx) => {});

    // Показать отзывы
    // this.bot.hears('reviews_button', (ctx) => {});

    // Назад
    this.bot.hears('Назад в меню', async (ctx) => {
      const caption =
        `Приветствую тебя, ${ctx.message.from.first_name}👋. \n` +
        'Меня зовут Анар 👨‍🎓 \n\n' +
        'Я сертифицированный фитнес тренер и фитнес блоггер, который натурально пришел к телу своей мечты и помогу сделать это тебе🫵\n\n' +
        'Опираясь на отзывы и результаты моих клиентов, я с уверенностью могу сказать, что мой подход к работе, мои тренировочные методики, позволяют решить любую задачу:\n' +
        '-избавиться от лишних килограмм\n' +
        '-выработать правильные пищевые привычки\n' +
        '-забыть суставные боли, боли в спине\n' +
        '-подтянуть тонус в мышцах\n' +
        '-укрепить мышечный корсет\n' +
        '-рекомпозировать тело\n' +
        '-наборать массу\n' +
        '-увеличить силовые показатели\n\n' +
        'Для этого, я создал несколько форматов совместной работы, которые должны ускоренно привести тебя к твоей цели!';

      ctx.replyWithPhoto(
        // { source: '../src/assets/2023-11-15-14.51.00.jpg' },
        Input.fromLocalFile('assets/2023-11-15-14.51.00.jpg', 'welcome-anar'),
        {
          caption: caption,
          parse_mode: 'Markdown',
          ...Markup.keyboard([
            Markup.button.callback('Диагностика', 'diagnostics_button'),
            Markup.button.callback(
              'Индивидуальная программа',
              'individual_programm_button'
            ),
            Markup.button.callback(
              'Персональное ведение',
              'personal_management_button'
            ),
            Markup.button.callback('Отзывы', 'reviews_button'),
          ]).resize(),
        }
      );
    });

    this.bot.on(message('contact'), async (ctx) => {
      ctx.session.numberRequested = true;
      ctx.session.userLogin = ctx.message.from.username
      ctx.session.userName = ctx.message.from.first_name

      ctx.telegram.sendContact(
        2005100692,
        ctx.message.contact.phone_number,
        ctx.message.contact.first_name
      );

      await ctx.reply(
        'Спасибо за заявку, я скоро с тобой свяжусь 🤩',
        Markup.keyboard([
          Markup.button.callback('Назад в меню', 'back_button'),
        ]).resize()
      );
    });

    this.bot.on(message('text'), async (ctx) => {
      await ctx.reply(
        'Если ты уже точно знаешь, чего хочешь - смело оставляй номер 😉\n\n' +
          'А для навигации по боту используй кнопки🔽',
        Markup.keyboard([
          Markup.button.contactRequest('Отправить номер'),
          Markup.button.callback('Назад в меню', 'back_button'),
        ]).resize()
      );
    });
  }
}

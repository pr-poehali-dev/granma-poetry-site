import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const poems = [
    {
      title: "Везение",
      text: `Как часто слышим мы
Везение есть, везения нет
А как же быть тому, кому везения нет?
Сегодня нет, и завтра нет
Какой же должен быть ответ?
Живи и жди своё везение
Оно наступит в день рождения
Придёт к тебе, назначит встречу,
С везением надолго сроднив`
    },
    {
      title: "Посвящается Н. Щ.",
      text: `У тебя печаль в глазах,
В жизни всё не так,
И черёмуха цветёт
Как белый пустяк.
У сирени ветки клонит ветер озорник
Он играет на ладони, видно так привык.
Скоро свадьба у подруги, ты поздравь её
Пожелай подруге счастья, островок любви
Пусть она желанной будет
Пусть во всём везёт
Пороха её желаний набирает ход
И к тебе придут когда-то запоздалые цветы
Тот мужчина неженатый ждёт любви как ты.`
    },
    {
      title: "Любимая пора",
      text: `Осень, осень, осень...
Любимая пора поэтов
Луга чисты, леса желтеют
Весь птичий гомон так редеет.
Что все готовятся к зиме
Успеть бы и не опоздать,
Подросшее потомство обуздать
Учить их холода встречать,
Стоять плечом к плечу..
За брата, за сестру
Любить и уважать
И никогда не обижать...`
    },
    {
      title: "Воспоминание",
      text: `Обида в сердце глаже
Так тяжело об этом вспоминать
Зачем оно меня тревожит и тревожит.
Как жить, как жить и выживать?
Обида, ты всегда со мною
Не на минутку ты не хочешь отступать
Зачем тебе тоска моя такая?
Ты лучше подскажи кому её отдать
Отдать её полуденному зною,
Берёзкам под моим окном
Черёмухе под белой пеленою
Цветкам с её с приливным серебром.`
    },
    {
      title: "Подарок",
      text: `Любовь твоя, меня пленила
Так сладко думать мне о ней
Она придаст мне силы
Намного дней, намного дней
Зачем любимою тропою мы с нову под руку идём
Твои глаза горят любовью
Как светлый лучик солнца днём
И я иду, от счастья таю
Что ты со мною навсегда
Твоя любовь - я так мечтаю
Подарок мне на все года.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/2d1f4567-2bbe-484e-af31-e4b6cb1a3083.jpg"
              alt="Зубкова Татьяна Михайловна"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            Зубкова Татьяна Михайловна
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground italic handwritten">
            Поэтесса, педагог, мать
          </p>
          <Separator className="my-8 max-w-xs mx-auto bg-accent" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            «Живи и жди своё везение...»
          </p>
        </header>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="BookOpen" className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Биография</h2>
          </div>
          
          <Card className="p-8 md:p-12 bg-card border-2 border-primary/10 shadow-lg">
            <div className="space-y-6 text-lg leading-relaxed">
              <div className="flex items-start gap-4">
                <div className="text-accent text-6xl font-bold handwritten flex-shrink-0">1950</div>
                <p className="mt-2">
                  <span className="font-semibold">Зубкова Татьяна Михайловна</span> родилась <span className="font-semibold">4 марта 1950 года</span> в селе Обвал, Тамалинского района, Пензенская область, в семье бывшего ветерана войны. В семье было 6 детей: 4 сестры и 2 брата, из них Татьяна была самая старшая.
                </p>
              </div>

              <Separator className="my-6" />

              <div className="pl-4 border-l-4 border-accent">
                <p className="mb-4">
                  С детства любила писать стихи, подражая своему отцу — <span className="font-semibold">Аринушкину Михаилу Ивановичу</span>, который печатался 50 лет в районной газете «Организатор».
                </p>
              </div>

              <p>
                Школу Зубкова Татьяна закончила на «хорошо» и «отлично», поступила в <span className="font-semibold">Саратовский государственный университет имени Н. Г. Чернышевского (СГУ)</span>. Выучилась на учителя химии и биологии.
              </p>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <p className="text-center italic">
                  Отличник просвещения, педагог с 40-летним стажем. Работала завучем, а также директором.
                </p>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Icon name="Heart" size={24} className="text-accent" />
                  О личной жизни
                </h3>
                <p>
                  Зубкова вышла замуж за <span className="font-semibold">Виктора Давыдовича</span>, своего верного супруга, с которым прожили уже как 53 года. Родила трёх детей — двух дочерей и сына. У неё есть большая семья, которая поддерживала её в начинаниях как поэтессы.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Feather" className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Стихотворения</h2>
          </div>

          <div className="space-y-8">
            {poems.map((poem, index) => (
              <Card 
                key={index} 
                className="p-8 md:p-12 bg-card border-2 border-primary/10 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-3xl font-bold text-primary mb-6 text-center">
                  {poem.title}
                </h3>
                <Separator className="mb-8 bg-accent" />
                <div className="whitespace-pre-line text-lg leading-loose text-center max-w-2xl mx-auto">
                  {poem.text}
                </div>
                <div className="mt-8 text-center">
                  <div className="inline-block border-t-2 border-accent w-24"></div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <footer className="mt-20 text-center text-muted-foreground">
          <Separator className="mb-8 bg-accent/30" />
          <p className="text-sm">
            © 2024 Зубкова Татьяна Михайловна. Все права защищены.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
import { useState, useEffect } from 'react';

// --- Компоненты ---

const SectionTitle = ({ children, subtitle }) => (
  <div className="text-center mb-12 fade-in-up">
    <h2 className="text-3xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-neon to-accent mb-4 uppercase tracking-wider glow-text">
      {children}
    </h2>
    {subtitle && <p className="text-slate-400 max-w-2xl mx-auto text-lg font-sans">{subtitle}</p>}
    <div className="w-24 h-1 bg-gradient-to-r from-neon to-accent mx-auto mt-4 rounded-full"></div>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="card-glass p-6 rounded-xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-neon/20 border-l-4 border-neon group">
    <div className="text-neon text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-bold font-display text-white mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-sans">{desc}</p>
  </div>
);

const ProgramStep = ({ number, title, desc }) => (
  <div className="flex gap-4 mb-8 last:mb-0 relative pl-4 border-l border-slate-700">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 border border-accent flex items-center justify-center text-accent font-bold shadow-[0_0_10px_rgba(245,158,11,0.3)] z-10">
      {number}
    </div>
    <div>
      <h4 className="text-lg font-bold font-display text-white mb-1">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed font-sans">{desc}</p>
    </div>
  </div>
);

const ScheduleItem = ({ day, time, group }) => (
  <div className="flex items-center justify-between bg-slate-800/50 p-4 rounded-lg border border-slate-700 mb-3">
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-neon"></div>
      <span className="font-semibold text-white font-display">{day}</span>
    </div>
    <div className="text-accent font-mono">{time}</div>
    <span className="text-slate-400 text-sm hidden sm:inline font-sans">{group}</span>
  </div>
);

// --- Главный компонент ---

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegister = () => {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      {/* Фон */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      </div>

      {/* Навигация */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md py-3 border-b border-slate-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white font-display">
            TRAVEL<span className="text-accent">ENGLISH</span>
          </div>
          <button 
            onClick={scrollToRegister}
            className="hidden md:block px-6 py-2 rounded-full border border-neon text-neon hover:bg-neon hover:text-dark transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(45,212,191,0.2)] font-display"
          >
            Записаться
          </button>
        </div>
      </nav>

      {/* Hero Секция */}
      <header className="relative z-10 pt-40 pb-20 md:pt-60 md:pb-32 container mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-neon mb-6 fade-in-up">
          <i className="fas fa-plane-departure mr-2"></i> Новый набор открыт
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-display text-white mb-6 leading-tight fade-in-up delay-100">
          Английский для <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500 glow-text">Путешествий</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 fade-in-up delay-200 leading-relaxed font-sans">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
          Научим вашего ребёнка реальному разговорному английскому для будущих приключений!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-300">
          <button 
            onClick={scrollToRegister}
            className="px-8 py-4 bg-gradient-to-r from-accent to-orange-600 text-white font-bold rounded-full text-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105 transition-all duration-300 font-display"
          >
            Записаться на курс
          </button>
          <button 
            onClick={() => document.getElementById('program').scrollIntoView({behavior:'smooth'})}
            className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-full text-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 font-display"
          >
            Узнать программу
          </button>
        </div>
      </header>

      {/* Группы */}
      <section className="py-16 bg-dark/50 border-y border-slate-800 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-glass p-8 rounded-2xl text-center hover:border-neon transition-colors duration-300">
              <div className="text-5xl text-neon mb-4"><i className="fas fa-child"></i></div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">Группа 1</h3>
              <p className="text-xl text-accent font-mono mb-2">4–5 класс</p>
              <p className="text-slate-400 font-sans">Базовые фразы и игровое погружение в среду.</p>
            </div>
            <div className="card-glass p-8 rounded-2xl text-center hover:border-neon transition-colors duration-300">
              <div className="text-5xl text-neon mb-4"><i className="fas fa-user-graduate"></i></div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">Группа 2</h3>
              <p className="text-xl text-accent font-mono mb-2">6–8 класс</p>
              <p className="text-slate-400 font-sans">Уверенные диалоги и сложные ситуации.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Программа */}
      <section id="program" className="py-20 container mx-auto px-4 relative z-10">
        <SectionTitle subtitle="Полное погружение в 10 шагов">Программа курса</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <ProgramStep number="1" title="Аэропорт без стресса" desc="Регистрация, паспортный контроль, таможня. Уверенность уже в первые часы." />
            <ProgramStep number="2" title="В отеле: заселение и помощь" desc="Смена номера, уборка, Wi-Fi. Практика вежливых фраз." />
            <ProgramStep number="3" title="Кафе и рестораны" desc="Заказ еды, аллергены, счёт и чаевые. Гастрономический словарь." />
            <ProgramStep number="4" title="На улице: ориентирование" desc="Спросить дорогу, вызвать такси, найти аптеку. Понимание речи." />
            <ProgramStep number="5" title="Экстренные случаи" desc="Потеря вещей, болезнь, полиция. Фразы, которые спасут отпуск." />
          </div>
          <div>
            <ProgramStep number="6-8" title="Туризм и развлечения" desc="Билеты, экскурсии, гиды, музеи. Культурный контекст." />
            <ProgramStep number="9" title="Дружба в путешествиях" desc="Знакомства со сверстниками. Игровая практика диалогов." />
            <ProgramStep number="10" title="Дипломный проект" desc="«Мой идеальный отпуск». Планирование и презентация путешествия." />
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-gradient-to-b from-dark to-slate-900 relative z-10">
        <div className="container mx-auto px-4">
          <SectionTitle>Почему этот курс особенный?</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard icon="fas fa-comments" title="Живая речь" desc="Акцент на практику, а не на сухую грамматику." />
            <FeatureCard icon="fas fa-globe" title="Реальные ситуации" desc="Все сценарии взяты из жизни путешественников." />
            <FeatureCard icon="fas fa-gamepad" title="Интерактив" desc="Ролевые игры, аудио-ситуации и мини-квесты." />
            <FeatureCard icon="fas fa-chart-line" title="Результат" desc="Ребёнок выходит на уровень **A2–B1** за курс." />
          </div>
        </div>
      </section>

      {/* Расписание и Цены */}
      <section className="py-20 container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Расписание */}
          <div className="card-glass p-8 rounded-2xl border-t-4 border-accent">
            <h3 className="text-2xl font-bold font-display text-white mb-6 flex items-center">
              <i className="far fa-clock mr-3 text-accent"></i> Расписание
            </h3>
            <ScheduleItem day="Четверг" time="15:00 (МСК)" group="Группа 4–5 класс" />
            <ScheduleItem day="Пятница" time="15:30 (МСК)" group="Группа 6–8 класс" />
            
            <div className="mt-8 pt-6 border-t border-slate-700">
              <h4 className="text-white font-semibold mb-4 font-display">Что потребуется:</h4>
              <ul className="text-slate-400 space-y-2 text-sm font-sans">
                <li className="flex items-center"><i className="fas fa-check text-neon mr-2"></i> ПК или ноутбук с наушниками</li>
                <li className="flex items-center"><i className="fas fa-check text-neon mr-2"></i> Стабильный интернет и Zoom</li>
              </ul>
            </div>
          </div>

          {/* Цены */}
          <div className="card-glass p-8 rounded-2xl border-t-4 border-neon">
            <h3 className="text-2xl font-bold font-display text-white mb-6 flex items-center">
              <i className="fas fa-tags mr-3 text-neon"></i> Стоимость
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-slate-800 p-4 rounded-lg">
                <div>
                  <div className="text-white font-bold font-display">Полный курс</div>
                  <div className="text-xs text-slate-500 font-sans">10 уроков</div>
                </div>
                <div className="text-accent font-bold text-xl font-display">12 000 ₽</div>
              </div>
              <div className="flex justify-between items-center bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div>
                  <div className="text-white font-bold font-display">Абонемент</div>
                  <div className="text-xs text-slate-500 font-sans">Оплата за урок</div>
                </div>
                <div className="text-white font-bold text-xl font-display">1 300 ₽</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30 text-sm text-accent text-center font-sans">
              <i className="fas fa-users mr-2"></i> Группы маленькие — максимум 6 детей
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Регистрация */}
      <section id="register" className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
            Набор открыт!
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-sans">
            Места ограничены! Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
          </p>
          
          <button 
            className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 font-display"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <span className="relative text-dark group-hover:text-white transition-colors flex items-center gap-3">
              Записаться на курс <i className="fas fa-arrow-right"></i>
            </span>
          </button>
          
          <p className="mt-6 text-slate-500 text-sm font-sans">
            Осталось всего 3 места в группе 4-5 класс
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 bg-darker text-center text-slate-600 text-sm relative z-10 font-sans">
        <p>© 2023 English for Travel. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;
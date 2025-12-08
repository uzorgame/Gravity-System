# Solar System / Сонячна Система

Interactive 3D visualization of the Solar System, created using Three.js. The project allows you to explore planets, dwarf planets, asteroids, and other space objects in real-time.

Інтерактивна 3D візуалізація Сонячної Системи, створена за допомогою Three.js. Проєкт дозволяє досліджувати планети, карликові планети, астероїди та інші космічні об'єкти в реальному часі.

---

## English / Англійська

## 🚀 Quick Start

### Requirements

- **Node.js** version 14 or higher
- **npm** (usually installed with Node.js)

### Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd Solar-System
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This command will install all necessary packages specified in `package.json`.

### Running the Project

After installing dependencies, run the project using one of the following commands:

#### Option 1: Development mode (with hot-reload)
```bash
npm run dev
```

This will start the Vite development server. Usually the project will be available at:
- **http://localhost:5173** (or another port if 5173 is occupied)

#### Option 2: Production build
```bash
npm run build
```

This command will create an optimized version of the project in the `dist/` folder. Then you can open `dist/index.html` in a browser or use any static web server.

### Opening in Browser

After running `npm run dev`:
1. Open your browser
2. Navigate to the address shown in the terminal (usually `http://localhost:5173`)
3. Enjoy the 3D Solar System!

## 🎮 Controls

### Main controls:

- **Mouse**: Rotate camera (click and drag)
- **Mouse wheel**: Zoom in/out
- **Control buttons**: In the left panel to adjust speed, orbit visibility, etc.
- **Planet selection**: Click on a planet in the right panel or on the planet itself in 3D space

### Control panels:

- **Left panel**: Control animation speed, orbit visibility, moons and asteroids
- **Right panel**: List of all celestial bodies with selection capability
- **Info card**: Appears when clicking on a planet, shows detailed information

## 📊 Features

- ✅ Real orbital periods of all planets (sidereal)
- ✅ Real distances from the Sun in astronomical units (AU)
- ✅ Interactive 3D visualization
- ✅ Information about planets, dwarf planets, asteroids
- ✅ Display of moons and their orbits
- ✅ Multi-language support (EN/UA)

## 🛠️ Technologies

- **Three.js** - 3D graphics
- **Vite** - Build tool and dev server
- **JavaScript (ES6+)** - Main programming language

## 📝 Project Structure

```
Solar-System/
├── index.html          # Main HTML file
├── main.js             # Main application logic
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
├── public/
│   └── textures/       # Planet textures
└── dist/               # Built version (after build)
```

## 🔧 Troubleshooting

### Port already in use
If port 5173 is occupied, Vite will automatically suggest using another port. Follow the instructions in the terminal.

### Installation errors
If you encounter problems installing dependencies:
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Textures not loading
Make sure all texture files are in the `public/textures/` or `dist/textures/` folder.

## 📚 Additional Information

All planet data (orbital periods, distances) is based on real astronomical data. The `dist` and `speed` values in the code are used only for visualization and scaling, while real data is stored in the `realAU` and `orbitalPeriodDays` fields.

## 📄 License

See the LICENSE file for detailed information.

---

## Українська / Ukrainian

## 🚀 Швидкий старт

### Вимоги

- **Node.js** версії 14 або вище
- **npm** (зазвичай встановлюється разом з Node.js)

### Встановлення

1. **Клонуйте репозиторій** (якщо ще не зроблено):
   ```bash
   git clone <repository-url>
   cd Solar-System
   ```

2. **Встановіть залежності**:
   ```bash
   npm install
   ```

   Ця команда встановить всі необхідні пакети, вказані в `package.json`.

### Запуск проєкту

Після встановлення залежностей запустіть проєкт за допомогою однієї з наступних команд:

#### Варіант 1: Режим розробки (з hot-reload)
```bash
npm run dev
```

Це запустить сервер розробки Vite. Зазвичай проєкт буде доступний за адресою:
- **http://localhost:5173** (або інший порт, якщо 5173 зайнятий)

#### Варіант 2: Збірка для продакшену
```bash
npm run build
```

Ця команда створить оптимізовану версію проєкту в папці `dist/`. Потім ви можете відкрити `dist/index.html` в браузері або використати будь-який статичний веб-сервер.

### Відкриття в браузері

Після запуску `npm run dev`:
1. Відкрийте браузер
2. Перейдіть за адресою, показаною в терміналі (зазвичай `http://localhost:5173`)
3. Насолоджуйтесь 3D Сонячною Системою!

## 🎮 Керування

### Основні елементи керування:

- **Миша**: Обертання камери (натисніть і перетягніть)
- **Колесо миші**: Збільшення/зменшення масштабу
- **Кнопки керування**: У лівій панелі для налаштування швидкості, видимості орбіт тощо
- **Вибір планети**: Натисніть на планету в правій панелі або на саму планету в 3D просторі

### Панелі керування:

- **Ліва панель**: Керування швидкістю анімації, видимістю орбіт, супутниками та астероїдами
- **Права панель**: Список усіх небесних тіл з можливістю вибору
- **Інформаційна картка**: З'являється при натисканні на планету, показує детальну інформацію

## 📊 Можливості

- ✅ Реальні орбітальні періоди всіх планет (сидеричні)
- ✅ Реальні відстані від Сонця в астрономічних одиницях (AU)
- ✅ Інтерактивна 3D візуалізація
- ✅ Інформація про планети, карликові планети, астероїди
- ✅ Відображення супутників та їх орбіт
- ✅ Підтримка багатьох мов (EN/UA)

## 🛠️ Технології

- **Three.js** - 3D графіка
- **Vite** - Інструмент збірки та сервер розробки
- **JavaScript (ES6+)** - Основна мова програмування

## 📝 Структура проєкту

```
Solar-System/
├── index.html          # Основний HTML файл
├── main.js             # Основна логіка додатку
├── package.json        # Залежності проєкту
├── vite.config.js      # Конфігурація Vite
├── public/
│   └── textures/       # Текстури планет
└── dist/               # Зібрана версія (після збірки)
```

## 🔧 Вирішення проблем

### Порт вже використовується
Якщо порт 5173 зайнятий, Vite автоматично запропонує використати інший порт. Дотримуйтесь інструкцій у терміналі.

### Помилки встановлення
Якщо ви зіткнулися з проблемами при встановленні залежностей:
```bash
# Очистити кеш npm
npm cache clean --force

# Видалити node_modules та package-lock.json
rm -rf node_modules package-lock.json

# Перевстановити
npm install
```

### Текстури не завантажуються
Переконайтеся, що всі файли текстур знаходяться в папці `public/textures/` або `dist/textures/`.

## 📚 Додаткова інформація

Всі дані про планети (орбітальні періоди, відстані) базуються на реальних астрономічних даних. Значення `dist` та `speed` у коді використовуються лише для візуалізації та масштабування, тоді як реальні дані зберігаються в полях `realAU` та `orbitalPeriodDays`.

## 📄 Ліцензія

Дивіться файл LICENSE для детальної інформації.

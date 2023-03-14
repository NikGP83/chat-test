# Тестовое задание на должность Front-end (React) разработчик

Время рассчитанное на выполнение задания - 3-6 часов. Однако Вы можете уделить столько времени, сколько потребуется. Если Ваш расчет затрат времени составит более 12 часво, сообщите Нам где конкретно будет затрачено много времени и МЫ упростим задание.

Если по какой-то части задания возникнет трудность,  пропустите его или выберите альтернативный и простой способ реализации.

## Структура проекта

api - пример метода работы с бекэндом, для примера реализован список чатов
components - хранение компонентов, для примера реализован компонент Avatar
constants - любые константы используемые в проекте, для примера список URL
interface - общие интерфейсы, для примера интерфейс объекта Page
pages - список страниц проекта
utils - общие функции, для примера работа с бекендом

## Описание задания:

1. Отверстать 6 базовых компонентов из которых состоит интерфейc, прописать необходимые пропсы и состояния:
- Chat item list (чат из левой панели)
- Message (сообщение из тела чата)
- Input (Поле ввода)
- Header (хедер)
- Time (Дата в теле чата)
- New message (полоса что есть новые сообщеня)
2. При уменьшении экрана правая часть с сообщениями должна уменьшаться. Верстка до разрешения экрана 700 пикселей. Если размер экрана в ширину меньше 700 пикселей, выводим заглушку “ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ”.
3. Input (Поле ввода) для текста в правой части сообщений сделать НЕ input и НЕ textarea, но с возможностью писать в этом поле аналогично как в textarea. Должно быть видно три строки, если текста более трёх строк, то должна появиться прокрутка.
4. Список методов для работы с бэк-ендом вы найдете в сваггере по ссылке Используйте даные методы для вывода списка чатов и списка сообщений по каждому из них. 
5. Левая панель, список чатов: В названиях чата, если название слишком длинное и не умещается в одну строку, обрезать название через троеточие(…)
   Если текст сообщения (вторая строка) слишком большой, оставить две строки, остальное обрезать и сделать троеточие (…)
6. При нажатии на чат слева в правой части должны динамически подгружаться сообщения, относящиеся к этому чату.

### НЕ ЗАБУДЬТЕ ОТПРАВИТЬ PUSH КОГДА ЗАКОНЧИТЕ РАБОТУ

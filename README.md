# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# Стандарты проекта: UI/UX и Маркетинг

## 1. UX и юзабилити (Интуитивность)
- Закон Фиттса: кликабельные элементы (кнопки, ссылки) должны быть крупными и с достаточным hit-area (минимум 44x44px на mobile).
- Иерархия: один доминирующий H1 на странице, понятные H2/H3, четкий визуальный вес элементов.
- Пространство (White Space): не лепить блоки вплотную, использовать щедрые отступы (padding/margin py-16 / py-24).
- Состояния интерфейса: обязательные hover-, focus- и active-состояния для всех интерактивных элементов.

## 2. Маркетинг и конверсия
- Правило первого экрана (Hero Section): за 3 секунды должно быть понятно, ЧТО это, ДЛЯ КОГО это и КАКАЯ выгода.
- Формула заголовка: Ценность + Результат (не абстрактная поэзия, а конкретика).
- CTA (Call to Action): одна главная кнопка с действием-результатом («Начать бесплатно», «Записаться на разбор»), а не блеклое «Отправить».
- Социальное доказательство: блоки с логотипами клиентов, отзывами с фото, цифрами и метриками.
- Снятие возражений: блок FAQ перед финальным футером.

## 3. Стек и визуал
- Tailwind CSS, адаптивность Mobile-First.
- Лаконичная цветовая палитра: 1 доминантный нейтральный цвет (фон/текст), 1 акцентный для CTA, 1 вспомогательный. Никакой радуги.
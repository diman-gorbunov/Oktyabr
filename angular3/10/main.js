var module = angular.module("SampleApp", []);
module.controller("SampleAppCtrl", function ($scope) {
	$scope.items = [
	{ name:"ng-blur", apply: "Атрибут, класс", description: "Событие blur, которое срабатывает когда элемент теряет фокус"},
	{ name:"ng-change", apply: "Атрибут, класс", description: "Событие change, которое срабатывает когда в элементе формы меняется значение"},
	{ name:"ng-click", apply: "Атрибут, класс", description: "Событие click, которое срабатывает когда выполняется клик по элементу"},
	{ name:"ng-copy", apply: "Атрибут, класс", description: "Событие copy, которое срабатывает при копировании (Ctrl + C)"},
	{ name:"ng-cut", apply: "Атрибут, класс", description: "Событие cut, которое срабатывает при вырезании (Ctrl + X)"},
	{ name:"ng-paste", apply: "Атрибут, класс", description: "Событие paste, которое срабатывает при вставке (Ctrl + V)"},
	{ name:"ng-dbclick", apply: "Атрибут, класс", description: "Событие dbclick, которое срабатывает при двойном клике по элементу"},
	{ name:"ng-focus", apply: "Атрибут, класс", description: "Событие focus, которое срабатывает когда элемент получает фокус"},
	{ name:"ng-keydown", apply: "Атрибут, класс", description: "Событие keydown, которое срабатывает когда клавиша зажата"},
	{ name:"ng-keypress", apply: "Атрибут, класс", description: "Событие keypress, которое срабатывает после keydown"},
	{ name:"ng-keyup", apply: "Атрибут, класс", description: "Событие keyup, которое срабатывает, когда клавиша отпущена"},
	{ name:"ng-mousedown", apply: "Атрибут, класс", description: "Событие mousedown, срабатывает когда кнопка мыши нажата"},
	{ name:"ng-mouseenter", apply: "Атрибут, класс", description: "Событие mouseenter, которое срабатывает когда курсор попадает в определенную область"},
	{ name:"ng-mouseleave", apply: "Атрибут, класс", description: "Событие mouseleave, которое срабатывает когда курсор покидает область элемента"},
	{ name:"ng-mousemove", apply: "Атрибут, класс", description: "Событие mousemove, которое срабатывает когда курсор перемещается по поверхности элемента"},
	{ name:"ng-mouseover", apply: "Атрибут, класс", description: "Событие mouseover, которое срабатывает когда курсор находится над элементом"},
	{ name:"ng-mouseup", apply: "Атрибут, класс", description: "Событие mouseup, которое срабатывает когда клавиша мыши отпущена "},
	{ name:"ng-submit", apply: "Атрибут, класс", description: "Событие submit, которое срабатывает когда в элементе form была нажата кнопка submit"}]
});
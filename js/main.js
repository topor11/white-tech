const selectSingle = document.querySelector('.select__form');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}

function productsTable(element) {
    this.element = element;
    this.table = this.element.children('.cd-products-table');
    this.productsWrapper = this.table.children('.cd-products-wrapper');
    this.tableColumns = this.productsWrapper.children('.cd-products-columns');
    this.products = this.tableColumns.children('.product');
    //дополнительные свойства
    // прослушка событий таблицы
    this.bindEvents();
}

productsTable.prototype.bindEvents = function() {
    var self = this;

    self.productsWrapper.on('scroll', function() {
        // определение прокрутки влево
    });

    self.products.on('click', '.top-info', function() {
        //добавление/удаление класса .selected товару
    });

    self.filterBtn.on('click', function(event) {
        //фильтрация товаров
    });
    //reset product selection
    self.resetBtn.on('click', function(event) {
        //сброс
    });

    this.navigation.on('click', 'a', function(event) {
        //прокрутка по таблице влево-вправо с помощью кнопок
    });
}

var comparisonTables = [];
$('.cd-products-comparison-table').each(function() {
    //создаём объект productsTable для каждого .cd-products-comparison-table
    comparisonTables.push(new productsTable($(this)));
});
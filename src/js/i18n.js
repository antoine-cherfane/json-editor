'use strict'

/* eslint-disable no-template-curly-in-string */

import './polyfills'

const _defs = {
  en: {
    array: 'Array',
    auto: 'Auto',
    appendText: 'Append',
    appendTitle:
      "Append a new field with type 'auto' after this field (Ctrl+Shift+Ins)",
    appendSubmenuTitle: 'Select the type of the field to be appended',
    appendTitleAuto: "Append a new field with type 'auto' (Ctrl+Shift+Ins)",
    ascending: 'Ascending',
    ascendingTitle: 'Sort the childs of this ${type} in ascending order',
    actionsMenu: 'Click to open the actions menu (Ctrl+M)',
    cannotParseFieldError: 'Cannot parse field into JSON',
    cannotParseValueError: 'Cannot parse value into JSON',
    collapseAll: 'Collapse all fields',
    compactTitle: 'Compact JSON data, remove all whitespaces (Ctrl+Shift+I)',
    descending: 'Descending',
    descendingTitle: 'Sort the childs of this ${type} in descending order',
    drag: 'Drag to move this field (Alt+Shift+Arrows)',
    duplicateKey: 'duplicate key',
    duplicateText: 'Duplicate',
    duplicateTitle: 'Duplicate selected fields (Ctrl+D)',
    duplicateField: 'Duplicate this field (Ctrl+D)',
    duplicateFieldError: 'Duplicate field name',
    empty: 'empty',
    expandAll: 'Expand all fields',
    expandTitle:
      'Click to expand/collapse this field (Ctrl+E). \n' +
      'Ctrl+Click to expand/collapse including all childs.',
    formatTitle:
      'Format JSON data, with proper indentation and line feeds (Ctrl+I)',
    insert: 'Insert',
    insertTitle:
      "Insert a new field with type 'auto' before this field (Ctrl+Ins)",
    insertSub: 'Select the type of the field to be inserted',
    object: 'Object',
    ok: 'Ok',
    redo: 'Redo (Ctrl+Shift+Z)',
    removeText: 'Remove',
    removeTitle: 'Remove selected fields (Ctrl+Del)',
    removeField: 'Remove this field (Ctrl+Del)',
    repairTitle:
      'Repair JSON: fix quotes and escape characters, remove comments and JSONP notation, turn JavaScript objects into JSON.',
    searchTitle: 'Search fields and values',
    searchNextResultTitle: 'Next result (Enter)',
    searchPreviousResultTitle: 'Previous result (Shift + Enter)',
    selectNode: 'Select a node...',
    showAll: 'show all',
    showMore: 'show more',
    showMoreStatus: 'displaying ${visibleChilds} of ${totalChilds} items.',
    sort: 'Sort',
    sortTitle: 'Sort the childs of this ${type}',
    sortTitleShort: 'Sort contents',
    sortFieldLabel: 'Field:',
    sortDirectionLabel: 'Direction:',
    sortFieldTitle:
      'Select the nested field by which to sort the array or object',
    sortAscending: 'Ascending',
    sortAscendingTitle: 'Sort the selected field in ascending order',
    sortDescending: 'Descending',
    sortDescendingTitle: 'Sort the selected field in descending order',
    string: 'String',
    transform: 'Transform',
    transformTitle: 'Filter, sort, or transform the childs of this ${type}',
    transformTitleShort: 'Filter, sort, or transform contents',
    extract: 'Extract',
    extractTitle: 'Extract this ${type}',
    transformQueryTitle: 'Enter a JMESPath query',
    transformWizardLabel: 'Wizard',
    transformWizardFilter: 'Filter',
    transformWizardSortBy: 'Sort by',
    transformWizardSelectFields: 'Select fields',
    transformQueryLabel: 'Query',
    transformPreviewLabel: 'Preview',
    type: 'Type',
    typeTitle: 'Change the type of this field',
    openUrl: 'Ctrl+Click or Ctrl+Enter to open url in new window',
    undo: 'Undo last action (Ctrl+Z)',
    validationCannotMove: 'Cannot move a field into a child of itself',
    autoType:
      'Field type "auto". ' +
      'The field type is automatically determined from the value ' +
      'and can be a string, number, boolean, or null.',
    objectType:
      'Field type "object". ' +
      'An object contains an unordered set of key/value pairs.',
    arrayType:
      'Field type "array". ' +
      'An array contains an ordered collection of values.',
    stringType:
      'Field type "string". ' +
      'Field type is not determined from the value, ' +
      'but always returned as string.',
    modeEditorTitle: 'Switch Editor Mode',
    modeCodeText: 'Code',
    modeCodeTitle: 'Switch to code highlighter',
    modeFormText: 'Form',
    modeFormTitle: 'Switch to form editor',
    modeTextText: 'Text',
    modeTextTitle: 'Switch to plain text editor',
    modeTreeText: 'Tree',
    modeTreeTitle: 'Switch to tree editor',
    modeViewText: 'View',
    modeViewTitle: 'Switch to tree view',
    modePreviewText: 'Preview',
    modePreviewTitle: 'Switch to preview mode',
    examples: 'Examples',
    default: 'Default',
    containsInvalidProperties: 'Contains invalid properties',
    containsInvalidItems: 'Contains invalid items'
  },
  es: {
    array: 'Matriz',
    auto: 'Auto',
    appendText: 'Agregar',
    appendTitle:
      "Agregue un nuevo campo con el tipo 'auto' después de este campo (Ctrl + Shift + Ins)",
    appendSubmenuTitle: 'Seleccione el tipo de campo que se agregará',
    appendTitleAuto:
      "Agregue un nuevo campo con el tipo 'auto' (Ctrl + Shift + Ins)",
    ascending: 'Ascendente',
    ascendingTitle:
      'Ordene los elementos secundarios de este ${type} en orden ascendente',
    actionsMenu: 'Haga clic para abrir el menú de acciones (Ctrl + M)',
    cannotParseFieldError: 'No se puede parsear el campo en JSON',
    cannotParseValueError: 'No se puede parsear el valor en JSON',
    collapseAll: 'Contraer todos los campos',
    compactTitle:
      'Compactar datos JSON, eliminar todos los espacios en blanco (Ctrl + Shift + I)',
    descending: 'Descendente',
    descendingTitle: 'Ordene los hijos de este ${type} en orden descendente',
    drag: 'Arrastre para mover este campo (Alt + Mayús + Flechas)',
    duplicateKey: 'llave duplicada',
    duplicateText: 'Duplicar',
    duplicateTitle: 'Duplicar campos seleccionados (Ctrl + D)',
    duplicateField: 'Duplicar este campo (Ctrl + D)',
    duplicateFieldError: 'Nombre de campo duplicado',
    empty: 'vacio',
    expandAll: 'Expandir todos los campos',
    expandTitle:
      'Haga clic para expandir/contraer este campo (Ctrl + E). \n ' +
      ' Ctrl+Clic para expandir/contraer incluyendo todos los niños.',
    formatTitle:
      'Formatee los datos JSON, con la sangría y los avances de línea adecuados (Ctrl + I)',
    insert: 'Insertar',
    insertTitle:
      "Inserte un nuevo campo con el tipo 'auto' antes de este campo (Ctrl + Ins)",
    insertSub: 'Seleccione el tipo de campo a insertar',
    object: 'Objeto',
    ok: 'Ok',
    redo: 'Rehacer (Ctrl+Mayús+Z)',
    removeText: 'Eliminar',
    removeTitle: 'Eliminar campos seleccionados (Ctrl+Supr)',
    removeField: 'Eliminar este campo (Ctrl+Supr)',
    repairTitle:
      'Reparar JSON: corrija comillas y caracteres de escape, elimine comentarios y notación JSONP, convierta objetos JavaScript en JSON.',
    searchTitle: 'Campos de búsqueda y valores',
    searchNextResultTitle: 'Siguiente resultado (Entrar)',
    searchPreviousResultTitle: 'Resultado anterior (Shift + Enter)',
    selectNode: 'Seleccione un nodo...',
    showAll: 'mostrar todo',
    showMore: 'mostrar más',
    showMoreStatus: 'mostrando ${visibleChilds} de ${totalChilds} elementos.',
    sort: 'Ordenar',
    sortTitle: 'Ordene los hijos de este ${type}',
    sortTitleShort: 'Ordenar contenidos',
    sortFieldLabel: 'Campo:',
    sortDirectionLabel: 'Dirección:',
    sortFieldTitle:
      'Seleccione el campo anidado por el cual ordenar la matriz u objeto',
    sortAscending: 'Ascendente',
    sortAscendingTitle: 'Ordenar el campo seleccionado en orden ascendente',
    sortDescending: 'Descendente',
    sortDescendingTitle:
      'Ordenar por el campo seleccionado, en orden descendente',
    string: 'Texto',
    transform: 'Transformar',
    transformTitle: 'Filtrar, ordenar o transformar los hijos de este ${type}',
    transformTitleShort: 'Filtrar, ordenar o transformar contenidos',
    extract: 'Extraer',
    extractTitle: 'Extrae este ${type}',
    transformQueryTitle: 'Ingrese una consulta JMESPath',
    transformWizardLabel: 'Wizard',
    transformWizardFilter: 'Filtro',
    transformWizardSortBy: 'Ordenar por',
    transformWizardSelectFields: 'Seleccione un campo',
    transformQueryLabel: 'Consulta',
    transformPreviewLabel: 'Vista Previa',
    type: 'Tipo',
    typeTitle: 'Cambiar el tipo de campo',
    openUrl: 'Ctrl+Click o Ctrl+Enter para abrir la URL en una nueva ventana',
    undo: 'Deshacer la última acción (Ctrl+Z)',
    validationCannotMove: 'No se puede mover un campo a un hijo de sí mismo.',
    autoType:
      'Field type "auto". ' +
      'The field type is automatically determined from the value ' +
      'and can be a string, number, boolean, or null.',
    objectType:
      'Tipo de campo "objeto". ' +
      ' Un objeto contiene un conjunto desordenado de pares clave/valor.',
    arrayType:
      'Tipo de campo "matriz". ' +
      ' Una matriz contiene una colección ordenada de valores.',
    stringType:
      'Tipo de campo "cadena". ' +
      ' El tipo de campo no se determina a partir del valor, ' +
      ' pero siempre se devuelve como una cadena.',
    modeEditorTitle: 'Cambiar modo de editor',
    modeCodeText: 'Codigo',
    modeCodeTitle: 'Cambiar al resaltador de código',
    modeFormText: 'Formulario',
    modeFormTitle: 'Cambiar al editor de formularios',
    modeTextText: 'Texto',
    modeTextTitle: 'Cambiar al editor de texto sin formato',
    modeTreeText: 'Arbol',
    modeTreeTitle: 'Cambiar al editor de árbol',
    modeViewText: 'Vista',
    modeViewTitle: 'Cambiar a la vista de árbol',
    modePreviewText: 'Vista Previa',
    modePreviewTitle: 'Cambiar al modo de vista previa',
    examples: 'Ejemplos',
    default: 'Predeterminado',
    containsInvalidProperties: 'Contiene propiedades no validas',
    containsInvalidItems: 'Contiene items no validos'
  },
  'zh-CN': {
    array: '数组',
    auto: '自动',
    appendText: '追加',
    appendTitle: '在此字段后追加一个类型为“auto”的新字段 (Ctrl+Shift+Ins)',
    appendSubmenuTitle: '选择要追加的字段类型',
    appendTitleAuto: '追加类型为“auto”的新字段 (Ctrl+Shift+Ins)',
    ascending: '升序',
    ascendingTitle: '升序排列${type}的子节点',
    actionsMenu: '点击打开动作菜单(Ctrl+M)',
    cannotParseFieldError: '无法将字段解析为JSON',
    cannotParseValueError: '无法将值解析为JSON',
    collapseAll: '缩进所有字段',
    compactTitle: '压缩JSON数据，删除所有空格 (Ctrl+Shift+I)',
    descending: '降序',
    descendingTitle: '降序排列${type}的子节点',
    drag: '拖拽移动该节点(Alt+Shift+Arrows)',
    duplicateKey: '重复键',
    duplicateText: '复制',
    duplicateTitle: '复制选中字段(Ctrl+D)',
    duplicateField: '复制该字段(Ctrl+D)',
    duplicateFieldError: '重复的字段名称',
    empty: '清空',
    expandAll: '展开所有字段',
    expandTitle:
      '点击 展开/收缩 该字段(Ctrl+E). \n' +
      'Ctrl+Click 展开/收缩 包含所有子节点.',
    formatTitle: '使用适当的缩进和换行符格式化JSON数据 (Ctrl+I)',
    insert: '插入',
    insertTitle: '在此字段前插入类型为“auto”的新字段 (Ctrl+Ins)',
    insertSub: '选择要插入的字段类型',
    object: '对象',
    ok: 'Ok',
    redo: '重做 (Ctrl+Shift+Z)',
    removeText: '移除',
    removeTitle: '移除选中字段 (Ctrl+Del)',
    removeField: '移除该字段 (Ctrl+Del)',
    repairTitle:
      '修复JSON：修复引号和转义符，删除注释和JSONP表示法，将JavaScript对象转换为JSON。',
    selectNode: '选择一个节点...',
    showAll: '展示全部',
    showMore: '展示更多',
    showMoreStatus: '显示${totalChilds}的${visibleChilds}项目.',
    sort: '排序',
    sortTitle: '排序${type}的子节点',
    sortTitleShort: '内容排序',
    sortFieldLabel: '字段：',
    sortDirectionLabel: '方向：',
    sortFieldTitle: '选择用于对数组或对象排序的嵌套字段',
    sortAscending: '升序排序',
    sortAscendingTitle: '按照该字段升序排序',
    sortDescending: '降序排序',
    sortDescendingTitle: '按照该字段降序排序',
    string: '字符串',
    transform: '变换',
    transformTitle: '筛选，排序，或者转换${type}的子节点',
    transformTitleShort: '筛选，排序，或者转换内容',
    extract: '提取',
    extractTitle: '提取这个 ${type}',
    transformQueryTitle: '输入JMESPath查询',
    transformWizardLabel: '向导',
    transformWizardFilter: '筛选',
    transformWizardSortBy: '排序',
    transformWizardSelectFields: '选择字段',
    transformQueryLabel: '查询',
    transformPreviewLabel: '预览',
    type: '类型',
    typeTitle: '更改字段类型',
    openUrl: 'Ctrl+Click 或者 Ctrl+Enter 在新窗口打开链接',
    undo: '撤销上次动作 (Ctrl+Z)',
    validationCannotMove: '无法将字段移入其子节点',
    autoType:
      '字段类型 "auto". ' +
      '字段类型由值自动确定 ' +
      '可以为 string，number，boolean，或者 null.',
    objectType: '字段类型 "object". ' + '对象包含一组无序的键/值对.',
    arrayType: '字段类型 "array". ' + '数组包含值的有序集合.',
    stringType:
      '字段类型 "string". ' +
      '字段类型由值自动确定，' +
      '但始终作为字符串返回.',
    modeCodeText: '代码',
    modeCodeTitle: '切换至代码高亮',
    modeFormText: '表单',
    modeFormTitle: '切换至表单编辑',
    modeTextText: '文本',
    modeTextTitle: '切换至文本编辑',
    modeTreeText: '树',
    modeTreeTitle: '切换至树编辑',
    modeViewText: '视图',
    modeViewTitle: '切换至树视图',
    modePreviewText: '预览',
    modePreviewTitle: '切换至预览模式',
    examples: '例子',
    default: '缺省',
    containsInvalidProperties: '包含无效的属性',
    containsInvalidItems: '包含无效项目'
  },
  'pt-BR': {
    array: 'Lista',
    auto: 'Automatico',
    appendText: 'Adicionar',
    appendTitle:
      "Adicionar novo campo com tipo 'auto' depois deste campo (Ctrl+Shift+Ins)",
    appendSubmenuTitle: 'Selecione o tipo do campo a ser adicionado',
    appendTitleAuto: "Adicionar novo campo com tipo 'auto' (Ctrl+Shift+Ins)",
    ascending: 'Ascendente',
    ascendingTitle: 'Organizar filhor do tipo ${type} em crescente',
    actionsMenu: 'Clique para abrir o menu de ações (Ctrl+M)',
    cannotParseFieldError: 'Não é possível analisar o campo no JSON',
    cannotParseValueError: 'Não é possível analisar o valor em JSON',
    collapseAll: 'Fechar todos campos',
    compactTitle:
      'Dados JSON compactos, remova todos os espaços em branco (Ctrl+Shift+I)',
    descending: 'Descendente',
    descendingTitle: 'Organizar o filhos do tipo ${type} em decrescente',
    duplicateKey: 'chave duplicada',
    drag: 'Arraste para mover este campo (Alt+Shift+Arrows)',
    duplicateText: 'Duplicar',
    duplicateTitle: 'Duplicar campos selecionados (Ctrl+D)',
    duplicateField: 'Duplicar este campo (Ctrl+D)',
    duplicateFieldError: 'Nome do campo duplicado',
    empty: 'vazio',
    expandAll: 'Expandir todos campos',
    expandTitle:
      'Clique para expandir/encolher este campo (Ctrl+E). \n' +
      'Ctrl+Click para expandir/encolher incluindo todos os filhos.',
    formatTitle:
      'Formate dados JSON, com recuo e feeds de linha adequados (Ctrl+I)',
    insert: 'Inserir',
    insertTitle:
      "Inserir um novo campo do tipo 'auto' antes deste campo (Ctrl+Ins)",
    insertSub: 'Selecionar o tipo de campo a ser inserido',
    object: 'Objeto',
    ok: 'Ok',
    redo: 'Refazer (Ctrl+Shift+Z)',
    removeText: 'Remover',
    removeTitle: 'Remover campos selecionados (Ctrl+Del)',
    removeField: 'Remover este campo (Ctrl+Del)',
    repairTitle:
      'Repare JSON: corrija aspas e caracteres de escape, remova comentários e notação JSONP, transforme objetos JavaScript em JSON.',
    selectNode: 'Selecione um nódulo...',
    showAll: 'mostrar todos',
    showMore: 'mostrar mais',
    showMoreStatus: 'exibindo ${visibleChilds} de ${totalChilds} itens.',
    sort: 'Organizar',
    sortTitle: 'Organizar os filhos deste ${type}',
    sortTitleShort: 'Organizar os filhos',
    sortFieldLabel: 'Campo:',
    sortDirectionLabel: 'Direção:',
    sortFieldTitle:
      'Selecione um campo filho pelo qual ordenar o array ou objeto',
    sortAscending: 'Ascendente',
    sortAscendingTitle: 'Ordenar o campo selecionado por ordem ascendente',
    sortDescending: 'Descendente',
    sortDescendingTitle: 'Ordenar o campo selecionado por ordem descendente',
    string: 'Texto',
    transform: 'Transformar',
    transformTitle: 'Filtrar, ordenar ou transformar os filhos deste ${type}',
    transformTitleShort: 'Filtrar, ordenar ou transformar conteúdos',
    transformQueryTitle: 'Insira uma expressão JMESPath',
    transformWizardLabel: 'Assistente',
    transformWizardFilter: 'Filtro',
    transformWizardSortBy: 'Ordenar por',
    transformWizardSelectFields: 'Selecionar campos',
    transformQueryLabel: 'Expressão',
    transformPreviewLabel: 'Visualizar',
    type: 'Tipo',
    typeTitle: 'Mudar o tipo deste campo',
    openUrl: 'Ctrl+Click ou Ctrl+Enter para abrir link em nova janela',
    undo: 'Desfazer último ação (Ctrl+Z)',
    validationCannotMove: 'Não pode mover um campo como filho dele mesmo',
    autoType:
      'Campo do tipo "auto". ' +
      'O tipo do campo é determinao automaticamente a partir do seu valor ' +
      'e pode ser texto, número, verdade/falso ou nulo.',
    objectType:
      'Campo do tipo "objeto". ' +
      'Um objeto contém uma lista de pares com chave e valor.',
    arrayType:
      'Campo do tipo "lista". ' +
      'Uma lista contem uma coleção de valores ordenados.',
    stringType:
      'Campo do tipo "string". ' +
      'Campo do tipo nao é determinado através do seu valor, ' +
      'mas sempre retornara um texto.',
    examples: 'Exemplos',
    default: 'Revelia',
    containsInvalidProperties: 'Contém propriedades inválidas',
    containsInvalidItems: 'Contém itens inválidos'
  },
  tr: {
    array: 'Dizin',
    auto: 'Otomatik',
    appendText: 'Ekle',
    appendTitle:
      "Bu alanın altına 'otomatik' tipinde yeni bir alan ekle (Ctrl+Shift+Ins)",
    appendSubmenuTitle: 'Eklenecek alanın tipini seç',
    appendTitleAuto: "'Otomatik' tipinde yeni bir alan ekle (Ctrl+Shift+Ins)",
    ascending: 'Artan',
    ascendingTitle: "${type}'ın alt tiplerini artan düzende sırala",
    actionsMenu: 'Aksiyon menüsünü açmak için tıklayın (Ctrl+M)',
    collapseAll: 'Tüm alanları kapat',
    descending: 'Azalan',
    descendingTitle: "${type}'ın alt tiplerini azalan düzende sırala",
    drag: 'Bu alanı taşımak için sürükleyin (Alt+Shift+Arrows)',
    duplicateKey: 'Var olan anahtar',
    duplicateText: 'Aşağıya kopyala',
    duplicateTitle: 'Seçili alanlardan bir daha oluştur (Ctrl+D)',
    duplicateField: 'Bu alandan bir daha oluştur (Ctrl+D)',
    duplicateFieldError: 'Duplicate field name',
    cannotParseFieldError: "Alan JSON'a ayrıştırılamıyor",
    cannotParseValueError: "JSON'a değer ayrıştırılamıyor",
    empty: 'boş',
    expandAll: 'Tüm alanları aç',
    expandTitle:
      'Bu alanı açmak/kapatmak için tıkla (Ctrl+E). \n' +
      'Alt alanlarda dahil tüm alanları açmak için Ctrl+Click ',
    insert: 'Ekle',
    insertTitle:
      "Bu alanın üstüne 'otomatik' tipinde yeni bir alan ekle (Ctrl+Ins)",
    insertSub: 'Araya eklenecek alanın tipini seç',
    object: 'Nesne',
    ok: 'Tamam',
    redo: 'Yeniden yap (Ctrl+Shift+Z)',
    removeText: 'Kaldır',
    removeTitle: 'Seçilen alanları kaldır (Ctrl+Del)',
    removeField: 'Bu alanı kaldır (Ctrl+Del)',
    selectNode: 'Bir nesne seç...',
    showAll: 'tümünü göster',
    showMore: 'daha fazla göster',
    showMoreStatus:
      '${totalChilds} alanın ${visibleChilds} alt alanları gösteriliyor',
    sort: 'Sırala',
    sortTitle: "${type}'ın alt alanlarını sırala",
    sortTitleShort: 'İçerikleri sırala',
    sortFieldLabel: 'Alan:',
    sortDirectionLabel: 'Yön:',
    sortFieldTitle:
      'Diziyi veya nesneyi sıralamak için iç içe geçmiş alanı seçin',
    sortAscending: 'Artan',
    sortAscendingTitle: 'Seçili alanı artan düzende sırala',
    sortDescending: 'Azalan',
    sortDescendingTitle: 'Seçili alanı azalan düzende sırala',
    string: 'Karakter Dizisi',
    transform: 'Dönüştür',
    transformTitle: "${type}'ın alt alanlarını filtrele, sırala veya dönüştür",
    transformTitleShort: 'İçerikleri filterele, sırala veya dönüştür',
    transformQueryTitle: 'JMESPath sorgusu gir',
    transformWizardLabel: 'Sihirbaz',
    transformWizardFilter: 'Filtre',
    transformWizardSortBy: 'Sırala',
    transformWizardSelectFields: 'Alanları seç',
    transformQueryLabel: 'Sorgu',
    transformPreviewLabel: 'Önizleme',
    type: 'Tip',
    typeTitle: 'Bu alanın tipini değiştir',
    openUrl: "URL'i yeni bir pencerede açmak için Ctrl+Click veya Ctrl+Enter",
    undo: 'Son değişikliği geri al (Ctrl+Z)',
    validationCannotMove: 'Alt alan olarak taşınamıyor',
    autoType:
      'Alan tipi "otomatik". ' +
      'Alan türü otomatik olarak değerden belirlenir' +
      've bir dize, sayı, boolean veya null olabilir.',
    objectType:
      'Alan tipi "nesne". ' +
      'Bir nesne, sıralanmamış bir anahtar / değer çifti kümesi içerir.',
    arrayType:
      'Alan tipi "dizi". ' + 'Bir dizi, düzenli değerler koleksiyonu içerir.',
    stringType:
      'Alan tipi "karakter dizisi". ' +
      'Alan türü değerden belirlenmez,' +
      'ancak her zaman karakter dizisi olarak döndürülür.',
    modeCodeText: 'Kod',
    modeCodeTitle: 'Kod vurgulayıcıya geç',
    modeFormText: 'Form',
    modeFormTitle: 'Form düzenleyiciye geç',
    modeTextText: 'Metin',
    modeTextTitle: 'Düz metin düzenleyiciye geç',
    modeTreeText: 'Ağaç',
    modeTreeTitle: 'Ağaç düzenleyiciye geç',
    modeViewText: 'Görünüm',
    modeViewTitle: 'Ağaç görünümüne geç',
    examples: 'Örnekler',
    default: 'Varsayılan',
    containsInvalidProperties: 'Geçersiz özellikler içeriyor',
    containsInvalidItems: 'Geçersiz öğeler içeriyor'
  },
  ja: {
    array: '配列',
    auto: 'オート',
    appendText: '追加',
    appendTitle: '次のフィールドに"オート"のフィールドを追加 (Ctrl+Shift+Ins)',
    appendSubmenuTitle: '追加するフィールドの型を選択してください',
    appendTitleAuto: '"オート"のフィールドを追加 (Ctrl+Shift+Ins)',
    ascending: '昇順',
    ascendingTitle: '${type}の子要素を昇順に並べ替え',
    actionsMenu: 'クリックしてアクションメニューを開く (Ctrl+M)',
    collapseAll: 'すべてを折りたたむ',
    descending: '降順',
    descendingTitle: '${type}の子要素を降順に並べ替え',
    drag: 'ドラッグして選択中のフィールドを移動 (Alt+Shift+Arrows)',
    duplicateKey: '複製キー',
    duplicateText: '複製',
    duplicateTitle: '選択中のフィールドを複製 (Ctrl+D)',
    duplicateField: '選択中のフィールドを複製 (Ctrl+D)',
    duplicateFieldError: 'フィールド名が重複しています',
    cannotParseFieldError: 'JSONのフィールドを解析できません',
    cannotParseValueError: 'JSONの値を解析できません',
    empty: '空',
    expandAll: 'すべてを展開',
    expandTitle:
      'クリックしてフィールドを展開/折りたたむ (Ctrl+E). \n' +
      'Ctrl+Click ですべての子要素を展開/折りたたむ',
    insert: '挿入',
    insertTitle: '選択中のフィールドの前に新しいフィールドを挿入 (Ctrl+Ins)',
    insertSub: '挿入するフィールドの型を選択',
    object: 'オブジェクト',
    ok: '実行',
    redo: 'やり直す (Ctrl+Shift+Z)',
    removeText: '削除',
    removeTitle: '選択中のフィールドを削除 (Ctrl+Del)',
    removeField: '選択中のフィールドを削除 (Ctrl+Del)',
    selectNode: 'ノードを選択...',
    showAll: 'すべてを表示',
    showMore: 'もっと見る',
    showMoreStatus:
      '${totalChilds}個のアイテムのうち ${visibleChilds}個を表示しています。',
    sort: '並べ替え',
    sortTitle: '${type}の子要素を並べ替え',
    sortTitleShort: '並べ替え',
    sortFieldLabel: 'フィールド:',
    sortDirectionLabel: '順序:',
    sortFieldTitle: '配列またはオブジェクトを並び替えるためのフィールドを選択',
    sortAscending: '昇順',
    sortAscendingTitle: '選択中のフィールドを昇順に並び替え',
    sortDescending: '降順',
    sortDescendingTitle: '選択中のフィールドを降順に並び替え',
    string: '文字列',
    transform: '変換',
    transformTitle: '${type}の子要素をフィルター・並び替え・変換する',
    transformTitleShort: '内容をフィルター・並び替え・変換する',
    extract: '抽出',
    extractTitle: '${type}を抽出',
    transformQueryTitle: 'JMESPathクエリを入力',
    transformWizardLabel: 'ウィザード',
    transformWizardFilter: 'フィルター',
    transformWizardSortBy: '並び替え',
    transformWizardSelectFields: 'フィールドを選択',
    transformQueryLabel: 'クエリ',
    transformPreviewLabel: 'プレビュー',
    type: '型',
    typeTitle: '選択中のフィールドの型を変更',
    openUrl: 'Ctrl+Click または Ctrl+Enter で 新規ウィンドウでURLを開く',
    undo: '元に戻す (Ctrl+Z)',
    validationCannotMove: '子要素に移動できません ',
    autoType:
      'オート： ' +
      'フィールドの型は値から自動的に決定されます。 ' +
      '(文字列・数値・ブール・null)',
    objectType:
      'オブジェクト： ' +
      'オブジェクトは順序が決まっていないキーと値のペア組み合わせです。',
    arrayType: '配列： ' + '配列は順序が決まっている値の集合体です。',
    stringType:
      '文字列： ' +
      'フィールド型は値から決定されませんが、' +
      '常に文字列として返されます。',
    modeCodeText: 'コードモード',
    modeCodeTitle: 'ハイライトモードに切り替え',
    modeFormText: 'フォームモード',
    modeFormTitle: 'フォームモードに切り替え',
    modeTextText: 'テキストモード',
    modeTextTitle: 'テキストモードに切り替え',
    modeTreeText: 'ツリーモード',
    modeTreeTitle: 'ツリーモードに切り替え',
    modeViewText: 'ビューモード',
    modeViewTitle: 'ビューモードに切り替え',
    modePreviewText: 'プレビュー',
    modePreviewTitle: 'プレビューに切り替え',
    examples: '例',
    default: 'デフォルト',
    containsInvalidProperties: '無効なプロパティが含まれています',
    containsInvalidItems: '無効なアイテムが含まれています'
  },
  'fr-FR': {
    array: 'Liste',
    auto: 'Auto',
    appendText: 'Ajouter',
    appendTitle:
      "Ajouter un champ de type 'auto' après ce champ (Ctrl+Shift+Ins)",
    appendSubmenuTitle: 'Sélectionner le type du champ à ajouter',
    appendTitleAuto: "Ajouter un champ de type 'auto' (Ctrl+Shift+Ins)",
    ascending: 'Ascendant',
    ascendingTitle: 'Trier les enfants de ce ${type} par ordre ascendant',
    actionsMenu: 'Ouvrir le menu des actions (Ctrl+M)',
    collapseAll: 'Regrouper',
    descending: 'Descendant',
    descendingTitle: 'Trier les enfants de ce ${type} par ordre descendant',
    drag: 'Déplacer (Alt+Shift+Arrows)',
    duplicateKey: 'Dupliquer la clé',
    duplicateText: 'Dupliquer',
    duplicateTitle: 'Dupliquer les champs sélectionnés (Ctrl+D)',
    duplicateField: 'Dupliquer ce champ (Ctrl+D)',
    duplicateFieldError: 'Dupliquer le nom de champ',
    cannotParseFieldError: 'Champ impossible à parser en JSON',
    cannotParseValueError: 'Valeur impossible à parser en JSON',
    empty: 'vide',
    expandAll: 'Étendre',
    expandTitle:
      'Étendre/regrouper ce champ (Ctrl+E). \n' +
      'Ctrl+Click pour étendre/regrouper avec tous les champs.',
    insert: 'Insérer',
    insertTitle: "Insérer un champ de type 'auto' avant ce champ (Ctrl+Ins)",
    insertSub: 'Sélectionner le type de champ à insérer',
    object: 'Objet',
    ok: 'Ok',
    redo: 'Rejouer (Ctrl+Shift+Z)',
    removeText: 'Supprimer',
    removeTitle: 'Supprimer les champs sélectionnés (Ctrl+Del)',
    removeField: 'Supprimer ce champ (Ctrl+Del)',
    searchTitle: 'Rechercher champs et valeurs',
    searchNextResultTitle: 'Résultat suivant (Enter)',
    searchPreviousResultTitle: 'Résultat précédent (Shift + Enter)',
    selectNode: 'Sélectionner un nœud...',
    showAll: 'voir tout',
    showMore: 'voir plus',
    showMoreStatus: '${visibleChilds} éléments affichés de ${totalChilds}.',
    sort: 'Trier',
    sortTitle: 'Trier les champs de ce ${type}',
    sortTitleShort: 'Trier',
    sortFieldLabel: 'Champ:',
    sortDirectionLabel: 'Direction:',
    sortFieldTitle:
      'Sélectionner les champs permettant de trier les listes et objet',
    sortAscending: 'Ascendant',
    sortAscendingTitle: 'Trier les champs sélectionnés par ordre ascendant',
    sortDescending: 'Descendant',
    sortDescendingTitle: 'Trier les champs sélectionnés par ordre descendant',
    string: 'Chaîne',
    transform: 'Transformer',
    transformTitle: 'Filtrer, trier, or transformer les enfants de ce ${type}',
    transformTitleShort: 'Filtrer, trier ou transformer le contenu',
    extract: 'Extraire',
    extractTitle: 'Extraire ce ${type}',
    transformQueryTitle: 'Saisir une requête JMESPath',
    transformWizardLabel: 'Assistant',
    transformWizardFilter: 'Filtrer',
    transformWizardSortBy: 'Trier par',
    transformWizardSelectFields: 'Sélectionner les champs',
    transformQueryLabel: 'Requête',
    transformPreviewLabel: 'Prévisualisation',
    type: 'Type',
    typeTitle: 'Changer le type de ce champ',
    openUrl:
      "Ctrl+Click ou Ctrl+Enter pour ouvrir l'url dans une autre fenêtre",
    undo: 'Annuler la dernière action (Ctrl+Z)',
    validationCannotMove: 'Cannot move a field into a child of itself',
    autoType:
      'Champe de type "auto". ' +
      'Ce type de champ est automatiquement déterminé en fonction de la valeur ' +
      'et peut être de type "chaîne", "nombre", "booléen" ou null.',
    objectType:
      'Champ de type "objet". ' +
      'Un objet contient un ensemble non ordonné de paires clé/valeur.',
    arrayType:
      'Champ de type "liste". ' +
      'Une liste contient une collection ordonnée de valeurs.',
    stringType:
      'Champ de type "chaîne". ' +
      "Ce type de champ n'est pas déterminé en fonction de la valeur, " +
      'mais retourne systématiquement une chaîne de caractères.',
    modeEditorTitle: "Changer mode d'édition",
    modeCodeText: 'Code',
    modeCodeTitle: 'Activer surlignage code',
    modeFormText: 'Formulaire',
    modeFormTitle: 'Activer formulaire',
    modeTextText: 'Texte',
    modeTextTitle: 'Activer éditeur texte',
    modeTreeText: 'Arbre',
    modeTreeTitle: 'Activer éditeur arbre',
    modeViewText: 'Lecture seule',
    modeViewTitle: 'Activer vue arbre',
    modePreviewText: 'Prévisualisation',
    modePreviewTitle: 'Activer mode prévisualiser',
    examples: 'Exemples',
    default: 'Défaut',
    containsInvalidProperties: 'Contient des propriétés non valides',
    containsInvalidItems: 'Contient des éléments invalides'
  },
  de: {
    array: 'Auflistung',
    auto: 'Auto',
    appendText: 'anhängen',
    appendTitle:
      "Fügen Sie nach diesem Feld ein neues Feld mit dem Typ 'auto' ein (Strg+Umschalt+Ein)",
    appendSubmenuTitle: 'Wählen Sie den Typ des neuen Feldes',
    appendTitleAuto:
      "Ein neues Feld vom Typ 'auto' hinzufügen (Strg+Umschalt+Ein)",
    ascending: 'Aufsteigend',
    ascendingTitle:
      'Sortieren Sie die Elemente dieses ${type} in aufsteigender Reihenfolge',
    actionsMenu: 'Klicken Sie zum Öffnen des Aktionsmenüs (Strg+M)',
    cannotParseFieldError: 'Feld kann nicht in JSON geparst werden',
    cannotParseValueError: 'Wert kann nicht in JSON geparst werden',
    collapseAll: 'Alle Felder zuklappen',
    compactTitle:
      'JSON-Daten verdichten, alle Leerzeichen entfernen (Strg+Umschalt+\\)',
    descending: 'Absteigend',
    descendingTitle:
      'Sortieren Sie die Elemente dieses ${type} in absteigender Reihenfolge',
    drag: 'Ziehen, um dieses Feld zu verschieben (Alt+Umschalt+Pfeile)',
    duplicateKey: 'Doppelter Schlüssel',
    duplicateText: 'Duplikat',
    duplicateTitle: 'Ausgewählte Felder duplizieren (Strg+D)',
    duplicateField: 'Dieses Feld duplizieren (Strg+D)',
    duplicateFieldError: 'Doppelter Feldname',
    empty: 'leer',
    expandAll: 'Alle Felder anzeigen',
    expandTitle:
      'Klicken Sie, um dieses Feld zu erweitern/zu kollabieren (Strg+E). \nStrg+Klicken Sie, um dieses Feld einschließlich aller Elemente zu erweitern/zu kollabieren.',
    formatTitle:
      'JSON-Daten mit korrekter Einrückung und Zeilenvorschüben formatieren (Strg+\\)',
    insert: 'einfügen',
    insertTitle:
      "Fügen Sie vor diesem Feld ein neues Feld mit dem Typ 'auto' ein (Strg+Einfg)",
    insertSub: 'Wählen Sie den Typ des neuen Feldes',
    object: 'Objekt',
    ok: 'Ok',
    redo: 'Wiederholen (Strg+Umschalt+Z)',
    removeText: 'entfernen',
    removeTitle: 'Ausgewählte Felder entfernen (Strg+Entf)',
    removeField: 'Dieses Feld entfernen (Strg+Entf)',
    repairTitle:
      'JSON reparieren: Anführungszeichen und Escape-Zeichen korrigieren, Kommentare und JSONP-Notation entfernen, JavaScript-Objekte in JSON umwandeln.',
    searchTitle: 'Suchfelder und Werte',
    searchNextResultTitle: 'Nächstes Ergebnis (Enter)',
    searchPreviousResultTitle: 'Vorheriges Ergebnis (Umschalt + Eingabe)',
    selectNode: 'Wählen Sie einen Knoten aus...',
    showAll: 'alle anzeigen',
    showMore: 'mehr anzeigen',
    showMoreStatus:
      'Anzeige von ${visibleChilds} von ${totalChilds}-Elementen.',
    sort: 'Sortieren',
    sortTitle: 'Sortieren Sie die Elemente dieses ${type}',
    sortTitleShort: 'Inhalt sortieren',
    sortFieldLabel: 'Feld:',
    sortDirectionLabel: 'Richtung:',
    sortFieldTitle:
      'Wählen Sie das verschachtelte Feld, nach dem das Array oder Objekt sortiert werden soll.',
    sortAscending: 'Aufsteigend',
    sortAscendingTitle:
      'Sortieren Sie das ausgewählte Feld in aufsteigender Reihenfolge',
    sortDescending: 'Absteigend',
    sortDescendingTitle:
      'Sortieren Sie das ausgewählte Feld in absteigender Reihenfolge',
    string: 'Zeichenfolge',
    transform: 'Verwandeln',
    transformTitle:
      'Die Elemente dieses ${type} filtern, sortieren oder transformieren',
    transformTitleShort: 'Inhalte filtern, sortieren oder transformieren',
    extract: 'Auszug',
    extractTitle: 'Extrahieren Sie diesen ${type}',
    transformQueryTitle: 'Eine JMESPath-Abfrage eingeben',
    transformWizardLabel: 'Zauberer',
    transformWizardFilter: 'Filter',
    transformWizardSortBy: 'Sortieren nach',
    transformWizardSelectFields: 'Felder auswählen',
    transformQueryLabel: 'Anfrage',
    transformPreviewLabel: 'Vorschau',
    type: 'Geben Sie  ein.',
    typeTitle: 'Ändern Sie den Typ dieses Feldes',
    openUrl:
      'Strg+Klicken oder Strg+Eingabe, um die URL in einem neuen Fenster zu öffnen',
    undo: 'Letzte Aktion rückgängig machen (Strg+Z)',
    validationCannotMove:
      'Kann ein Feld nicht in ein Kind seiner selbst verschieben',
    autoType:
      'Feldtyp "auto". Der Feldtyp wird automatisch aus dem Wert bestimmt und kann ein String, eine Zahl, boolesch oder null sein.',
    objectType:
      'Feldtyp "Objekt". Ein Objekt enthält eine ungeordnete Menge von Schlüssel/Wert-Paaren.',
    arrayType:
      'Feldtyp "Array". Ein Array enthält eine geordnete Sammlung von Werten.',
    stringType:
      'Feldtyp "Zeichenfolge". Der Feldtyp wird nicht aus dem Wert bestimmt, sondern immer als Zeichenfolge zurückgegeben.',
    modeEditorTitle: 'Editor-Modus umschalten',
    modeCodeText: 'Code',
    modeCodeTitle: 'Umschalten auf Code-Highlighter',
    modeFormText: 'Formular',
    modeFormTitle: 'Zum Formular-Editor wechseln',
    modeTextText: 'Text',
    modeTextTitle: 'Zum Editor für einfachen Text wechseln',
    modeTreeText: 'Baum',
    modeTreeTitle: 'Zum Baum-Editor wechseln',
    modeViewText: 'Siehe',
    modeViewTitle: 'Zur Baumansicht wechseln',
    modePreviewText: 'Vorschau',
    modePreviewTitle: 'In den Vorschau-Modus wechseln',
    examples: 'Beispiele',
    default: 'Standardmäßig',
    containsInvalidProperties: 'Enthält ungültige Eigenschaften',
    containsInvalidItems: 'Enthält ungültige Elemente'
  },
  ru: {
    array: 'Массив',
    auto: 'Авто',
    appendText: 'Добавить',
    appendTitle:
      "Добавить новое поле с типом 'авто' после этого поля (Ctrl+Shift+Ins)",
    appendSubmenuTitle: 'Выбрать тип поля для добавления',
    appendTitleAuto: "Добавить новое поле с типом 'авто' (Ctrl+Shift+Ins)",
    ascending: 'По возрастанию',
    ascendingTitle: 'Сортировать ${type} по возрастанию',
    actionsMenu: 'Нажмите для открытия меню действий (Ctrl+M)',
    cannotParseFieldError: 'Невозможно преобразовать поле в JSON',
    cannotParseValueError: 'Невозможно преобразовать значение в JSON',
    collapseAll: 'Свернуть все',
    compactTitle: 'Минификация JSON (Ctrl+Shift+I)',
    descending: 'По убыванию',
    descendingTitle: 'Сортировать ${type} по убыванию',
    drag: 'Потяните для перемещения этого поля (Alt+Shift+Arrows)',
    duplicateKey: 'повторяющийся ключ',
    duplicateText: 'Дублировать',
    duplicateTitle: 'Дублирование полей (Ctrl+D)',
    duplicateField: 'Дублировать поле (Ctrl+D)',
    duplicateFieldError: 'Дублирование названия поля',
    empty: 'пустой',
    expandAll: 'Развернуть все',
    expandTitle:
      'Нажмите для раскрытия/скрытия поля (Ctrl+E)\n' +
      'или Ctrl+Click для раскрытия/скрытия всех потомков.',
    formatTitle: 'Форматирование JSON (Ctrl+I)',
    insert: 'Вставить',
    insertTitle:
      "Вставить новое поле с типом 'авто' перед этим полем (Ctrl+Ins)",
    insertSub: 'Выбрать тип поля для вставки',
    object: 'Объект',
    ok: 'ОК',
    redo: 'Повторить (Ctrl+Shift+Z)',
    removeText: 'Удалить',
    removeTitle: 'Удалить выбранные поля (Ctrl+Del)',
    removeField: 'Удалить поле (Ctrl+Del)',
    repairTitle:
      'Восстановите JSON: исправьте кавычки и escape-символы, удалите комментарии и нотацию JSONP, модифицируйте объекты JavaScript в JSON.',
    searchTitle: 'Поиск',
    searchNextResultTitle: 'Следующий результат (Enter)',
    searchPreviousResultTitle: 'Предыдущий результат (Shift + Enter)',
    selectNode: 'Выбор узла...',
    showAll: 'показать все',
    showMore: 'больше',
    showMoreStatus: '${visibleChilds} из ${totalChilds}',
    sort: 'Сортировка',
    sortTitle: 'Сортировка потомков типа ${type}',
    sortTitleShort: 'Сортировка содержимого',
    sortFieldLabel: 'Поле:',
    sortDirectionLabel: 'Направление:',
    sortFieldTitle: 'Выберите поле для сортировки массива или объекта',
    sortAscending: 'По возрастанию',
    sortAscendingTitle: 'Сортировка выбранного поря по возрастанию',
    sortDescending: 'По убыванию',
    sortDescendingTitle: 'Сортировка выбранного поря по убыванию',
    string: 'Строка',
    transform: 'Модификация',
    transformTitle:
      'Фильтрация, сортировка или модификация данных типа ${type}',
    transformTitleShort: 'Фильтрация, сортировка или модификация данных',
    extract: 'Извлечение',
    extractTitle: 'Извлечь тип ${type}',
    transformQueryTitle: 'Введите JMESpath запрос',
    transformWizardLabel: 'Мастер',
    transformWizardFilter: 'Фильтр',
    transformWizardSortBy: 'Сортировка',
    transformWizardSelectFields: 'Поля',
    transformQueryLabel: 'Запрос',
    transformPreviewLabel: 'Просмотр',
    type: 'Тип',
    typeTitle: 'Изменить тип этого поля',
    openUrl: 'Ctrl+Click или Ctrl+Enter для открытия url в новом окне',
    undo: 'Отменить (Ctrl+Z)',
    validationCannotMove: 'Поле не может быть перемещено в потомка',
    autoType:
      'Тип поля автоматически определяется по значению ' +
      'и может быть строкой, числом, логическим значением или null.',
    objectType: 'Объект содержит неупорядоченный набор пар ключ/значение.',
    arrayType: 'Массив содержит упорядоченный набор значений.',
    stringType:
      'Тип поля не определяется из значения, ' +
      'но всегда возвращается как строка.',
    modeEditorTitle: 'Переключение режима редактора',
    modeCodeText: 'Код',
    modeCodeTitle: 'Переключить в режим редактора кода',
    modeFormText: 'Форма',
    modeFormTitle: 'Переключить в режим формы',
    modeTextText: 'Текст',
    modeTextTitle: 'Переключить в режим редактора текста',
    modeTreeText: 'Дерево',
    modeTreeTitle: 'Переключить в режим редактора дерева',
    modeViewText: 'Просмотр дерева',
    modeViewTitle: 'Переключить в режим просмотра дерева',
    modePreviewText: 'Просмотр',
    modePreviewTitle: 'Переключить в режим просмотра',
    examples: 'Примеры',
    default: 'По умолчанию',
    containsInvalidProperties: 'Содержит недопустимые свойства',
    containsInvalidItems: 'Содержит недопустимые элементы'
  },
  ko: {
    array: '배열',
    auto: '자동',
    appendText: '추가',
    appendTitle:
      '선택한 요소 아래에 "자동" 요소를 추가합니다. (Ctrl + Shift + Ins)',
    appendSubmenuTitle: '추가할 요소의 유형을 선택해주세요.',
    appendTitleAuto: '"자동" 요소를 추가합니다. (Ctrl + Shift + Ins)',
    ascending: '오름차순',
    ascendingTitle: '선택한 ${type}의 하위 요소를 오름차순 정렬합니다.',
    actionsMenu: '메뉴 열기 (Ctrl + M)',
    cannotParseFieldError: 'JSON의 요소를 해석할 수 없습니다.',
    cannotParseValueError: 'JSON의 값을 해석할 수 없습니다.',
    collapseAll: '모두 접기',
    compactTitle:
      '모든 공백을 제거하여 JSON 데이터를 작게 만듭니다. (Ctrl + Shift + I)',
    descending: '내림차순',
    descendingTitle: '선택한 ${type}의 하위 요소를 내림차순으로 정렬',
    drag: '드래그하여 요소를 이동합니다. (Alt + Shift + Arrows)',
    duplicateKey: '복제키',
    duplicateText: '복제',
    duplicateTitle: '선택한 요소를 복제합니다. (Ctrl + D)',
    duplicateField: '선택한 요소를 복제합니다. (Ctrl + D)',
    duplicateFieldError: '요소 이름이 중복되었습니다.',
    empty: '비어있음',
    expandAll: '모두 열기',
    expandTitle:
      '클릭하여 요소를 열거나 닫습니다. (Ctrl + E) \nCtrl + Click으로 모든 하위 요소를 열거나 닫습니다.',
    formatTitle:
      '적절한 들여쓰기 및 줄바꿈으로 JSON 데이터를 정형화합니다. (Ctrl + I)',
    insert: '삽입',
    insertTitle: '선택한 요소 위에 새요소를 삽입합니다. (Ctrl + Ins)',
    insertSub: '삽입할 요소의 유형을 선택해주세요.',
    object: '객체',
    ok: '확인',
    redo: '다시 실행 (Ctrl + Shift + Z)',
    removeText: '삭제',
    removeTitle: '선택한 요소를 삭제합니다. (Ctrl + Del)',
    removeField: '선택한 요소를 삭제합니다. (Ctrl + Del)',
    repairTitle:
      'JSON 교정: JSON 내의 주석과 JSONP 표기법을 지우고 따옴표와 이스케이프 문자를 수정합니다.',
    searchTitle: '요소 또는 값 찾기',
    searchNextResultTitle: '다음으로 찾기 (Enter)',
    searchPreviousResultTitle: '이전으로 찾기 (Shift + Enter)',
    selectNode: '요소를 선택해주세요...',
    showAll: '모두보기',
    showMore: '더보기',
    showMoreStatus:
      '${totalChilds} 개의 항목 중 ${visibleChilds} 개를 표시합니다.',
    sort: '정렬',
    sortTitle: '선택한 ${type}의 하위 요소를 정렬합니다.',
    sortTitleShort: '정렬',
    sortFieldLabel: '요소:',
    sortDirectionLabel: '순서:',
    sortFieldTitle: '배열이나 객체를 정렬하는 요소를 선택해주세요.',
    sortAscending: '오름차순',
    sortAscendingTitle: '선택한 요소를 오름차순으로 정렬합니다.',
    sortDescending: '내림차순',
    sortDescendingTitle: '선택한 요소를 내림차순으로 정렬합니다.',
    string: '문자',
    transform: '변환',
    transformTitle:
      '선택한 ${type}의 하위 요소를 필터하거나 정렬 또는 변환합니다.',
    transformTitleShort: '내용을 필터하거나 정렬 또는 변환합니다.',
    extract: '추출',
    extractTitle: '선택한 ${type}의 값을 최상위에 위치시킵니다.',
    transformQueryTitle: 'JMESPath 쿼리를 입력해주세요.',
    transformWizardLabel: '마법사',
    transformWizardFilter: '필터',
    transformWizardSortBy: '정렬',
    transformWizardSelectFields: '요소를 선택해주세요.',
    transformQueryLabel: '쿼리',
    transformPreviewLabel: '미리보기',
    type: '유형',
    typeTitle: '선택한 요소의 유형을 변경합니다.',
    openUrl: 'Ctrl + Click 또는 Ctrl + Enter로 새 창에서 URL 열기',
    undo: '실행 취소 (Ctrl + Z)',
    validationCannotMove: '하위 요소로 이동할 수 없습니다.',
    autoType:
      '자동: 요소의 형식이 값의 유형으로 결정됩니다. 문자, 숫자, 부울, 또는 null만 허용됩니다.',
    objectType:
      '객체: 순서대로 나열되지 않은 이름/값 쌍으로 이루어진 집합입니다.',
    arrayType: '배열: 순서대로 나열된 값의 집합입니다.',
    stringType:
      '문자: 요소의 유형이 값에서 결정되지 않지만 항상 문자로 반환됩니다.',
    modeEditorTitle: '편집기 유형 변경',
    modeCodeText: '코드',
    modeCodeTitle: '형식 교정을 도와주는 기능이 포함된 문자 편집기',
    modeFormText: '입력 양식',
    modeFormTitle: '정해진 요소에 값을 입력하는 편집기',
    modeTextText: '문자',
    modeTextTitle: '단순 문자 편집기',
    modeTreeText: '트리',
    modeTreeTitle: '트리 구조로 표시되는 편집기',
    modeViewText: '보기',
    modeViewTitle: '읽기전용 트리 구조로 JSON을 표시',
    modePreviewText: '미리보기',
    modePreviewTitle: '읽기전용 문자로 JSON을 표시',
    examples: '예제',
    default: '기본값',
    containsInvalidProperties: '잘못된 속성이 포함되어 있습니다.',
    containsInvalidItems: '잘못된 항목이 포함되어 있습니다'
  }
}
const _locales = Object.keys(_defs)

const _defaultLang = 'en'
const userLang =
  typeof navigator !== 'undefined'
    ? navigator.language || navigator.userLanguage
    : undefined
let _lang = _locales.find((l) => l === userLang) || _defaultLang

export function setLanguage (lang) {
  if (!lang) {
    return
  }
  const langFound = _locales.find((l) => l === lang)
  if (langFound) {
    _lang = langFound
  } else {
    console.error('Language not found')
  }
}

export function setLanguages (languages) {
  if (!languages) {
    return
  }
  for (const language in languages) {
    const langFound = _locales.find((l) => l === language)
    if (!langFound) {
      _locales.push(language)
    }
    _defs[language] = Object.assign(
      {},
      _defs[_defaultLang],
      _defs[language],
      languages[language]
    )
  }
}

export function translate (key, data, lang) {
  if (!lang) {
    lang = _lang
  }
  let text = _defs[lang][key] || _defs[_defaultLang][key] || key
  if (data) {
    for (const dataKey in data) {
      text = text.replace('${' + dataKey + '}', data[dataKey])
    }
  }
  return text
}

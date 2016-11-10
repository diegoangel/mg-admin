'use strict';
angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_US', {"Clientes":"Clients","Contraseña":"Password","Editar":"Edit","Equipos":"Equipment","Ingresar":"Login","Mi Cuenta":"My Account","Modelos":"Models","Usuario":"User","Usuarios":"Users","© 2015 Movilgate Derechos Reservados":"© 2015 Movilgate Rigths Reserved"});
/* jshint +W100 */
}]);
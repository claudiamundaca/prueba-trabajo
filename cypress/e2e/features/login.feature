Feature: Login
  Scenario: Login correcto
    Given Acceso a la pagina
    Given Click en boton Login
    When Ingreso usuario
    When Ingreso contrasena y doy click en Login
    Then Valido logeo exitoso

  Scenario: Login incorrecto - contrasena
    Given Acceso a la pagina
    Given Click en boton Login
    When Ingreso usuario
    When Ingreso contrasena incorrecta y doy click en Login
    Then Valido logeo incorrecto

Scenario: Login incorrecto - usuario
    Given Acceso a la pagina
    Given Click en boton Login
    When Ingreso usuario incorrecto
    When Ingreso contrasena y doy click en Login
    Then Valido logeo incorrecto
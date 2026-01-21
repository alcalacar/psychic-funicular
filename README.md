# Inteligo Cypress Automation Template

[![inteligoBanner](https://s3.amazonaws.com/media.greatplacetowork.com/peru/best-workplaces-in-peru/2024/1-de-10-a-250/06-inteligo-group/logo.png)](https://www.inteligogroup.com/es/nuestra-organizacion.php)

![Made with Javascript](https://forthebadge.com/images/badges/made-with-javascript.svg) ![Built with ❤️](https://forthebadge.com/images/badges/built-with-love.svg)

_Este template define la base para desarrollar automatizaciones con capacidad end-to-end y sincronización de test issues en Jira._

## Requisitos 📋

[![git](https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg)](https://git-scm.com/)
[![node](https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg)](https://nodejs.org)
[![vcode](https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg)](https://code.visualstudio.com/)

## Instalación local

Clonar el proyecto

```bash
  git clone https://username@bitbucket.org/inteligogroup/template-cypress.git
```

Ingresar al proyecto

```bash
  cd template-cypress
```

Instalar dependencias

```bash
  npm install
```

## Configuración de Variables 🔧

Para usar este proyecto es necesario configurar los siguientes variables de entorno:

- [La URL base de tu aplicativo](cypress.config.js#L57)

- [Token Xray](xray-jira-auth.json#L2)

- [Configuración de Jira](cypress.env.json#L5)

  | Campo       | Descripción                                                  |
  | ----------- | ------------------------------------------------------------ |
  | assigneeId  | ID de Usuario en Jira                                        |
  | project     | Key del Proyecto en Jira (Ej. CK)                            |
  | component   | Nombre del componente relacionado al Test Execution          |
  | testJiraKey | Key de Xray : Test, Set, Plan, Execution\* (Ej. CK-11)       |
  | testPlanKey | Key del Test Plan relacionado, puede estar vacio (Ej. CK-05) |
  | issueTitle  | Título que llevarán las ejecuciones                          |

  \*Ejecutar el script con un Test Execution, generara uno nuevo

## Ejecución

El proyecto cuenta con distintos scripts para su ejecución:

### Comandos principales:

| Comando                                     | Descripción                                                                                                                                                                                                             |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre lang="bash">npm test</pre>             | Abrir Cypress para codificar los pasos de pruebas                                                                                                                                                                       |
| <pre lang="bash">npm run jira:export</pre>  | Exporta los .feature del Test Plan en Jira dentro de e2e/features/Jira                                                                                                                                                  |
| <pre lang="bash">npm run local:test</pre>   | Ejecuta los .feature creados dentro de e2e/features                                                                                                                                                                     |
| <pre lang="bash">npm run jira:execute</pre> | Realiza el ciclo de pruebas completo: <br>1. Limpieza inicial de carpetas<br>2. Exportación de test en Jira <br>3. Ejecución de Test exportados<br>4. Publicación de resultados a Jira<br>5. Limpieza final de carpetas |

### Comandos de soporte:

| Comando                                      | Descripción                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| <pre lang="bash">npm run cypress:clean</pre> | Limpia el proyecto de otros archivos                     |
| <pre lang="bash">npm run jira:test</pre>     | Ejecuta los .feature creados dentro de e2e/features/Jira |
| <pre lang="bash">npm run jira:report</pre>   | Publica los resultados de nuestras pruebas a Jira        |

## Enlaces de Interés

- [Page Object Model in Cucumber using Cypress](https://kailash-pathak.medium.com/page-object-model-in-cucumber-using-cypress-eec775fa1698)
- [Estructura Gherkin en Jira](https://docs.getxray.app/pages/viewpage.action?pageId=62268093)

## Documentación

- [Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress)
- [Cucumber Preprocessor Docs](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/readme.md)
- [Xray API Docs](https://docs.getxray.app/display/XRAYCLOUD/Testing+using+Cypress+and+Cucumber+in+JavaScript)
- [Jira API Docs](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#about)

## Autor 📜

Ver. 1.1.0

Carlos Alcalá @alcalacar

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/alcalacar)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://pe.linkedin.com/in/alcalacar)

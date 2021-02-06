import { writable } from 'svelte/store';

export const searchKey = writable('');
export const filterTag = writable('');
export const components = writable([
  {
    name: 'Asset',
    tag: 'core',
    versions: ['5.2'],
    desc:
      'Manages URL generation and versioning of web assets such as CSS stylesheets, JavaScript files and image files.',
  },
  {
    name: 'BrowserKit',
    tag: 'framework',
    versions: ['5.2'],
    desc: 'Simulates the behavior of a web browser.',
  },
  {
    name: 'Cache',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Implements PSR-6 and PSR-16 caching mechanisms and provides adapters for popular caching backends (Redis, Memcache, APCu, etc.)',
  },
  {
    name: 'Config',
    tag: 'application',
    versions: ['5.2'],
    desc:
      'Helps you find, load, combine, autofill and validate configuration values.',
  },
  {
    name: 'Console',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Eases the creation of beautiful and testable command line interfaces.',
  },
  {
    name: 'Contracts',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'A set of abstractions extracted out of the Symfony components.',
  },
  {
    name: 'CssSelector',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Converts CSS selectors to XPath expressions.',
  },
  {
    name: 'DependencyInjection',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Allows you to standardize and centralize the way objects are constructed in your application.',
  },
  {
    name: 'DomCrawler',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Eases DOM navigation for HTML and XML documents.',
  },
  {
    name: 'Dotenv',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Parses .env files to make environment variables stored in them accessible via getenv(), $_ENV or $_SERVER.',
  },
  {
    name: 'ErrorHandler',
    tag: 'core',
    desc: 'Provides tools to manage errors and ease debugging PHP code.',
  },
  {
    name: 'EventDispatcher',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Implements the Mediator pattern in a simple and effective way to make projects truly extensible.',
  },
  {
    name: 'ExpressionLanguage',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Provides an engine that can compile and evaluate expressions.',
  },
  {
    name: 'Filesystem',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Provides basic utilities for the filesystem.',
  },
  {
    name: 'Finder',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Finds files and directories via an intuitive fluent interface.',
  },
  {
    name: 'Form',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Provides tools to easy creating, processing and reusing HTML forms.',
  },
  {
    name: 'Guard',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Brings many layers of authentication together, making it much easier to create complex authentication systems where you have total control.',
  },
  {
    name: 'HttpClient',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'A low-level HTTP client with support for both PHP stream wrappers and cURL. It also provides utilities to consume APIs.',
  },
  {
    name: 'HttpFoundation',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Defines an object-oriented layer for the HTTP specification.',
  },
  {
    name: 'HttpKernel',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Provides the building blocks to create flexible and fast HTTP-based frameworks.',
  },
  {
    name: 'Intl',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Provides fallback code to handle cases when the intl extension is missing.',
  },
  {
    name: 'Ldap',
    tag: 'utility',
    versions: ['5.2'],
    desc: "Provides an LDAP client for PHP on top of PHP\\'s ldap extension.",
  },
  {
    name: 'Lock',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Creates and manages locks, a mechanism to provide exclusive access to a shared resource.',
  },
  {
    name: 'Mailer',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Helps sending emails and provides integration with the most popular mailing services.',
  },
  {
    name: 'Messenger',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Helps applications send and receive messages to/from other applications or via message queues.',
  },
  {
    name: 'Mime',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Allows manipulating MIME messages, used to create advanced email messages.',
  },
  {
    name: 'Notifier',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Sends notifications via one or more channels (email, SMS, Slack, Telegram, ...)',
  },
  {
    name: 'OptionsResolver',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Helps you configuring objects with option arrays.',
  },
  {
    name: 'PHPUnit Bridge',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'PHPUnit Bridge.',
  },
  {
    name: 'Process',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Executes commands in sub-processes.',
  },
  {
    name: 'PropertyAccess',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Provides function to read and write from/to an object or array using a simple string notation.',
  },
  {
    name: 'PropertyInfo',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Extracts information about the properties of PHP classes using metadata of popular sources (Doctrine, PHP Reflection, PHPdoc, etc.)',
  },
  {
    name: 'Routing',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Maps an HTTP request to a set of configuration variables.',
  },
  {
    name: 'Security',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Provides an infrastructure for sophisticated authorization systems.',
  },
  {
    name: 'Semaphore',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Creates and manages semaphores, a mechanism to control access to a common resource by multiple processes in a concurrent system .',
  },
  {
    name: 'Serializer',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Turns objects into a specific format (XML, JSON, Yaml, ...) and the other way around.',
  },
  {
    name: 'Stopwatch',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Provides a way to profile code.',
  },
  {
    name: 'String',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Provides an object-oriented API to strings and deals with bytes, UTF-8 code points and grapheme clusters in a unified way. It also provides a slugger and an inflector.',
  },
  {
    name: 'Templating',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Provides all the tools needed to build any kind of template system.',
  },
  {
    name: 'Translation',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Provides tools to internationalize your application.',
  },
  {
    name: 'Uid',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Provides tools to work with unique identifiers such as UUIDs and ULIDs.',
  },
  {
    name: 'Validator',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Provides tools to validate classes.',
  },
  {
    name: 'VarDumper',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Provides mechanisms for walking through any arbitrary PHP variable.',
  },
  {
    name: 'VarExporter',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Exports any serializable PHP data structure to plain PHP code and allows to instantiate and populate objects without calling their constructors.',
  },
  {
    name: 'WebLink',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'Implements HTML5 Links, Preload and Resource Hints specifications to advise clients (browsers) to preload and prefetch documents through HTTP and HTTP/2 pushes.',
  },
  {
    name: 'Webpack Encore',
    tag: 'utility',
    versions: ['5.2'],
    desc:
      'A simpler way to integrate Webpack into your application, giving you a powerful API for bundling JavaScript modules, pre-processing CSS & JS and compiling and minifying assets.',
  },
  {
    name: 'Workflow',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Provides tools for managing a workflow or finite state machine.',
  },
  {
    name: 'Yaml',
    tag: 'utility',
    versions: ['5.2'],
    desc: 'Loads and dumps YAML files.',
  },
]);
